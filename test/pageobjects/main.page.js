class MainPage {
    get salariesBtn() { return $('a[href="https://jobs.dou.ua/salaries/"]') }
    get jobsBtn() { return $('a[href="https://jobs.dou.ua/"]') }

    async open() {
        await browser.url('https://dou.ua');
    }

    async clickSalaries() {
        await this.salariesBtn.click();
    }

}

export default new MainPage();