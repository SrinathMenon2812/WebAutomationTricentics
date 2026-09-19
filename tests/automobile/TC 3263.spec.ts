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

const analyticsEventUrlPattern =
  /analytics|tracking|track|telemetry|event|email.*(open|click)|(open|click).*email/i;

test.describe('Pricing and final submission', () => {
  test('Track quote email open and click events for analytics after wizard navigation', async ({
    automobileLandingPage,
    automobileWizardPage,
  }) => {
    const analyticsRequests: string[] = [];

    automobileWizardPage.page.on('request', (request) => {
      const requestUrl = request.url();

      if (analyticsEventUrlPattern.test(requestUrl)) {
        analyticsRequests.push(requestUrl);
      }
    });

    // 1. Open the quote wizard and navigate to the screen for user story: Track quote email open and click events for analytics.
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
    await expect(automobileWizardPage.page.locator('#email')).toBeVisible();
    await expect(automobileWizardPage.page.locator('#phone')).toBeVisible();
    await expect(automobileWizardPage.page.locator('#username')).toBeVisible();
    await expect(automobileWizardPage.page.locator('#password')).toBeVisible();
    await expect(automobileWizardPage.page.locator('#confirmpassword')).toBeVisible();
    await expect(automobileWizardPage.page.locator('#Comments')).toBeVisible();

    // 2. Complete the user story action with valid data, navigate forward and back between wizard steps, and return to the same screen.
    await automobileWizardPage.completeQuoteContactDataWithValidValues(quoteContactData);
    await expect(automobileWizardPage.page.locator('#email')).toHaveValue(quoteContactData.email);
    await expect(automobileWizardPage.page.locator('#phone')).toHaveValue(quoteContactData.phone);
    await expect(automobileWizardPage.page.locator('#username')).toHaveValue(quoteContactData.username);

    await automobileWizardPage.page.locator('#prevselectpriceoption').click();
    await automobileWizardPage.expectPriceOptionStepActive();
    await expect(automobileWizardPage.page.locator('#selectgold')).toBeChecked();
    await expect(automobileWizardPage.page.locator('#priceTable')).toContainText('Gold');

    await automobileWizardPage.continueToSendQuote();
    await automobileWizardPage.expectSendQuoteStepActive();
    await expect(automobileWizardPage.page.locator('#email')).toHaveValue(quoteContactData.email);
    await expect(automobileWizardPage.page.locator('#phone')).toHaveValue(quoteContactData.phone);
    await expect(automobileWizardPage.page.locator('#username')).toHaveValue(quoteContactData.username);
    await expect(automobileWizardPage.page.locator('#password')).toHaveValue(quoteContactData.password);
    await expect(automobileWizardPage.page.locator('#confirmpassword')).toHaveValue(quoteContactData.password);
    await expect(automobileWizardPage.page.locator('#Comments')).toHaveValue(quoteContactData.comments);

    // 3. Trigger the step transition or form submission to evaluate behavior.
    await automobileWizardPage.submitQuote();
    await automobileWizardPage.page.waitForTimeout(3000);

    await expect(automobileWizardPage.page.locator('#selectgold')).toBeChecked();
    await expect(automobileWizardPage.page.locator('#priceTable')).toContainText('Gold');
    expect(
      analyticsRequests,
      'Expected a quote email analytics tracking request for open/click events',
    ).not.toHaveLength(0);
  });
});