import { expect, test } from '../../fixtures/automobileQuoteEntryFixture';
import automobileQuoteData from '../../test-data/automobile/automobile-quote-happy-path.json';
import type { InsurantData, VehicleData } from '../../pages/AutomobileWizardPage';

const { vehicleData, insurantData } = automobileQuoteData as {
  vehicleData: VehicleData;
  insurantData: InsurantData;
};

const { expectedMakeOptions } = automobileQuoteData as {
  expectedMakeOptions: string[];
};

test.describe('Automobile Insurance', () => {
  test('TC-US001-01 Open Automobile wizard from offer tile', async ({
    automobileLandingPage,
    automobileWizardPage,
  }) => {
    await automobileLandingPage.openLandingPage();
    await automobileLandingPage.expectLandingPageVisible();

    await automobileLandingPage.openAutomobileWizard();

    await automobileWizardPage.expectWizardOpened();
    await automobileWizardPage.expectAutomobileContextLoaded();
    await automobileWizardPage.expectVehicleDataStepActive();

    await expect(automobileWizardPage.page).toHaveURL(/app\.php/);
  });

  test('TC-US002-01 Complete Vehicle Data with valid values', async ({
    automobileLandingPage,
    automobileWizardPage,
  }) => {
    await automobileLandingPage.openLandingPage();
    await automobileLandingPage.openAutomobileWizard();

    await automobileWizardPage.expectWizardOpened();
    await automobileWizardPage.expectAutomobileContextLoaded();
    await automobileWizardPage.expectVehicleDataStepActive();
    await automobileWizardPage.expectVehicleDataStepCounter('7');

    await automobileWizardPage.completeVehicleDataWithValidValues(vehicleData);
    await automobileWizardPage.continueToInsurantData();

    await automobileWizardPage.expectInsurantDataStepActive();
    await automobileWizardPage.expectVehicleDataStepCounter('0');
  });

  test('TC-US002-02 Validate Make dropdown option set', async ({
    automobileLandingPage,
    automobileWizardPage,
  }) => {
    await automobileLandingPage.openLandingPage();
    await automobileLandingPage.openAutomobileWizard();

    await automobileWizardPage.expectWizardOpened();
    await automobileWizardPage.expectAutomobileContextLoaded();
    await automobileWizardPage.expectVehicleDataStepActive();

    await automobileWizardPage.expectMakeDropdownContainsOptions(expectedMakeOptions);
  });

  test('TC-US003-01 Complete Insurant Data with valid values', async ({
    automobileLandingPage,
    automobileWizardPage,
  }) => {
    await automobileLandingPage.openLandingPage();
    await automobileLandingPage.openAutomobileWizard();

    await automobileWizardPage.expectWizardOpened();
    await automobileWizardPage.expectAutomobileContextLoaded();
    await automobileWizardPage.expectVehicleDataStepActive();

    await automobileWizardPage.completeVehicleDataWithValidValues(vehicleData);
    await automobileWizardPage.continueToInsurantData();

    await automobileWizardPage.expectInsurantDataStepActive();
    await automobileWizardPage.expectInsurantDataStepCounter('7');

    await automobileWizardPage.completeInsurantDataWithValidValues(insurantData);
    await automobileWizardPage.continueToProductData();

    await automobileWizardPage.expectProductDataStepActive();
    await automobileWizardPage.expectInsurantDataStepCounter('0');
  });

  test('TC-US008-01 Vehicle values persist after back navigation', async ({
    automobileLandingPage,
    automobileWizardPage,
  }) => {
    await automobileLandingPage.openLandingPage();
    await automobileLandingPage.openAutomobileWizard();

    await automobileWizardPage.expectWizardOpened();
    await automobileWizardPage.expectAutomobileContextLoaded();
    await automobileWizardPage.expectVehicleDataStepActive();

    await automobileWizardPage.completeVehicleDataWithValidValues(vehicleData);
    await automobileWizardPage.continueToInsurantData();
    await automobileWizardPage.expectInsurantDataStepActive();

    await automobileWizardPage.returnToVehicleData();

    await automobileWizardPage.expectVehicleDataStepActive();
    await automobileWizardPage.expectVehicleDataValuesPersisted(vehicleData);
  });

  test('TC-US001-04 Clicking non-Automobile card should not start Automobile flow', async ({
    automobileLandingPage,
    automobileWizardPage,
  }) => {
    // Arrange
    await automobileLandingPage.openLandingPage();
    await automobileLandingPage.expectLandingPageVisible();

    // Act
    await automobileLandingPage.openTruckWizard();

    // Assert
    await expect(automobileWizardPage.page).toHaveURL(/app\.php/);
    await automobileWizardPage.expectAutomobileContextNotActive();
  });
});
