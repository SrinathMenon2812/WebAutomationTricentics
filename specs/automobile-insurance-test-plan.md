# Automobile Insurance Test Plan

## Application Overview

Automobile Insurance end-to-end test plan for the Tricentis sample application. Assumes a fresh browser session and focuses only on the Automobile quote journey from landing page through submission.

## Test Scenarios

### 1. Quote initiation and wizard entry

**Seed:** `tests/seed.spec.ts`

#### 1.1. Start Automobile quote from the landing page

**File:** `tests/automobile/automobile-insurance.spec.ts`

**Steps:**
  1. Open the site at https://sampleapp.tricentis.com/ in a fresh browser session.
    - expect: The landing page is displayed.
  2. Select the Automobile quote entry point from the landing page.
    - expect: The Automobile wizard opens.
    - expect: The current step is Enter Vehicle Data.
  3. Observe the step navigation area.
    - expect: The five wizard steps are visible: Enter Vehicle Data, Enter Insurant Data, Enter Product Data, Select Price Option, and Send Quote.
    - expect: The counters are visible for each step.

#### 1.2. Verify step counters and wizard structure

**File:** `tests/automobile/automobile-insurance.spec.ts`

**Steps:**
  1. Review the visible counters in the Automobile wizard.
    - expect: Enter Vehicle Data shows 7 remaining required fields.
    - expect: Enter Insurant Data shows 7 remaining required fields.
    - expect: Enter Product Data shows 6 remaining required fields.
    - expect: Select Price Option shows 1 remaining required field.
    - expect: Send Quote shows 4 remaining required fields.

### 2. Vehicle, insurant, and product data entry

**Seed:** `tests/seed.spec.ts`

#### 2.1. Complete Vehicle Data with valid values

**File:** `tests/automobile/automobile-insurance.spec.ts`

**Steps:**
  1. On the Vehicle Data step, select a valid make, enter engine performance, manufacture date, number of seats, fuel type, list price, license plate number, and annual mileage.
    - expect: The form accepts the values without blocking errors.
  2. Click Next.
    - expect: The wizard advances to Enter Insurant Data.
    - expect: The Vehicle Data step is marked complete.

#### 2.2. Complete Insurant Data with valid values

**File:** `tests/automobile/automobile-insurance.spec.ts`

**Steps:**
  1. On the Insurant Data step, enter first name, last name, date of birth, gender, street address, country, zip code, city, occupation, and at least one hobby.
    - expect: The form accepts the data and preserves the selected hobbies.
  2. Click Next.
    - expect: The wizard advances to Enter Product Data.

#### 2.3. Complete Product Data with valid values

**File:** `tests/automobile/automobile-insurance.spec.ts`

**Steps:**
  1. On the Product Data step, enter a valid start date, insurance sum, merit rating, damage insurance, optional products, and courtesy car selection.
    - expect: The form accepts the selections without blocking errors.
  2. Click Next.
    - expect: The wizard advances to Select Price Option.

### 3. Pricing and final submission

**Seed:** `tests/seed.spec.ts`

#### 3.1. Select one price option and continue

**File:** `tests/automobile/automobile-insurance.spec.ts`

**Steps:**
  1. On the Select Price Option step, review the plan comparison table and choose a single plan.
    - expect: The selected plan is highlighted as the only active choice.
    - expect: The plan comparison values are visible.
  2. Click Next.
    - expect: The wizard advances to Send Quote.

#### 3.2. Submit a quote with valid contact and credential data

**File:** `tests/automobile/automobile-insurance.spec.ts`

**Steps:**
  1. On the Send Quote step, enter a valid email, phone, username, password, confirm password, and comments.
    - expect: The form accepts the values.
  2. Click Send.
    - expect: A submission confirmation modal appears.
    - expect: The user receives a clear final status message for the quote submission.

#### 3.3. Block submission for invalid or incomplete quote data

**File:** `tests/automobile/automobile-insurance.spec.ts`

**Steps:**
  1. Return to the Send Quote step and submit with a password mismatch or an invalid email address, leaving another required field blank.
    - expect: The submission is blocked.
    - expect: Validation feedback is shown for the affected field or fields.
  2. Correct the invalid values and resubmit.
    - expect: The validation errors clear and the quote can be submitted successfully.

### 4. Navigation and persistence checks

**Seed:** `tests/seed.spec.ts`

#### 4.1. Preserve entered values when navigating backward and forward

**File:** `tests/automobile/automobile-insurance.spec.ts`

**Steps:**
  1. Complete the first wizard step, move forward, and then navigate back to a previous step.
    - expect: The previously entered values remain populated.
  2. Move forward again after returning.
    - expect: The data remains intact and the workflow continues without re-entry.

#### 4.2. Reject invalid date and numeric input on required fields

**File:** `tests/automobile/automobile-insurance.spec.ts`

**Steps:**
  1. On the Vehicle Data step, enter an invalid date format or non-numeric value in a required numeric field and attempt to continue.
    - expect: The user remains on the current step.
    - expect: A validation message is shown for the invalid field.
