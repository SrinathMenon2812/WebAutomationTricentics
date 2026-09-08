import { expect, type Locator, type Page } from '@playwright/test';

export class AutomobileLandingPage {
  readonly page: Page;
  readonly automobileOfferCard: Locator;
  readonly truckOfferCard: Locator;
  readonly motorcycleOfferCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.automobileOfferCard = page.getByRole('link', {
      name: /Offer Automobile Automobile/i,
    });
    this.truckOfferCard = page.getByRole('link', { name: /Offer Truck Truck/i });
    this.motorcycleOfferCard = page.getByRole('link', {
      name: /Offer Motorcycle Motorcycle/i,
    });
  }

  async openLandingPage(): Promise<void> {
    await this.page.goto('/');
  }

  async expectLandingPageVisible(): Promise<void> {
    await expect(this.automobileOfferCard).toBeVisible();
  }

  async openAutomobileWizard(): Promise<void> {
    await this.automobileOfferCard.click();
  }

  async openTruckWizard(): Promise<void> {
    await this.truckOfferCard.click();
  }

  async openMotorcycleWizard(): Promise<void> {
    await this.motorcycleOfferCard.click();
  }
}