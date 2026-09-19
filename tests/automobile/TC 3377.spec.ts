// spec: inline user request

import { expect, test } from '../../fixtures/automobileQuoteEntryFixture';
import automobileQuoteData from '../../test-data/automobile/automobile-quote-happy-path.json';
import type {
  InsurantData,
  ProductData,
  QuoteContactData,
  VehicleData,
} from '../../pages/AutomobileWizardPage';

const {
  vehicleData,
  insurantData,
  productData,
  quoteContactData,
} = automobileQuoteData as {
  vehicleData: VehicleData;
  insurantData: InsurantData;
  productData: ProductData;
  quoteContactData: QuoteContactData;
};

const quoteValidityTimer =
  /quote\s+(valid|validity)|valid\s+(for|until)|expires?\s+(in|at)|countdown|timer|\b\d{1,2}:\d{2}\b/i;

test.describe('Pricing and final submission', () => {
  test('Show quote validity countdown timer on the Send Quote step blocks invalid email', async ({
    automobileLandingPage,
    automobileWizardPage,
  }) => {
    // 1. Open the quote wizard and navigate to the screen for user story: Show quote validity countdown timer on the Send Quote step.
    await automobileLandingPage.openLandingPage();
    await automobileLandingPage.expectLandingPageVisible();
    await automobileLandingPage.openAutomobileWizard();
    await automobileWizardPage.expectWizardOpened();
    await automobileWizardPage.expectAutomobileContextLoaded();
    await automobileWizardPage.expectVehicleDataStepActive();

    await automobileWizardPage.completeVehicleDataWithValidValues(vehicleData);
    await automobileWizardPage.continueToInsurantData();
    await automobileWizardPage.expectInsurantDataStepActive();

    await automobileWizardPage.completeInsurantDataWithValidValues(insurantData);
    await automobileWizardPage.continueToProductData();
    await automobileWizardPage.expectProductDataStepActive();

    await automobileWizardPage.completeProductDataWithValidValues(productData);
    await automobileWizardPage.continueToPriceOption();
    await automobileWizardPage.expectPriceOptionStepActive();

    await automobileWizardPage.selectPriceOption('gold');
    await expect(automobileWizardPage.page.locator('#selectgold')).toBeChecked();
    await automobileWizardPage.continueToSendQuote();
    await automobileWizardPage.expectSendQuoteStepActive();

    await expect(automobileWizardPage.page.locator('#priceTable')).toContainText('Gold');
    await expect(automobileWizardPage.page.locator('body')).toContainText(quoteValidityTimer);
    await expect(automobileWizardPage.page.locator('#email')).toBeVisible();
    await expect(automobileWizardPage.page.locator('#phone')).toBeVisible();
    await expect(automobileWizardPage.page.locator('#username')).toBeVisible();
    await expect(automobileWizardPage.page.locator('#password')).toBeVisible();
    await expect(automobileWizardPage.page.locator('#confirmpassword')).toBeVisible();
    await expect(automobileWizardPage.page.locator('#Comments')).toBeVisible();

    // 2. Submit the form with one required input missing or with intentionally invalid data related to this user story.
    await automobileWizardPage.completeQuoteContactDataWithValidValues(quoteContactData);
    await automobileWizardPage.page.locator('#email').fill('invalid-email-format');
    await expect(automobileWizardPage.page.locator('#email')).toHaveValue('invalid-email-format');

    // 3. Trigger the step transition or form submission to evaluate behavior.
    await automobileWizardPage.submitQuote();

    await automobileWizardPage.expectSendQuoteStepActive();
    await expect(automobileWizardPage.page.locator('#email-error')).toBeVisible();
    await expect(automobileWizardPage.page.locator('#email-error')).toContainText(/valid|email/i);
    await expect(automobileWizardPage.page.locator('#selectgold')).toBeChecked();
    await expect(automobileWizardPage.page.locator('#priceTable')).toContainText('Gold');
    await expect(automobileWizardPage.page.locator('body')).toContainText(quoteValidityTimer);
  });
});