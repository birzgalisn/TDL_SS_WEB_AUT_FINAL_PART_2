/// <reference types="cypress" />

import BasePage from "./base.page";

class SortablePage extends BasePage {
  static get url() {
    return "/sortable";
  }

  static itemByIdx(idx) {
    return cy.get(`.list-group-item:nth-child(${idx})`);
  }

  static itemByValue(value) {
    return cy.get(".list-group-item").contains(value);
  }

  static get items() {
    return cy.get(".list-group-item");
  }
}

export default SortablePage;
