/// <reference types="cypress" />

import BasePage from "./Base.page";

class FormPage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }

  static get firstName() {
    return cy.get("#firstName");
  }

  static get lastName() {
    return cy.get("#lastName");
  }

  static get email() {
    return cy.get("#userEmail");
  }

  static get genders() {
    return cy.get("#genterWrapper");
  }

  static get mobile() {
    return cy.get("#userNumber");
  }

  static get dateOfBirthButton() {
    return cy.get("#dateOfBirthInput");
  }

  static get subjects() {
    return cy.get("#subjectsInput");
  }

  static get hobbies() {
    return cy.get("#hobbiesWrapper");
  }

  static get address() {
    return cy.get("#currentAddress");
  }

  static get stateButton() {
    return cy.get("#state");
  }

  static get states() {
    return cy.get("#state > div > div");
  }

  static get cityButton() {
    return cy.get("#city");
  }

  static get cities() {
    return cy.get("#city > div > div");
  }

  static day(value) {
    const n = ("" + value).length === 2 ? value : "0" + value;
    return cy.get(`.react-datepicker__day--0${n}`);
  }

  static get months() {
    return cy.get(".react-datepicker__month-select");
  }

  static get years() {
    return cy.get(".react-datepicker__year-select");
  }

  static get submitButton() {
    return cy.get("#submit");
  }

  static get dialog() {
    return cy.get("tbody");
  }
}

export default FormPage;
