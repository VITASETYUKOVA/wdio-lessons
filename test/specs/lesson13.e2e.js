describe(' WebdriverIO API page navigation', () => {
        it('should go to API page, scroll, check link block and pagination button, click and verify header ', async () => {
                await browser.url('https://webdriver.io/');

                await $('nav a[href="/docs/api"]').click();
                await browser.pause(2000);
                await expect(browser).toHaveUrl('https://webdriver.io/docs/api')

                const blogLink = await $('a.footer__link-item[href="/blog"]');
                await blogLink.scrollIntoView();
                await browser.pause(2000);
                console.log('Link block displayed:', await blogLink.isDisplayed());

                const paginationButton = await $('.pagination-nav__link.pagination-nav__link--next');
                await browser.pause(2000);
                await paginationButton.scrollIntoView();
                await browser.pause(2000);
                const isVisible = await paginationButton.isDisplayed();
                const isClickable = await paginationButton.isClickable();
                const html = await paginationButton.getHTML();
                console.log('Pagination button:', { isVisible, isClickable, html });

                await paginationButton.click();
                await browser.pause(2000);


                const header = await $('h1');
                await browser.waitUntil(async () => {
                        return header.isDisplayed();
                }, 5000, 'Protocol Commands');

                console.log('Header text:', await header.getText());

        });
});
