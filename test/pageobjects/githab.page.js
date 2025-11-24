class GitHubPage {
    get mainSubscribeBtn() {
        return $('a.btn-mktg[href="https://github.com/newsletter"]');
    }

    get emailInput() {
        return $('input[type="email"], #email');
    }

    get countrySelect() {
        return $('select[name="country"], select#country');
    }
    countryOption(country) {
        return $(`//option[normalize-space(text())="${country}"]`);
    }

    get formSubscribeBtn() {
        return $('button[type="submit"]');
    }

    async open() {
        await browser.url("https://github.com");
    }

    async scrollToMainSubscribe() {
        await this.mainSubscribeBtn.scrollIntoView();
    }

    async clickMainSubscribe() {
        await this.mainSubscribeBtn.click();

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes("newsletter"),
            { timeout: 15000 }
        );
    }

    async fillForm(email, country) {
        await this.emailInput.waitForDisplayed({ timeout: 10000 });
        await this.emailInput.setValue(email);

        await this.countrySelect.click();
        await this.countryOption(country).click();

        const checkboxWrapper = await $('span.Primer_Brand__Checkbox-module__Checkbox___T8FJa');
        await checkboxWrapper.waitForClickable({ timeout: 10000 });
        await checkboxWrapper.click();
    }
}

export default new GitHubPage();