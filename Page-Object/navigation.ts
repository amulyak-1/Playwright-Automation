import { Page, Locator, expect } from '@playwright/test';
 
export class HomePage {
  readonly page: Page;
 
  // ===== Locators =====
  readonly elements: Locator;
  readonly textBox: Locator;
  readonly forms: Locator;
  readonly practiceForm: Locator;
  readonly widgets: Locator;
  readonly selectMenu: Locator;
 
  readonly textBoxHeading: Locator;
  readonly practiceFormHeading: Locator;
  readonly selectMenuHeading: Locator;
 
  constructor(page: Page) {
    this.page = page;
 
    // Menu Locators
    this.elements = page.getByText('Elements');
    this.textBox = page.getByText('Text Box');
 
    this.forms = page.getByText('Forms');
    this.practiceForm = page.getByText('Practice Form');
 
    this.widgets = page.getByText('Widgets');
    this.selectMenu = page.getByText('Select Menu');
 
    // Heading Locators
    this.textBoxHeading = page.getByRole('heading', { name: 'Text Box' });
    this.practiceFormHeading = page.getByRole('heading', { name: 'Practice Form' });
    this.selectMenuHeading = page.getByRole('heading', { name: 'Select Menu' });
  }
 
  // ===== Actions =====
 
  async navigate() {
    await this.page.goto('https://demoqa.com/');
  }
 
  async openElementsTextBox() {
    await this.elements.click();
    await this.textBox.click();
  }
 
  async validateTextBoxPage() {
    await expect(this.textBoxHeading).toBeVisible();
  }
 
  async openPracticeForm() {
    await this.forms.click();
    await this.practiceForm.click();
  }
 
  async validatePracticeForm() {
    await expect(this.practiceFormHeading).toBeVisible();
  }
 
  async openSelectMenu() {
    await this.widgets.click();
    await this.selectMenu.click();
  }
 
  async validateSelectMenu() {
    await expect(this.selectMenuHeading).toBeVisible();
  }
}