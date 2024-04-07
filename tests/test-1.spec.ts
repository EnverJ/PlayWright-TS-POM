import { expect, test } from "@playwright/test";
import ComputerPages from "./support/pageObjectModel/pages/computer.page";
import AddComputerPages from "./support/pageObjectModel/pages/addComputer.page";

test("Basic Test", async ({ page }) => {
  await page.goto("https://computer-database.gatling.io/computers");
  await page.getByText("Add a new computer").click();
  await page.locator("#name").fill("Smith");
  await page.locator("#introduced").fill("1999-11-23");
  await page.locator("#discontinued").fill("2000-11-23");
  await page.locator("#company").selectOption({ label: "Thinking Machines" });
  await page.locator("//input[@value='Create this computer']").click();

  await expect(
    page.getByText("Done !  Computer Smith has been created")
  ).toBeVisible();
});

test("Basic Test Demo", async ({ page }) => {
  // POM
  const computerPage = new ComputerPages(page);
  const addComputerPage = new AddComputerPages(page);
  await computerPage.goto();

  await computerPage.clickOnComputers();

  await addComputerPage.addNewComputer();

  await computerPage.assertNewComputerAdded();
});
