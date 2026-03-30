import { test, expect} from '@playwright/test';
import formData from '../testData/formData5.json';
import { PracticeFormPage } from '../Page-Object/practiceForm.page';
 
test.describe('Data Driven Testing',()=>{
    formData.forEach((data, index)=>{
        test(`dataset ${index + 1}`,async({ page })=>{
            const form = new PracticeFormPage(page);
            await form.navigate();
            await form.fillForm(data);
            await form.submitForm();
            await form.verifyFormSubmitted();
        });
    });
});