class JobsPage {

  get relocateBtnByTitle() {
    return $('//a[contains(@href,"deftech.dou.ua")]');
  }

  get relocateBtnByText() {
    return $('//a[contains(text(),"DefTech")]');
  }


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

  async clickRelocateIfExists() {
    const btnByHref = this.relocateBtnByTitle;
    const btnByText = this.relocateBtnByText;

    if (await btnByHref.isExisting()) {
      await btnByHref.scrollIntoView();
      await btnByHref.click();
      return;
    }

    if (await btnByText.isExisting()) {
      await btnByText.scrollIntoView();
      await btnByText.click();
      return;
    }

    console.log('DefTech button not found — skipping step');
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