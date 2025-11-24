import gitHubPage from "../pageobjects/githab.page.js";

describe("GitHub Subscribe flow", () => {
    it("Subscribe to newsletter", async () => {
        await gitHubPage.open();

        await gitHubPage.scrollToMainSubscribe();
        await gitHubPage.clickMainSubscribe();

        await gitHubPage.fillForm("test@example.com", "Ukraine");


    });
});