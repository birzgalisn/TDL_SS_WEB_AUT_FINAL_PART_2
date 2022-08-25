import * as user from "../fixtures/form.json";
import * as m from "../fixtures/months.json";
import FormPage from "../pageObjects/Form.page";

context("Form", () => {
  beforeEach(() => {
    FormPage.visit();
  });

  it("Fill in the form", () => {
    const [day, month, year] = [...user.dateOfBirth.split("/")].filter(
      (el) => el !== "/"
    );

    FormPage.firstName.type(user.firstName);
    FormPage.lastName.type(user.lastName);
    FormPage.email.type(user.email);
    FormPage.genders.contains(user.gender).click();
    FormPage.mobile.type(user.mobile);
    FormPage.dateOfBirthButton.click().should("be.visible");
    FormPage.years.select(year);
    FormPage.months.select(m[month]);
    FormPage.day(day).last().click();
    FormPage.subjects.type(user.subjects + "{enter}");
    FormPage.hobbies.contains(user.hobbies).click();
    FormPage.address.type(user.address);
    FormPage.stateButton.click();
    FormPage.states.contains(user.state).click({ force: true });
    FormPage.cityButton.click();
    FormPage.cities.contains(user.city).click({ force: true });
    FormPage.submitButton.click();
    FormPage.dialog.contains(user.firstName);
    FormPage.dialog.contains(user.lastName);
    FormPage.dialog.contains(user.email);
    FormPage.dialog.contains(user.subjects);
    FormPage.dialog.contains(user.gender);
    FormPage.dialog.contains(user.mobile);
    FormPage.dialog.contains(day);
    FormPage.dialog.contains(m[month]);
    FormPage.dialog.contains(year);
    FormPage.dialog.contains(user.hobbies);
    FormPage.dialog.contains(user.address);
    FormPage.dialog.contains(user.state);
    FormPage.dialog.contains(user.city);
  });
});
