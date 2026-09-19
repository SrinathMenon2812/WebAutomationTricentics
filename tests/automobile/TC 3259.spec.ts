import { test } from '../../fixtures/automobileQuoteEntryFixture';
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

test.describe('Automobile Insurance', () => {
  test('completes the Automobile quote happy path', async ({
    automobileLandingPage,
    automobileWizardPage,
  }) => {
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
    await automobileWizardPage.continueToSendQuote();
    await automobileWizardPage.expectSendQuoteStepActive();

    await automobileWizardPage.completeQuoteContactDataWithValidValues(quoteContactData);
    await automobileWizardPage.submitQuote();

    //await expect(page.locator('div[role="dialog"], .modal, .sweet-alert')).toBeVisible();
  });
});
