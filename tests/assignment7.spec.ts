import { test } from '@playwright/test';
import { AppPages } from '../Page-Object/Loginpage';
import userData from '../testData/users.json';

test('Full parallel execution - login to contact creation', async ({ browser }) => {

  await Promise.all([

    // ---------------- USER 1 ----------------
    (async () => {
      const context = await browser.newContext();
      const page = await context.newPage();
      const app = new AppPages(page);

      await app.navigate();
      await app.login(
        userData.user1.email,
        userData.user1.password
      );

      await app.openContactForm();
      await app.fillContactForm(userData.user1.contact);
      await app.submitContact();

      await app.logout();
      await context.close();
    })(),

    // ---------------- USER 2 ----------------
    (async () => {
      const context = await browser.newContext();
      const page = await context.newPage();
      const app = new AppPages(page);

      await app.navigate();
      await app.login(
        userData.user2.email,
        userData.user2.password
      );

      await app.openContactForm();
      await app.fillContactForm(userData.user2.contact);
      await app.submitContact();

      await app.logout();
      await context.close();
    })()

  ]);
});