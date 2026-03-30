import { Page , Locator, expect} from '@playwright/test';
export class PracticeFormPage{
    readonly page : Page;
 
    readonly firstName : Locator;
    readonly lastName : Locator;
    readonly email : Locator;
    readonly male : Locator;
    readonly female : Locator;
    readonly other : Locator;
    readonly mobile : Locator;
    readonly submitBtn : Locator;
    readonly successMsg : Locator;
 
    constructor(page : Page){
        this.page = page;
        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name' });
        this.email = page.getByRole('textbox', { name: 'name@example.com' });
        this.male = page.getByRole('radio', { name: 'Male', exact: true });
        this.female = page.getByRole('radio', { name: 'Female' });
        this.other = page.getByRole('radio', { name: 'Other' });
        this.mobile = page.getByRole('textbox', { name: 'Mobile Number' });
        this.submitBtn = page.getByRole('button', { name: 'Submit' });
        this.successMsg = page.getByText('Thanks for submitting the form');
    }
 
    async navigate(){
        await this.page.goto('https://demoqa.com/automation-practice-form');
    }
 
    async fillForm(data : any){
        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.email.fill(data.email);
 
        if(data.gender === 'Male') await this.male.click();
        else if(data.gender === 'Female') await this.female.click();
        else if(data.gender === 'Other') await this.other.click();
 
        await this.mobile.fill(data.mobile);
    }
 
    async submitForm(){
        await this.submitBtn.click();
    }
 
    async verifyFormSubmitted(){
        await expect(this.successMsg).toBeVisible();
    }
}
 
 