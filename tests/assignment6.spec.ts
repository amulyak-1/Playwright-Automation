// import { test, expect } from '@playwright/test';
// test('Negative testing - mandatory fields validation', async ({ page }) => {
//   await page.goto('https://demoqa.com/automation-practice-form');
 
//   await page.getByRole('button', { name: 'Submit' }).click();
 
//   // Validate form NOT submitted
//   await expect(page.getByText('Thanks for submitting the form')).not.toBeVisible();
// });
import { test, expect } from "@playwright/test";
import { PracticeFormPage } from "../Page-Object/practiceForm.assignment6";
import formData from "../testData/testData6.json";
 
test("Assignment 6: Negative – Border validation on required fields", async ({ page }) => {
 
  const practiceForm = new PracticeFormPage(page);
 
  await practiceForm.navigate(formData.url);
 
  // Submit without filling anything
  await practiceForm.submitBtn.click();
 
  // Verify red borders (required validation)
  await practiceForm.expectBorderError(practiceForm.firstNameInput);
  await practiceForm.expectBorderError(practiceForm.lastNameInput);
 // await practiceForm.expectBorderError(practiceForm.userEmailInput);
  await practiceForm.expectBorderError(practiceForm.mobileInput);
 
  // Modal should NOT appear
  await expect(page.getByText(formData.assertion)).not.toBeVisible();
});