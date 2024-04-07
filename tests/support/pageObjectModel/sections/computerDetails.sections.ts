import { Page } from "@playwright/test";
export default class ComputerActions {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  nameTextBox = () => this.page.locator("#name");
  introductionTextBox = () => this.page.locator("#introduced");
  discontinuedTextBox = () => this.page.locator("#discontinued");
  companyTextBox = () => this.page.locator("#company");
  createTextBox = () => this.page.locator("//input[@value='Create this computer']");

  // actions
  public async enterComputerDetails()
  {
    await this.nameTextBox().fill("Smith");
    await this.introductionTextBox().fill("1999-12-23");
    await this.discontinuedTextBox().fill("2000-12-23");
    await this.companyTextBox().selectOption({ label: "Thinking Machines" })
    await this.createTextBox().click();
  }

  await page.locator("#name").fill("Smith");
  await page.locator("#introduced").fill("1999-11-23");
  await page.locator("#discontinued").fill("2000-11-23");
  await page.locator("#company").selectOption({ label: "Thinking Machines" });
  await page.locator("//input[@value='Create this computer']").click();
}
