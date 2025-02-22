// @ts-check
import { test, expect } from '@playwright/test';

test.skip("Validate login with username and password", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill("#user-name", "standard_user");

  await page.fill("#password", "secret_sauce");

 
  await page.click('input[data-test="login-button"]');

  await page.waitForTimeout(2000); 
});

test.skip("Login Using the “Enter” Key Instead of Clicking the Button", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill("#user-name", "standard_user");

  await page.fill("#password", "secret_sauce");

  await page.press('input[data-test="password"]', "Enter");

  await page.waitForTimeout(2000);
});

test.skip("Login with a Different Valid User After Logout", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

   await page.waitForTimeout(1000);

   await page.fill("#user-name", "standard_user");
  await page.waitForTimeout(500);
  await page.fill("#password", "secret_sauce");
  await page.waitForTimeout(500);
  await page.press('input[data-test="password"]', "Enter");

   await page.waitForSelector(".inventory_list", { timeout: 5000 });
  console.log("First login successful");

  await page.waitForTimeout(1000);

   await page.click("#react-burger-menu-btn");
  await page.waitForTimeout(1000);

   await page.waitForSelector('a[data-test="logout-sidebar-link"]', {
    visible: true,
    timeout: 5000,
  });

  await page.waitForTimeout(500);

   await page.click('a[data-test="logout-sidebar-link"]');

  await page.waitForTimeout(1000);

   await page.waitForSelector('input[data-test="login-button"]', {
    timeout: 5000,
  });

  console.log("Logout successful");

  await page.waitForTimeout(1000);

   await page.fill("#user-name", "visual_user");
  await page.waitForTimeout(500);
  await page.fill("#password", "secret_sauce");
  await page.waitForTimeout(500);
  await page.press('input[data-test="password"]', "Enter");

   await page.waitForSelector(".inventory_list", { timeout: 5000 });

  console.log("Second login successful");

   await expect(page.locator(".inventory_list")).toBeVisible();

  await page.waitForTimeout(2000); 
});
 
//  Invalid test cases 

test("Leave usernamme field empty", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill("#password", "secret_sauce");


  await page.pause();

  await page.click('input[data-test="login-button"]');

  await page.waitForTimeout(2000);
});

test("Leave password field empty", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill("#user-name", "standard_user");

  await page.pause();

  await page.click('input[data-test="login-button"]');

  await page.waitForTimeout(2000);
});


test("Login with wrong password", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill("#user-name", "standard_user");

  await page.fill("#password", "secret_sauces");


  await page.pause();

  await page.click('input[data-test="login-button"]');

  await page.waitForTimeout(2000);
});


test("Login with wrong username", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill("#user-name", "standard_usersssss");

  await page.fill("#password", "secret_sauces");

  await page.pause();

  await page.click('input[data-test="login-button"]');

  await page.waitForTimeout(2000);
});


test("Attempt to log in with a locked-out user account", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill("#user-name", "locked_out_user");

  await page.fill("#password", "secret_sauce");

  await page.pause();

  await page.click('input[data-test="login-button"]');
  await page.waitForTimeout(2000);
});


test("Verify that the username and password fields are case-sensitive.", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill("#user-name", "Locked_Out_User");

  await page.fill("#password", "secret_sauce");

  await page.pause();

  await page.click('input[data-test="login-button"]');
  await page.waitForTimeout(2000);
});


test("Login with Spaces in Password", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill("#user-name", "Locked_Out_User");

  await page.fill("#password", "secret_sauce  ");

  await page.pause();

  await page.click('input[data-test="login-button"]');
  await page.waitForTimeout(2000);
});


test("Login with Unicode or Emoji Characters in Username", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.fill("#user-name", "Locked_Out_User😂");

  await page.fill("#password", "secret_sauce");

  await page.pause();

  await page.click('input[data-test="login-button"]');
  await page.waitForTimeout(2000);
});