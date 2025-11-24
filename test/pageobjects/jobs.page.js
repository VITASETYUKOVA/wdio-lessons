class JobsPage {

  get relocateBtn() { return $('//a[@title="DefTech" and contains(@href,"deftech.dou.ua")]'); }

  get findButton() {
    return $('input.btn-search[type="submit"]');
  }

  get quickLinksText() {
    return $('//*[contains(text(), "Швидкі переходи")]');
  }
  async clickFind() {
    await this.findButton.waitForDisplayed({ timeout: 20000 });
    await this.findButton.click();
  }
  async clickRelocate() {
    await this.relocateBtn.waitForDisplayed();
    await this.relocateBtn.click();
  }

  async checkTexts() {
    const news = await $('h3 > a[href="https://deftech.dou.ua/news/"]');
    await news.scrollIntoView();
    await browser.waitUntil(async () => news.isDisplayed(), 5000, 'News header not displayed');
    console.log('Header text:', await news.getText());

    const blogs = await $('a[href="https://deftech.dou.ua/blogs/?from=fpcol"]');
    await news.scrollIntoView();
    await browser.waitUntil(async () => blogs.isDisplayed(), 5000, 'Blogs header not displayed');
    console.log('Header text:', await blogs.getText());

    const popular = await $('a[href="https://dou.ua/forums/tags/Defence%20tech/?from=fptopics"]');
    await news.scrollIntoView();
    await browser.waitUntil(async () => popular.isDisplayed(), 5000, 'Popular header not displayed');
    console.log('Header text:', await popular.getText());
  }
}

export default new JobsPage();