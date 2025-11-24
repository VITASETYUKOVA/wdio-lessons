class SalariesPage {

    get quarterWord() {
        return $('//h4[contains(translate(text(),"КВАРТИЛЬ","квартиль"), "квартиль")]');
    }

    get jobsBtn() {
        return $('a[href="https://jobs.dou.ua/"]');
    }

    async isQuarterVisible() {
        const quarter = await this.quarterWord;
        await quarter.waitForDisplayed({ timeout: 10000 }); // ждём до 10 секунд
        const text = await quarter.getText();
        expect(text.toLowerCase()).toContain("квартиль");
        console.log('Текст квартиль найден:', text);
    }

    async clickJobs() {
        const btn = await this.jobsBtn;
        await btn.waitForDisplayed({ timeout: 10000 });
        await btn.click();
    }
}

export default new SalariesPage();