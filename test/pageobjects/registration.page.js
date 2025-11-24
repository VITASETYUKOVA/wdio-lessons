class RegistrationPage {
    get emailInput() { return $('#email'); }
    get passwordInput() { return $('#password'); }
    get usernameInput() { return $('#login'); }
    get signUpBtn() { return $('=Sign up'); }

    async open() {
        await browser.url('https://github.com');
    };

    async clickSignUp() {
        await this.signUpBtn.click();
    };

    async fillForm(username, email, password) {
        await this.usernameInput.setValue(username);
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
    }

    async getFormValues() {
        return {
            username: await this.usernameInput.getValue(),
            email: await this.emailInput.getValue(),
            passwordLength: (await this.passwordInput.getValue()).length,
        };
    }
}

export default new RegistrationPage();