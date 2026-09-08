import { expect, type Locator, type Page } from '@playwright/test';

export class MotorcycleLandingPage {
  readonly page: Page;
  readonly motorcycleOfferCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.motorcycleOfferCard = page.getByRole('link', {
      name: /Offer Motorcycle Motorcycle/i,
    });
  }

  async openLandingPage(): Promise<void> {
    await this.page.goto('/');
  }

  async expectLandingPageVisible(): Promise<void> {
    await expect(this.motorcycleOfferCard).toBeVisible();
  }

  async openMotorcycleWizard(): Promise<void> {
    await this.motorcycleOfferCard.click();
  }
}
