import { expect, test } from '../../fixtures/motorcycleQuoteEntryFixture';
import motorcycleQuoteData from '../../test-data/motorcycle/motorcycle-quote-happy-path.json';
import type {
  InsurantData,
  ProductData,
  QuoteContactData,
  VehicleData,
} from '../../pages/MotorcycleWizardPage';

const { vehicleData, insurantData } = motorcycleQuoteData as {
  vehicleData: VehicleData;
  insurantData: InsurantData;
};

const { productData, quoteContactData } = motorcycleQuoteData as {
  productData: ProductData;
  quoteContactData: QuoteContactData;
};

const { expectedMakeOptions } = motorcycleQuoteData as {
  expectedMakeOptions: string[];
};

test.describe('Motorcycle Insurance', () => {
  test('TC-US001-01 Open Motorcycle wizard from offer tile', async ({
    motorcycleLandingPage,
    motorcycleWizardPage,
  }) => {
    // Precondition: User is on the landing page
    await motorcycleLandingPage.openLandingPage();
    await motorcycleLandingPage.expectLandingPageVisible();

    // Step 1: Open https://sampleapp.tricentis.com/101/
    // (Already opened via openLandingPage)

    // Step 2 & 3: Locate and click the Motorcycle offer card
    await motorcycleLandingPage.openMotorcycleWizard();

    // Expected Result: User is navigated to the Motorcycle quote wizard
    await motorcycleWizardPage.expectWizardOpened();

    // Expected Result: Enter Vehicle Data is the active step
    await motorcycleWizardPage.expectVehicleDataStepActive();

    // Expected Result: The wizard is loaded in Motorcycle context
    await motorcycleWizardPage.expectMotorcycleContextLoaded();

    // Additional validation: Verify URL contains app.php
    await expect(motorcycleWizardPage.page).toHaveURL(/app\.php/);
  });

  test('TC-US001-02 Verify initial counters are displayed', async ({
    motorcycleLandingPage,
    motorcycleWizardPage,
  }) => {
    await motorcycleLandingPage.openLandingPage();
    await motorcycleLandingPage.expectLandingPageVisible();
    await motorcycleLandingPage.openMotorcycleWizard();

    await motorcycleWizardPage.expectWizardOpened();
    await motorcycleWizardPage.expectVehicleDataStepActive();

    // Verify step counters from Motorcycle_LOB_Functional_Business_Spec.md
    await motorcycleWizardPage.expectVehicleDataStepCounter('8');
  });

  test('TC-US002-01 Complete Vehicle Data with valid values', async ({
    motorcycleLandingPage,
    motorcycleWizardPage,
  }) => {
    await motorcycleLandingPage.openLandingPage();
    await motorcycleLandingPage.openMotorcycleWizard();

    await motorcycleWizardPage.expectWizardOpened();
    await motorcycleWizardPage.expectMotorcycleContextLoaded();
    await motorcycleWizardPage.expectVehicleDataStepActive();
    await motorcycleWizardPage.expectVehicleDataStepCounter('8');

    await motorcycleWizardPage.completeVehicleDataWithValidValues(vehicleData);
    await motorcycleWizardPage.continueToInsurantData();

    await motorcycleWizardPage.expectInsurantDataStepActive();
    await motorcycleWizardPage.expectVehicleDataStepCounter('0');
  });

  test('TC-US002-02 Validate Make dropdown option set', async ({
    motorcycleLandingPage,
    motorcycleWizardPage,
  }) => {
    await motorcycleLandingPage.openLandingPage();
    await motorcycleLandingPage.openMotorcycleWizard();

    await motorcycleWizardPage.expectWizardOpened();
    await motorcycleWizardPage.expectMotorcycleContextLoaded();
    await motorcycleWizardPage.expectVehicleDataStepActive();

    await motorcycleWizardPage.expectMakeDropdownContainsOptions(expectedMakeOptions);
  });

  test('TC-US003-01 Complete Insurant Data with valid values', async ({
    motorcycleLandingPage,
    motorcycleWizardPage,
  }) => {
    await motorcycleLandingPage.openLandingPage();
    await motorcycleLandingPage.openMotorcycleWizard();

    await motorcycleWizardPage.expectWizardOpened();
    await motorcycleWizardPage.expectMotorcycleContextLoaded();
    await motorcycleWizardPage.expectVehicleDataStepActive();

    await motorcycleWizardPage.completeVehicleDataWithValidValues(vehicleData);
    await motorcycleWizardPage.continueToInsurantData();

    await motorcycleWizardPage.expectInsurantDataStepActive();
    await motorcycleWizardPage.expectInsurantDataStepCounter('7');

    await motorcycleWizardPage.completeInsurantDataWithValidValues(insurantData);
    await motorcycleWizardPage.continueToProductData();

    await motorcycleWizardPage.expectProductDataStepActive();
    await motorcycleWizardPage.expectInsurantDataStepCounter('0');
  });

  test('TC-US006-END-TO-END-01 Complete end-to-end Motorcycle quote journey with Honda and Gold plan', async ({
    motorcycleLandingPage,
    motorcycleWizardPage,
  }) => {
    await motorcycleLandingPage.openLandingPage();
    await motorcycleLandingPage.expectLandingPageVisible();
    await motorcycleLandingPage.openMotorcycleWizard();

    await motorcycleWizardPage.expectWizardOpened();
    await motorcycleWizardPage.expectMotorcycleContextLoaded();
    await motorcycleWizardPage.expectVehicleDataStepActive();
    await motorcycleWizardPage.expectVehicleDataStepCounter('8');

    await motorcycleWizardPage.completeVehicleDataWithValidValues(vehicleData);
    await motorcycleWizardPage.continueToInsurantData();

    await motorcycleWizardPage.expectInsurantDataStepActive();
    await motorcycleWizardPage.expectVehicleDataStepCounter('0');

    await motorcycleWizardPage.completeInsurantDataWithValidValues(insurantData);
    await motorcycleWizardPage.continueToProductData();

    await motorcycleWizardPage.expectProductDataStepActive();
    await motorcycleWizardPage.expectInsurantDataStepCounter('1');

    await motorcycleWizardPage.completeProductDataWithValidValues(productData);
    await motorcycleWizardPage.continueToPriceOption();

    await motorcycleWizardPage.expectPriceOptionStepActive();

    await motorcycleWizardPage.selectPriceOption('gold');
    await motorcycleWizardPage.continueToSendQuote();

    await motorcycleWizardPage.expectSendQuoteStepActive();

    await motorcycleWizardPage.completeQuoteContactDataWithValidValues(quoteContactData);
    await motorcycleWizardPage.submitQuote();

    await motorcycleWizardPage.expectSubmissionSuccessMessage();
  });
});
