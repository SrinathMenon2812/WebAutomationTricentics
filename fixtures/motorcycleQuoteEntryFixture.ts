import { test as base } from '@playwright/test';
import { MotorcycleLandingPage } from '../pages/MotorcycleLandingPage';
import { MotorcycleWizardPage } from '../pages/MotorcycleWizardPage';

type MotorcycleQuoteEntryFixtures = {
  motorcycleLandingPage: MotorcycleLandingPage;
  motorcycleWizardPage: MotorcycleWizardPage;
};

export const test = base.extend<MotorcycleQuoteEntryFixtures>({
  motorcycleLandingPage: async ({ page }, use) => {
    await use(new MotorcycleLandingPage(page));
  },
  motorcycleWizardPage: async ({ page }, use) => {
    await use(new MotorcycleWizardPage(page));
  },
});

export { expect } from '@playwright/test';
