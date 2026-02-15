import { test, expect } from '@playwright/test';

test('landing page loads and displays key sections', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Check for Navbar
  await expect(page.locator('nav')).toBeVisible();
  await expect(page.locator('nav').getByText('LITTERASYNC')).toBeVisible();

  // Check for Hero
  await expect(page.getByText('Institutional Carbon Accounting.')).toBeVisible();

  // Check for Dashboard
  await expect(page.getByText('Live Network Health')).toBeVisible();

  // Check for Workflow
  await expect(page.getByText('The Daml Atomic Workflow')).toBeVisible();

  // Check for Institutional Gateway
  await expect(page.getByText('Institutional Gateway')).toBeVisible();

  // Check for Liquidity Bridge
  await expect(page.getByText('The Global Liquidity Bridge')).toBeVisible();

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});
