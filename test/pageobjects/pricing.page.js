class GitHubPricingPage {
    get pricingBtn() { return $('a[href="/pricing"]'); }
    get deliveryHeader() { return $('h1=Try the Copilot-powered platform'); }
    get compareLink() { return $('a=Compare all features'); }
    get compareHeader() { return $('h1=Compare features'); }

    async open() {
        await browser.url('https://github.com');
    }

    async goToPricing() {
        await this.pricingBtn.click();
    }

    async scrollToCompare() {
        await this.compareLink.scrollIntoView();
    }

    async clickCompare() {
        await this.compareLink.click();
    }

    async getScrollY() {
        return await browser.execute(() => window.scrollY);
    }

    async waitForCompareHeader() {
        await this.compareHeader.waitForDisplayed({ timeout: 5000 });
    }
}
export default new GitHubPricingPage();