import { test } from "@playwright/test";
import ComputerPages from "./support/pageObjectModel/pages/computer.page";
import AddComputerPages from "./support/pageObjectModel/pages/addComputer.page";

test("Basic Test Demo", async ({ page }) => {
  // POM
  const computerPage = new ComputerPages(page);
  const addComputerPage = new AddComputerPages(page);
  await computerPage.goto();

  await computerPage.clickOnComputers();

  await addComputerPage.addNewComputer();

  await computerPage.assertNewComputerAdded();
});
