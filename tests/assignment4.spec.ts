import {test, expect} from '@playwright/test';
import { PracticeFormPage } from '../Page-Object/practiceForm.page';
import testData from '../testData/testData4.json';
 
 
test('page object model',async({page})=>{
    const form = new PracticeFormPage(page);
    await form.navigate();
    await form.fillForm(testData);
    await form.submitForm();
    await form.verifyFormSubmitted();
});