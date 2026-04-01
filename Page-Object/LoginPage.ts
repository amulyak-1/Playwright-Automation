import { Page, Locator } from '@playwright/test';

export class AppPages {
  readonly page: Page;

  // Login locators
  readonly email: Locator;
  readonly password: Locator;
  readonly submitBtn: Locator;
  readonly logoutBtn: Locator;

  // Contact locators
  readonly addNewContactBtn: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly dob: Locator;
  readonly contactEmail: Locator;
  readonly phone: Locator;
  readonly address1: Locator;
  readonly address2: Locator;
  readonly city: Locator;
  readonly state: Locator;
  readonly postalCode: Locator;
  readonly country: Locator;
  readonly contactSubmitBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    // Login
    this.email = page.getByRole('textbox', { name: 'Email' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
    this.logoutBtn = page.getByRole('button', { name: 'Logout' });

    // Contact
    this.addNewContactBtn = page.getByRole('button', { name: 'Add a New Contact' });
    this.firstName = page.getByRole('textbox', { name: '* First Name:' });
    this.lastName = page.getByRole('textbox', { name: '* Last Name:' });
    this.dob = page.getByRole('textbox', { name: 'Date of Birth:' });
    this.contactEmail = page.getByRole('textbox', { name: 'Email:' });
    this.phone = page.getByRole('textbox', { name: 'Phone:' });
    this.address1 = page.getByRole('textbox', { name: 'Street Address 1:' });
    this.address2 = page.getByRole('textbox', { name: 'Street Address 2:' });
    this.city = page.getByRole('textbox', { name: 'City:' });
    this.state = page.getByRole('textbox', { name: 'State or Province:' });
    this.postalCode = page.getByRole('textbox', { name: 'Postal Code:' });
    this.country = page.getByRole('textbox', { name: 'Country:' });
    this.contactSubmitBtn = page.getByRole('button', { name: 'Submit' });
  }

  // ---------------- LOGIN ACTIONS ----------------
  async navigate() {
    await this.page.goto('https://thinking-tester-contact-list.herokuapp.com/');
  }

  async login(email: string, password: string) {
    await this.email.waitFor({ state: 'visible' });
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submitBtn.click();
  }

  async logout() {
    await this.logoutBtn.click();
  }

  // ---------------- CONTACT ACTIONS ----------------
  async openContactForm() {
    await this.addNewContactBtn.click();
  }

  async fillContactForm(contact: any) {
    await this.firstName.fill(contact.firstName);
    await this.lastName.fill(contact.lastName);
    await this.dob.fill(contact.dob);
    await this.contactEmail.fill(contact.email);
    await this.phone.fill(contact.phone);
    await this.address1.fill(contact.address1);
    await this.address2.fill(contact.address2);
    await this.city.fill(contact.city);
    await this.state.fill(contact.state);
    await this.postalCode.fill(contact.postalCode);
    await this.country.fill(contact.country);
  }

  async submitContact() {
    await this.contactSubmitBtn.click();
  }
}