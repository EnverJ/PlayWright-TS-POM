import { expect, Page } from "@playwright/test";
import ComputerActions from "../sections/computerAction.sections";
import ComputerDetails from "../sections/computerDetails.sections";

export default class AddComputerPages {
  page: Page;
  computerActions: ComputerActions;
  computerDetails: ComputerDetails;
  constructor(page: Page) {
    this.page = page;
    this.computerActions = new ComputerActions(this.page);
    this.computerDetails = new ComputerDetails(this.page);
  }

  public async goto() {
    await this.page.goto("https://computer-database.gatling.io/computers/new");
  }
  public async addNewComputer() {
    await this.computerDetails.enterComputerDetails();
    await this.computerActions.ClickCreateComputerDetails();
  }
}
