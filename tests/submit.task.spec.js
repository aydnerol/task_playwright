// @ts-check
const { test, expect } = require("@playwright/test");

test("should go to ToolsQA main page", async ({ page }) => {
  await page.goto("https://demoqa.com/");
  await expect(page).toHaveTitle(/ToolsQA/);

  // Check if forms element is visible
  await expect(page.locator("text=Forms")).toBeVisible();

  // Navigate the forms page
  await page.locator("text=Forms").click();

  // Check if practice forms is visible
  await expect(page.locator('span:has-text("Practice Form")')).toBeVisible();
  // Navigate the practice form
  await page.locator('span:has-text("Practice Form")').click();

  // Fill the form

  await page.locator('[placeholder="First Name"]').click();
  await page.locator('[placeholder="First Name"]').fill("Erol");
  await page.locator('[placeholder="Last Name"]').click();
  await page.locator('[placeholder="Last Name"]').fill("Aydin");
  // Explicility wait(Normally we dont need this wait since playwright has auto wait feature.) This is for only demo purposes otherwise browser is too fast to see progress.
  await page.waitForTimeout(2000);

  await page.locator('[placeholder="name\\@example\\.com"]').click();

  await page
    .locator('[placeholder="name\\@example\\.com"]')
    .fill("aydinerol4106@gmail.com");

  await page.locator("text=Male").nth(1).click();

  await page.locator('[placeholder="Mobile Number"]').fill("0494408423");

  // Click #dateOfBirthInput
  await page.locator("#dateOfBirthInput").click();
  // Click [aria-label="Choose Monday\, May 15th\, 1989"]

  await page.locator(".react-datepicker__year-select").click();
  await page.locator(".react-datepicker__year-select").selectOption("1989");

  // // Select 5
  // await page.locator("select").first().selectOption("5");
  // // Select 4
  // await page.locator("select").first().selectOption("4");
  // Click [aria-label="Choose Monday\, May 15th\, 1989"]
  // await page
  //   .locator('[aria-label="Choose Monday\\, May 15th\\, 1989"]')
  //   .click();

  // await page
  //   .locator('[aria-label="Choose Monday\\, May 15th\\, 1989"]')
  //   .click();
  // // Click .subjects-auto-complete__value-container
  // await page.locator(".subjects-auto-complete__value-container").click();
  // // Fill text=Subjects 0 results available. Use Up and Down to choose options, press Enter to  >> input[type="text"]
  // await page
  //   .locator(
  //     'text=Subjects 0 results available. Use Up and Down to choose options, press Enter to  >> input[type="text"]'
  //   )
  //   .fill("task");
  // // Click text=Music
  // await page.locator("text=Music").click();
  // // Click input[type="file"]
  // await page.locator('input[type="file"]').click();
  // // Upload erol.jpeg
  // await page.locator('input[type="file"]').setInputFiles("../asset/erol.jpeg");
  // // Click textarea
  // await page.locator("textarea").click();
  // // Fill textarea
  // await page.locator("textarea").fill("Mol");

  // // Click #state svg
  // await page.locator("#state svg").click();
  // // Click #state div:has-text("Select State") >> nth=1
  // await page.locator('#state div:has-text("Select State")').nth(1).click();
  // // Click #react-select-3-option-0
  // await page.locator("#react-select-3-option-0").click();
  // // Click #city div:has-text("Select City") >> nth=1
  // await page.locator('#city div:has-text("Select City")').nth(1).click();
  // // Click #react-select-4-option-0
  // await page.locator("#react-select-4-option-0").click();
  // // Click text=Submit
  // await page.locator("text=Submit").click();
  // // Click text=Close
  // await page.locator("text=Close").click();

  await page.pause();
});
