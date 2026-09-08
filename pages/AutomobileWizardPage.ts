import { expect, type Locator, type Page } from '@playwright/test';

export type VehicleData = {
  make: string;
  enginePerformance: string;
  dateOfManufacture: string;
  numberOfSeats: string;
  fuelType: string;
  listPrice: string;
  licensePlateNumber: string;
  annualMileage: string;
};

export type InsurantData = {
  firstName: string;
  lastName: string;
  birthDate: string;
  streetAddress: string;
  country: string;
  zipCode: string;
  city: string;
  occupation: string;
  website: string;
};

export type ProductData = {
  startDate: string;
  insuranceSum: string;
  meritRating: string;
  damageInsurance: string;
  courtesyCar: string;
};

export type QuoteContactData = {
  email: string;
  phone: string;
  username: string;
  password: string;
  comments: string;
};

export type PriceOption = 'silver' | 'gold' | 'platinum' | 'ultimate';

export class AutomobileWizardPage {
  readonly page: Page;
  readonly vehicleDataStepItem: Locator;
  readonly vehicleDataTab: Locator;
  readonly insurantDataTab: Locator;
  readonly productDataTab: Locator;
  readonly priceOptionTab: Locator;
  readonly sendQuoteTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.vehicleDataStepItem = page.locator('#entervehicledata').locator('..');
    this.vehicleDataTab = page.locator('#entervehicledata');
    this.insurantDataTab = page.locator('#enterinsurantdata');
    this.productDataTab = page.locator('#enterproductdata');
    this.priceOptionTab = page.locator('#selectpriceoption');
    this.sendQuoteTab = page.locator('#sendquote');
  }

  async expectWizardOpened(): Promise<void> {
    await expect(this.page).toHaveURL(/app\.php/);
    await expect(this.vehicleDataTab).toBeVisible();
    await expect(this.insurantDataTab).toBeVisible();
    await expect(this.productDataTab).toBeVisible();
    await expect(this.priceOptionTab).toBeVisible();
    await expect(this.sendQuoteTab).toBeVisible();
  }

  async expectAutomobileContextLoaded(): Promise<void> {
    await expect(this.page.locator('form#insurance-form')).toBeVisible();
    await expect(this.page.locator('select#make')).toBeVisible();
  }

  async expectAutomobileContextNotActive(): Promise<void> {
    // Breadcrumb text differs per LOB; Automobile Insurance must not be shown
    await expect(this.page.locator('main')).not.toContainText('Automobile Insurance');
  }

  async expectVehicleDataStepActive(): Promise<void> {
    await expect(this.vehicleDataStepItem).toHaveClass(/idealsteps-step-active/);
    await expect(this.vehicleDataTab).toContainText('Enter Vehicle Data');
  }

  async expectVehicleDataStepCounter(expectedCounter: string): Promise<void> {
    await expect(this.vehicleDataTab).toContainText(expectedCounter);
  }

  async expectMakeDropdownContainsOptions(expectedOptions: string[]): Promise<void> {
    const actualOptions = await this.page.locator('#make option').allTextContents();
    const normalizedOptions = actualOptions.map((optionText) => optionText.trim());

    for (const expectedOption of expectedOptions) {
      expect(normalizedOptions).toContain(expectedOption);
    }
  }

  async completeVehicleDataWithValidValues(vehicleData: VehicleData): Promise<void> {
    await this.page.locator('#make').selectOption(vehicleData.make);
    await this.page.locator('#engineperformance').fill(vehicleData.enginePerformance);
    await this.page.locator('#dateofmanufacture').fill(vehicleData.dateOfManufacture);
    await this.page.locator('#numberofseats').selectOption(vehicleData.numberOfSeats);
    await this.page.locator('#fuel').selectOption(vehicleData.fuelType);
    await this.page.locator('#listprice').fill(vehicleData.listPrice);
    await this.page.locator('#licenseplatenumber').fill(vehicleData.licensePlateNumber);
    await this.page.locator('#annualmileage').fill(vehicleData.annualMileage);
  }

  async continueToInsurantData(): Promise<void> {
    await this.page.locator('#nextenterinsurantdata').click();
  }

  async returnToVehicleData(): Promise<void> {
    await this.page.locator('#preventervehicledata').click();
  }

  async expectInsurantDataStepActive(): Promise<void> {
    await expect(this.insurantDataTab.locator('..')).toHaveClass(/idealsteps-step-active/);
    await expect(this.page.getByText('Enter Insurant Data')).toBeVisible();
  }

  async expectInsurantDataStepCounter(expectedCounter: string): Promise<void> {
    await expect(this.insurantDataTab).toContainText(expectedCounter);
  }

  async expectVehicleDataValuesPersisted(vehicleData: VehicleData): Promise<void> {
    await expect(this.page.locator('#make')).toHaveValue(vehicleData.make);
    await expect(this.page.locator('#engineperformance')).toHaveValue(vehicleData.enginePerformance);
    await expect(this.page.locator('#dateofmanufacture')).toHaveValue(vehicleData.dateOfManufacture);
    await expect(this.page.locator('#numberofseats')).toHaveValue(vehicleData.numberOfSeats);
    await expect(this.page.locator('#fuel')).toHaveValue(vehicleData.fuelType);
    await expect(this.page.locator('#listprice')).toHaveValue(vehicleData.listPrice);
    await expect(this.page.locator('#licenseplatenumber')).toHaveValue(vehicleData.licensePlateNumber);
    await expect(this.page.locator('#annualmileage')).toHaveValue(vehicleData.annualMileage);
  }

  async completeInsurantDataWithValidValues(insurantData: InsurantData): Promise<void> {
    await this.page.locator('#firstname').fill(insurantData.firstName);
    await this.page.locator('#lastname').fill(insurantData.lastName);
    await this.page.locator('#birthdate').fill(insurantData.birthDate);
    await this.page.locator('label:has(input#gendermale)').click();
    await this.page.locator('#streetaddress').fill(insurantData.streetAddress);
    await this.page.locator('#country').selectOption({ label: insurantData.country });
    await this.page.locator('#zipcode').fill(insurantData.zipCode);
    await this.page.locator('#city').fill(insurantData.city);
    await this.page.locator('#occupation').selectOption({ label: insurantData.occupation });
    await this.page.locator('label:has(input#speeding)').click();
    await this.page.locator('#website').fill(insurantData.website);
  }

  async continueToProductData(): Promise<void> {
    await this.page.locator('#nextenterproductdata').click();
  }

  async expectProductDataStepActive(): Promise<void> {
    await expect(this.productDataTab.locator('..')).toHaveClass(/idealsteps-step-active/);
    await expect(this.page.getByText('Enter Product Data')).toBeVisible();
  }

  async completeProductDataWithValidValues(productData: ProductData): Promise<void> {
    await this.page.locator('#startdate').fill(productData.startDate);
    await this.page.locator('#insurancesum').selectOption({ label: productData.insuranceSum });
    await this.page.locator('#meritrating').selectOption({ label: productData.meritRating });
    await this.page.locator('#damageinsurance').selectOption({ label: productData.damageInsurance });
    await this.page.locator('label:has(input#EuroProtection)').click();
    await this.page.locator('#courtesycar').selectOption({ label: productData.courtesyCar });
  }

  async continueToPriceOption(): Promise<void> {
    await this.page.locator('#nextselectpriceoption').click();
  }

  async expectPriceOptionStepActive(): Promise<void> {
    await expect(this.priceOptionTab.locator('..')).toHaveClass(/idealsteps-step-active/);
    await expect(this.page.getByText('Select Price Option')).toBeVisible();
  }

  async selectPriceOption(priceOption: PriceOption): Promise<void> {
    await this.page.locator(`label:has(input#select${priceOption})`).click();
  }

  async continueToSendQuote(): Promise<void> {
    await this.page.locator('#nextsendquote').click();
  }

  async expectSendQuoteStepActive(): Promise<void> {
    await expect(this.sendQuoteTab.locator('..')).toHaveClass(/idealsteps-step-active/);
    await expect(this.page.getByText('Send Quote')).toBeVisible();
  }

  async completeQuoteContactDataWithValidValues(quoteContactData: QuoteContactData): Promise<void> {
    await this.page.locator('#email').fill(quoteContactData.email);
    await this.page.locator('#phone').fill(quoteContactData.phone);
    await this.page.locator('#username').fill(quoteContactData.username);
    await this.page.locator('#password').fill(quoteContactData.password);
    await this.page.locator('#confirmpassword').fill(quoteContactData.password);
    await this.page.locator('#Comments').fill(quoteContactData.comments);
  }

  async submitQuote(): Promise<void> {
    await this.page.locator('#sendemail').click();
  }
}