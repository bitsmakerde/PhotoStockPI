import { expect, test } from "@playwright/test";

test("write a post", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Create T3 App")).toBeVisible();
});
