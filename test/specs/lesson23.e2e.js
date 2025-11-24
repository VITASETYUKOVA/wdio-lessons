import mainPage from "../pageobjects/main.page.js";
import salariesPage from "../pageobjects/salaries.page.js";
import jobsPage from "../pageobjects/jobs.page.js";

describe("Full navigation test on DOU", () => {
  it("Go through salaries → jobs → relocate", async () => {

    await mainPage.open();

    await mainPage.clickSalaries();
    await salariesPage.isQuarterVisible();

    await salariesPage.clickJobs();

    await jobsPage.clickFind();
    await jobsPage.clickRelocate();
    await jobsPage.checkTexts();
  });
});