import GitHubPricingPage from '../pageobjects/pricing.page.js';

describe('GitHub Pricing page test', () => {
    it('should check headers and scroll to Compare features', async () => {
        await GitHubPricingPage.open();

        await GitHubPricingPage.goToPricing();

        await expect(GitHubPricingPage.deliveryHeader).toBeDisplayed();

        await GitHubPricingPage.scrollToCompare();
        const startScroll = await GitHubPricingPage.getScrollY();

        await GitHubPricingPage.clickCompare();

        await GitHubPricingPage.waitForCompareHeader();

        const endScroll = await GitHubPricingPage.getScrollY();
        console.log('Scroll start:', startScroll, 'Scroll end:', endScroll);
        expect(endScroll).toBeGreaterThan(startScroll);

        await expect(GitHubPricingPage.compareHeader).toBeDisplayed();

    });
});