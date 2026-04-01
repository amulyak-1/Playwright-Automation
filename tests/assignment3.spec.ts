import { test, expect } from '@playwright/test';
 
test('Test @smoke', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  
  await page.getByRole('link', { name: 'Elements' }).click();
  await page.getByRole('link', { name: 'Text Box' }).click();
  await expect(page.getByRole('heading', { name: 'Text Box' })).toBeVisible();
  await expect(page.getByText('Full Name')).toBeVisible();
  await page.getByText('Elements').click(); //Here clicked on elemenets again to collapse the elements
  console.log("User navigate to elements and clicked textbox and validated the heading of the page and one element")

  await page.getByText('Forms').click();
  await page.getByRole('link', { name: 'Practice Form' }).click();
  await expect(page.getByRole('heading', { name: 'Practice Form' })).toBeVisible();
  await expect(page.getByText('Name')).toBeVisible();
  await page.getByText('Forms', { exact: true }).click(); //Here clicked on forms again to collapse the elements
  console.log("User navigate to forms and clicked practice forms and validated the heading of the page and one element")

  await page.getByText('Widgets').click();
  await page.getByRole('link', { name: 'Select Menu' }).click();
  await expect(page.getByRole('heading', { name: 'Select Menu' })).toBeVisible();
  await expect(page.getByText('Select Value')).toBeVisible();
  console.log("User navigate to widgets and clicked select menu and validated the heading of the page and one element")
});