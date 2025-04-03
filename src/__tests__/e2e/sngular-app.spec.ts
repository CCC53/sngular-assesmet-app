import { test, expect } from '@playwright/test';

test.describe('f', () => {
  test.beforeEach(async ({ page }) => {
    // await page.goto('https://sngular-assesmet-app-5k34.vercel.app');
    await page.goto('http://localhost:3000');
  });

  test('debe mostrar el header', async({ page }) => {
    const header = page.locator('[data-testid="header"]');
    await expect(header).toBeVisible();
  });

  test('debe mostrar el formulario', async({ page }) => {
    await page.waitForSelector('[data-testid="form"]');
    await expect(page.getByTestId('form')).toBeVisible();
  });

  test('debe mostrar un mensaje de error al introducir un valor inferior al valor mínimo', async({ page }) => {
    await page.fill('[data-testid="form-input"]', '2');

    const errorMsg = page.locator('[data-testid="error-message"]'); 
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toHaveText('El número debe ser como mínimo 3');
  });

  test('debe mostrar un mensaje de error al introducir un valor mayor al valor máximo', async({ page }) => {
    await page.fill('[data-testid="form-input"]', '79');

    const errorMsg = page.locator('[data-testid="error-message"]'); 
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toHaveText('El número debe ser igual o inferior a 76');
  });

  test('debe mostrar un mensaje de error al introducir un valor con decimales', async({ page }) => {
    await page.fill('[data-testid="form-input"]', '3.7');

    const errorMsg = page.locator('[data-testid="error-message"]'); 
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toHaveText('Sólo se admiten números enteros');
  });

  test('desactiva el botón de submit para entradas no válidas', async({ page }) => {
    await page.fill('[data-testid="form-input"]', '2');
    await expect(page.getByTestId('submit-button')).toBeDisabled();
  });

  test('activa el botón de submit para entradas válidas', async({ page }) => {
    await page.fill('[data-testid="form-input"]', '7');
    await expect(page.getByTestId('submit-button')).toBeEnabled();
  });

  test('muestra el Loader tras el submit, lo oculta tras un retardo para finalmente mostrar el component Solver con el resultado', async({ page }) => {
    await page.fill('[data-testid="form-input"]', '7');
    page.getByTestId('submit-button').click();
    await page.waitForSelector('[data-testid="loader-container"]', { state: 'visible' });
    await expect(page.getByTestId('loader-container')).toBeVisible();

    await page.waitForTimeout(300);
    await expect(page.getByTestId('loader-container')).not.toBeVisible();

    await page.waitForSelector('[data-testid="solver-container"]', { state: 'visible' });
    await expect(page.getByTestId('solver-container')).toBeVisible();
  });
});
