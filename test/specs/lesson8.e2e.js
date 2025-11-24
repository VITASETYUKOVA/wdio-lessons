describe(' tab API and menu search of WebdriverIO site test', () => {
  it('should open API page,check H1, link and search input ', async () => {
    await browser.url('https://webdriver.io/');

    await $('nav a[href="/docs/api"]').click();
    await browser.pause(2000);
    await expect(browser).toHaveUrl('https://webdriver.io/docs/api')

    const elem = await $('h1');
    await expect(elem).toHaveText('Introduction');

    const link = await $("a[href='/docs/api/webdriver']");
    await browser.pause(2000);
    await link.moveTo();
    const text = await link.getText();
    console.log("Link text:", text);
    const location = await link.getLocation();
    console.log("Location:", location);
    const href = await link.getAttribute('href');
    await expect(href).toContain('/docs/api/webdriver');

    const searchButton = await $(".DocSearch.DocSearch-Button");
    await searchButton.click();
    await browser.pause(1000);

    const searchInput = await $("#docsearch-input");
    await searchInput.setValue("all is done");
    await browser.pause(500);

    const value = await searchInput.getValue();
    console.log("Input value:", value);

    await searchInput.setValue("");
    await browser.pause(500);

  });
});

