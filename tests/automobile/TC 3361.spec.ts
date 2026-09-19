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

test.describe('Pricing and final submission', () => {
  test('Display selected tier summary on the Send Quote step after wizard navigation', async ({
    automobileLandingPage,
    automobileWizardPage,
  }) => {
    // 1. Open the quote wizard and navigate to the screen for user story: Display selected tier summary on the Send Quote step.
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

    // 2. Complete the user story action with valid data, navigate forward and back between wizard steps, and return to the same screen.
    await automobileWizardPage.completeQuoteContactDataWithValidValues(quoteContactData);
    await expect(automobileWizardPage.page.locator('#email')).toHaveValue(quoteContactData.email);
    await expect(automobileWizardPage.page.locator('#username')).toHaveValue(quoteContactData.username);

    await automobileWizardPage.page.locator('#prevselectpriceoption').click();
    await automobileWizardPage.expectPriceOptionStepActive();
    await expect(automobileWizardPage.page.locator('#selectgold')).toBeChecked();

    await automobileWizardPage.continueToSendQuote();
    await automobileWizardPage.expectSendQuoteStepActive();

    // 3. Trigger the step transition or form submission to evaluate behavior.
    await expect(automobileWizardPage.page.locator('#selectgold')).toBeChecked();
    await expect(automobileWizardPage.page.locator('#priceTable')).toContainText('Gold');
    await expect(automobileWizardPage.page.locator('#email')).toHaveValue(quoteContactData.email);
    await expect(automobileWizardPage.page.locator('#phone')).toHaveValue(quoteContactData.phone);
    await expect(automobileWizardPage.page.locator('#username')).toHaveValue(quoteContactData.username);
    await expect(automobileWizardPage.page.locator('#password')).toHaveValue(quoteContactData.password);
    await expect(automobileWizardPage.page.locator('#confirmpassword')).toHaveValue(quoteContactData.password);
    await expect(automobileWizardPage.page.locator('#Comments')).toHaveValue(quoteContactData.comments);
  });
});