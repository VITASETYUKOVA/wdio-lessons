import RegistrationPage from '../pageobjects/registration.page.js';

describe('GitHub Registration Form Fill Test', () => {

    it('should open GitHub, click Sign up and fill the registration form', async () => {

        await RegistrationPage.open();

        await RegistrationPage.clickSignUp();

        await browser.pause(2000);

        await RegistrationPage.fillForm('TestUser123', 'testuser123@example.com', 'TestPassword!123');

        const values = await RegistrationPage.getFormValues();
        console.log(values);

        expect(values.username).toBe('TestUser123');
        expect(values.email).toBe('testuser123@example.com');
        expect(values.passwordLength).toBeGreaterThan(0);

    });

});