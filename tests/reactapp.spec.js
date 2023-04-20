const { test, expect } = require("@playwright/test");

test("Title check", async ({ page }) => {
  await page.goto("http://localhost:5173");

  // expects to have an img tag with class logo
  expect(await page.$("img.logo")).toBeTruthy();
});

test("counter button test", async ({ page }) => {
  await page.goto("http://localhost:5173");
  // await page.waitForSelector("text=Counter");
  await page.getByRole("button", { name: "Counter" }).click();
});

test("color text field", async ({ page }) => {
  await page.goto("http://localhost:5173");
  // find text field with id colorBackgroundInput
  const textField = await page.$("#colorBackgroundInput");
  //fill the text field with red
  await textField.fill("red");
  expect(
    await page.$eval(".color-changer", (el) => el.style.backgroundColor)
  ).toBe("red");
});

//click on the button with id tab1 and then expect the tab to have h2 with text "Tab 2 content"
test("tab 1", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.click("#tab1");
  expect(await page.$("text=Tab 2 content")).toBeTruthy();
});
