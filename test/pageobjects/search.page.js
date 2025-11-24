class GitHubSearchPage {

    get searchButton() {
        return $('.header-search-button');
    }

    get searchInput() {
        return $('#query-builder-test');
    }

    get resultCards() {
        return $$('div[data-testid="results-list"] > div > div');
    }

    async open() {
        await browser.url('https://github.com');
    }

    async focusSearch() {
        await this.searchButton.waitForClickable({ timeout: 5000 });
        await this.searchButton.click();
    }

    async searchFor(text) {
        await this.searchInput.waitForDisplayed({ timeout: 5000 });
        await this.searchInput.setValue(text);
        await browser.keys('Enter');
    }

    async checkResultsContain(text) {
        await browser.waitUntil(async () => {
            const cards = await this.resultCards;
            return cards.length > 0;
        }, { timeout: 10000, timeoutMsg: 'No search results displayed' });

        let found = false;

        for (const card of await this.resultCards) {
            const cardText = await card.getText();
            if (cardText.toLowerCase().includes(text.toLowerCase())) {
                found = true;
                break;
            }
        }

        if (!found) {
            throw new Error(`Text "${text}" not found in any card`);
        }
    }
}

export default new GitHubSearchPage();