import { test as base } from '@playwright/test';
import { AutomobileLandingPage } from '../pages/AutomobileLandingPage';
import { AutomobileWizardPage } from '../pages/AutomobileWizardPage';

type AutomobileQuoteEntryFixtures = {
  automobileLandingPage: AutomobileLandingPage;
  automobileWizardPage: AutomobileWizardPage;
};

export const test = base.extend<AutomobileQuoteEntryFixtures>({
  automobileLandingPage: async ({ page }, use) => {
    await use(new AutomobileLandingPage(page));
  },
  automobileWizardPage: async ({ page }, use) => {
    await use(new AutomobileWizardPage(page));
  },
});

export { expect } from '@playwright/test';