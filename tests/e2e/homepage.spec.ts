import { test, expect } from "@playwright/test";

test.describe("Photo Journey Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/", { timeout: 60000 });
  });

  test("should display the header with logo and navigation", async ({ page }) => {
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("header").getByText("Photo Journey").first()).toBeVisible();
  });

  test("should display hero section with title", async ({ page }) => {
    const heading = page.getByRole("heading", { name: /Through the Lens/i });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("Morocco");
  });

  test("should display gradient banner", async ({ page }) => {
    await expect(page.getByText(/Before You Scroll/i)).toBeVisible();
    await expect(page.getByText(/Discover Photography Tips/i)).toBeVisible();
  });

  test("should display Behind The Lens section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Behind The Lens" })
    ).toBeVisible();
  });

  test("should display Fez section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /Fez.*City of Detail/i })
    ).toBeVisible();
  });

  test("should display Marrakech section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /Marrakech.*Heat.*Motion/i })
    ).toBeVisible();
  });

  test("should display Chasing Morocco section", async ({ page }) => {
    await page.goto("/", { timeout: 60000, waitUntil: "domcontentloaded" });
    await expect(
      page.getByRole("heading", { name: /Chasing Morocco/i })
    ).toBeVisible({ timeout: 15000 });
  });

  test("should display Related Articles section with 3 cards", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Related Articles" })
    ).toBeVisible();
    const articleSection = page.locator("section").filter({
      has: page.getByRole("heading", { name: "Related Articles" }),
    });
    const articleCards = articleSection.locator("a");
    await expect(articleCards).toHaveCount(3);
  });

  test("should display footer with newsletter input", async ({ page }) => {
    await expect(page.locator("footer")).toBeVisible();
    await expect(page.locator("footer input[type='email']")).toBeVisible();
    await expect(
      page.locator("footer").getByRole("link", { name: "Photo Journey" })
    ).toBeVisible();
  });

  test("should be responsive - mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await expect(
      page.getByRole("heading", { name: /Through the Lens/i })
    ).toBeVisible();
  });

  test("should be responsive - tablet viewport", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(
      page.getByRole("heading", { name: /Through the Lens/i })
    ).toBeVisible();
  });

  test("mobile menu should toggle on small screens", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const hamburger = page.locator("header button[aria-label='Toggle menu']");
    await expect(hamburger).toBeVisible();
    await hamburger.click();
    await expect(page.locator("header nav").last()).toBeVisible();
  });
});
