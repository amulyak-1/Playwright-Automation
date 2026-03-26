import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 await page.goto('https://demoqa.com/automation-practice-form');
  
 
  await page.getByRole('textbox', { name: 'First Name' }).fill('Amulya');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('kp');
 
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('amulyakp@emmes.com');
  await page.getByRole('radio', { name: 'Female' }).check();
 
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9876543210');
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('gridcell', { name: 'Choose Sunday, March 1st,' }).click();
  await page.getByRole('checkbox', { name: 'Reading' }).check();
  await page.locator('#state svg').click();
  await page.getByRole('option', { name: 'Rajasthan' }).click();
  await page.locator('div').filter({ hasText: /^Select City$/ }).nth(3).click();
  await page.getByRole('option', { name: 'Jaiselmer' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  //Assertion
  await expect (page.getByText('Thanks for submitting the form')).toBeVisible();
});