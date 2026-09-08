# Motorcycle Insurance Test Plan

## Application Overview

Motorcycle Insurance end-to-end test plan for the Tricentis sample application. Assumes a fresh browser session and focuses only on the Motorcycle quote journey from landing page through submission.

## Test Scenarios

### 1. Quote initiation and wizard entry

**Seed:** `tests/seed.spec.ts`

#### 1.1. Start Motorcycle quote from the landing page

**File:** `tests/motorcycle/motorcycle-insurance.spec.ts`

**Steps:**
  1. Open the site at https://sampleapp.tricentis.com/ in a fresh browser session.
    - expect: The landing page is displayed.
  2. Select the Motorcycle quote entry point from the landing page.
    - expect: The Motorcycle wizard opens.
    - expect: The current step is Enter Vehicle Data.
  3. Observe the step navigation area.
    - expect: The five wizard steps are visible: Enter Vehicle Data, Enter Insurant Data, Enter Product Data, Select Price Option, and Send Quote.
    - expect: The counters are visible for each step.

#### 1.2. Verify step counters and wizard structure

**File:** `tests/motorcycle/motorcycle-insurance.spec.ts`

**Steps:**
  1. Review the visible counters in the Motorcycle wizard.
    - expect: Enter Vehicle Data shows 8 remaining required fields.
    - expect: Enter Insurant Data shows 7 remaining required fields.
    - expect: Enter Product Data shows 4 remaining required fields.
    - expect: Select Price Option shows 1 remaining required field.
    - expect: Send Quote shows 4 remaining required fields.

### 2. Vehicle, insurant, and product data entry

**Seed:** `tests/seed.spec.ts`

#### 2.1. Complete Vehicle Data with valid values

**File:** `tests/motorcycle/motorcycle-insurance.spec.ts`

**Steps:**
  1. On the Vehicle Data step, select a valid make, model, enter cylinder capacity, engine performance, manufacture date, number of seats, list price, and annual mileage.
    - expect: The form accepts the values without blocking errors.
  2. Click Next.
    - expect: The wizard advances to Enter Insurant Data.
    - expect: The Vehicle Data step is marked complete.

#### 2.2. Complete Insurant Data with valid values

**File:** `tests/motorcycle/motorcycle-insurance.spec.ts`

**Steps:**
  1. On the Insurant Data step, enter first name, last name, date of birth, gender, street address, country, zip code, city, occupation, and website.
    - expect: The form accepts the data.
  2. Click Next.
    - expect: The wizard advances to Enter Product Data.

#### 2.3. Complete Product Data with valid values

**File:** `tests/motorcycle/motorcycle-insurance.spec.ts`

**Steps:**
  1. On the Product Data step, enter a valid start date, insurance sum, merit rating, damage insurance, optional products, and courtesy car selection.
    - expect: The form accepts the selections without blocking errors.
  2. Click Next.
    - expect: The wizard advances to Select Price Option.

### 3. Pricing and final submission

**Seed:** `tests/seed.spec.ts`

#### 3.1. Select one price option and continue

**File:** `tests/motorcycle/motorcycle-insurance.spec.ts`

**Steps:**
  1. On the Select Price Option step, review the plan comparison table and choose a single plan.
    - expect: The selected plan is highlighted as the only active choice.
    - expect: The plan comparison values are visible.
  2. Click Next.
    - expect: The wizard advances to Send Quote.

#### 3.2. Submit a quote with valid contact and credential data

**File:** `tests/motorcycle/motorcycle-insurance.spec.ts`

**Steps:**
  1. On the Send Quote step, enter a valid email, phone, username, password, confirm password, and comments.
    - expect: The form accepts the values.
  2. Click Send.
    - expect: A submission confirmation modal appears.
    - expect: The user receives a clear final status message for the quote submission.

## Test Data

Test data is located in: `test-data/motorcycle/motorcycle-quote-happy-path.json`

The test data includes:
- Vehicle Data (Make, Model, Cylinder Capacity, Engine Performance, etc.)
- Insurant Data (Personal information and details)
- Product Data (Insurance coverage options)
- Quote Contact Data (Email, phone, credentials)
- Expected Make options for validation

## Page Objects

The following Page Objects are used for Motorcycle tests:

- **MotorcycleLandingPage** (`pages/MotorcycleLandingPage.ts`): Handles landing page interactions
- **MotorcycleWizardPage** (`pages/MotorcycleWizardPage.ts`): Handles all wizard step interactions and validations

## Fixtures

Custom fixture available: `motorcycleQuoteEntryFixture`

Provides:
- `motorcycleLandingPage`: MotorcycleLandingPage instance
- `motorcycleWizardPage`: MotorcycleWizardPage instance

## Test Execution

Run tests with:
```bash
npx playwright test tests/motorcycle/motorcycle-insurance.spec.ts
```

Run with specific test case:
```bash
npx playwright test tests/motorcycle/motorcycle-insurance.spec.ts -g "TC-US001-01"
```
