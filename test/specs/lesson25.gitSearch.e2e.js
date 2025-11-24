import gitHubSearchPage from '../pageobjects/search.page.js';

describe('GitHub Search flow', () => {
    it('should search "act" and check results', async () => {
        await gitHubSearchPage.open();
        await gitHubSearchPage.focusSearch();
        await gitHubSearchPage.searchFor('act');
        await gitHubSearchPage.checkResultsContain('act');
    });
});