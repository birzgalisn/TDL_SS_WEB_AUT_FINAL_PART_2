import SortablePage from "../pageObjects/Sortable.page";

context("Sortable", () => {
  beforeEach(() => {
    SortablePage.visit();
  });

  it("Sorting items", () => {
    let arr = ["One", "Two", "Three", "Four", "Five", "Six"];

    arr.forEach((el, idx) => {
      SortablePage.itemByIdx(idx + 1).contains(el);
    });

    arr.reverse();

    arr.forEach((el, idx, arr) => {
      if (idx === arr.length - 1) {
        return;
      }

      SortablePage.itemByValue(el).trigger("mousedown");
      SortablePage.itemByValue("One")
        .trigger("mousemove", "top")
        .trigger("mouseup");
    });

    arr.forEach((el, idx) => {
      SortablePage.itemByIdx(idx + 1).contains(el);
    });
  });
});
