// @ts-check
const { test, expect } = require("@playwright/test");

test("homepage has Playwright in title and get started link linking to the intro page", async ({
  page,
}) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.locator("text=Get Started");

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute("href", "/docs/intro");

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

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
  await page.waitForTimeout(2000);

  // Fill the form

  await page.locator('[placeholder="First Name"]').click();
  await page.locator('[placeholder="First Name"]').fill("Erol");
  await page.locator('[placeholder="Last Name"]').click();
  await page.locator('[placeholder="Last Name"]').fill("Aydin");
  // Explicility wait(Normally we dont need this wait since playwright has auto wait feature.) This is for only demo purposes otherwise browser is too fast to see progress.
  await page.waitForTimeout(2000);

  // await page.pause();
});

// // Click [placeholder="First Name"]
// await page.locator('[placeholder="First Name"]').click();
// // Click [placeholder="Last Name"]
// await page.locator('[placeholder="Last Name"]').click();
// // Click [placeholder="First Name"]
// await page.locator('[placeholder="First Name"]').click();
// // Fill [placeholder="First Name"]
// await page.locator('[placeholder="First Name"]').fill('Erol');
// // Click [placeholder="Last Name"]
// await page.locator('[placeholder="Last Name"]').click();
// // Fill [placeholder="Last Name"]
// await page.locator('[placeholder="Last Name"]').fill('Aydin');
// // Click [placeholder="Last Name"]
// await page.locator('[placeholder="Last Name"]').click();
// // Click [placeholder="name\@example\.com"]
// await page.locator('[placeholder="name\\@example\\.com"]').click();
// // Fill [placeholder="name\@example\.com"]
// await page.locator('[placeholder="name\\@example\\.com"]').fill('aydinerol4106@gmail.com');
// // Click text=Male >> nth=1
// await page.locator('text=Male').nth(1).click();
// // Fill [placeholder="Mobile Number"]
// await page.locator('[placeholder="Mobile Number"]').fill('0494408423');
// // Click #dateOfBirthInput
// await page.locator('#dateOfBirthInput').click();
// // Fill text=Date of BirthPrevious MonthNext MonthAugust 2022JanuaryFebruaryMarchAprilMayJune >> input[type="text"]
// await page.locator('text=Date of BirthPrevious MonthNext MonthAugust 2022JanuaryFebruaryMarchAprilMayJune >> input[type="text"]').fill('');
// await page.waitForURL('https://demoqa.com/');
