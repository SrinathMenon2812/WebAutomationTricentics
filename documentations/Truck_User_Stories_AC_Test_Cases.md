# Truck LOB User Stories, Acceptance Criteria, and Test Cases

Version: 1.0
Date: 2026-07-29
Application: Tricentis Vehicle Insurance Sample App - Truck
Reference Spec: Truck_LOB_Functional_Business_Spec.md

## 1. Story Map Summary
- US-TRK-001: Start Truck quote from landing page
- US-TRK-002: Complete Truck Vehicle Data
- US-TRK-003: Complete Insurant Data
- US-TRK-004: Complete Truck Product Data
- US-TRK-005: Select Truck Price Option
- US-TRK-006: Submit Truck Quote
- US-TRK-007: Enforce mandatory validation and progression gates
- US-TRK-008: Persist entered data across navigation

## 2. Detailed User Stories

## US-TRK-001: Start Truck Quote
User Story:
As a prospective customer,
I want to start a Truck insurance quote from the home page,
so that I can begin the truck quote process quickly.

Acceptance Criteria:
1. Given user is on landing page, when user clicks Truck offer tile, then Truck wizard opens.
2. Given Truck wizard opens, when first step loads, then Enter Vehicle Data is active with Truck context.
3. Given first step is loaded, when counters are displayed, then values are 9, 7, 4, 1, 4 across the five steps.

Test Cases (Type tagged):

TC-TRK-001-01
Type: Positive
Title: Open Truck wizard from offer tile
Preconditions:
- User is on landing page.
Execution Steps:
1. Open https://sampleapp.tricentis.com/101/.
2. Locate Truck offer card.
3. Click Truck offer card.
Expected Result:
- User is navigated to app.php.
- Truck Insurance context is displayed.
- Enter Vehicle Data is active.

TC-TRK-001-02
Type: Positive
Title: Verify Truck initial step counters
Preconditions:
- Truck wizard is open.
Execution Steps:
1. Observe wizard counters.
2. Record counts for all steps.
Expected Result:
- Enter Vehicle Data: 9.
- Enter Insurant Data: 7.
- Enter Product Data: 4.
- Select Price Option: 1.
- Send Quote: 4.

TC-TRK-001-03
Type: Positive
Title: Start Truck flow from menu link
Preconditions:
- User is on landing page.
Execution Steps:
1. Open top menu.
2. Click Truck link.
Expected Result:
- Truck quote wizard opens.

TC-TRK-001-04
Type: Negative
Title: Selecting Automobile card does not open Truck flow
Preconditions:
- User is on landing page.
Execution Steps:
1. Click Automobile offer card.
Expected Result:
- Automobile context opens.
- Truck context is not active.

TC-TRK-001-05
Type: Positive
Title: Home breadcrumb returns from Truck wizard to landing
Preconditions:
- User is on Truck wizard.
Execution Steps:
1. Click Home breadcrumb.
Expected Result:
- Landing page loads and Truck offer is visible.

## US-TRK-002: Complete Truck Vehicle Data
User Story:
As a prospective customer,
I want to enter truck-specific vehicle details,
so that quote pricing can reflect truck characteristics.

Acceptance Criteria:
1. Given Vehicle Data step is active, when all mandatory fields are valid, then Next is allowed.
2. Given valid data entered, when user clicks Next, then Enter Insurant Data opens.
3. Given payload and weight validations, when values are out of range, then progression is blocked.

Test Cases (Type tagged):

TC-TRK-002-01
Type: Positive
Title: Complete Truck Vehicle Data with valid inputs
Preconditions:
- Enter Vehicle Data is active.
Execution Steps:
1. Make: Ford.
2. Engine Performance: 250.
3. Date of Manufacture: 05/10/2021.
4. Number of Seats: 2.
5. Fuel Type: Diesel.
6. Payload: 900.
7. Total Weight: 5500.
8. List Price: 45000.
9. License Plate Number: TRK1234.
10. Annual Mileage: 15000.
11. Click Next.
Expected Result:
- Insurant step opens.
- Vehicle step counter becomes 0.

TC-TRK-002-02
Type: Negative
Title: Payload out-of-range blocks progression
Preconditions:
- Enter Vehicle Data is active.
Execution Steps:
1. Fill all mandatory fields with valid values.
2. Enter Payload as 1200.
3. Click Next.
Expected Result:
- User remains on Vehicle Data.
- Payload validation indicates allowed range.

TC-TRK-002-03
Type: Negative
Title: Engine performance non-numeric rejected
Preconditions:
- Enter Vehicle Data is active.
Execution Steps:
1. Fill required fields.
2. Enter Engine Performance as abc.
3. Click Next.
Expected Result:
- Progression blocked.
- Engine Performance validation appears.

TC-TRK-002-04
Type: Negative
Title: Missing Total Weight blocks Next
Preconditions:
- Enter Vehicle Data is active.
Execution Steps:
1. Fill all mandatory fields except Total Weight.
2. Click Next.
Expected Result:
- User remains on Vehicle Data.
- Total Weight flagged as required.

TC-TRK-002-05
Type: Positive
Title: Validate Truck-specific fields are visible
Preconditions:
- Enter Vehicle Data is active.
Execution Steps:
1. Verify Payload field exists.
2. Verify Total Weight field exists.
3. Verify fuel and seat selectors are available.
Expected Result:
- Truck-specific controls are present and editable.

## US-TRK-003: Complete Insurant Data
User Story:
As a prospective customer,
I want to enter my insurant information,
so that my truck quote is associated with me.

Acceptance Criteria:
1. Given mandatory insurant inputs are valid, when Next is clicked, then Product Data opens.
2. Given invalid mandatory values, when Next is clicked, then user remains on Insurant step.
3. Given hobbies allow multi-select, when multiple hobbies are selected, then all selected values are retained.

Test Cases (Type tagged):

TC-TRK-003-01
Type: Positive
Title: Complete Insurant Data with valid values
Preconditions:
- Enter Insurant Data is active.
Execution Steps:
1. First Name: Robert.
2. Last Name: Miles.
3. Date of Birth: 02/18/1988.
4. Gender: Male.
5. Street Address: 77 Cargo Lane.
6. Country: United States.
7. Zip Code: 30301.
8. City: Atlanta.
9. Occupation: Employee.
10. Select hobby: Speeding.
11. Website: https://example.com.
12. Click Next.
Expected Result:
- Product Data step opens.
- Insurant counter becomes 0.

TC-TRK-003-02
Type: Negative
Title: Last Name missing blocks progression
Preconditions:
- Enter Insurant Data is active.
Execution Steps:
1. Fill all mandatory fields except Last Name.
2. Click Next.
Expected Result:
- User remains on Insurant Data.
- Last Name validation appears.

TC-TRK-003-03
Type: Negative
Title: Age out of allowed range is rejected
Preconditions:
- Enter Insurant Data is active.
Execution Steps:
1. Enter Date of Birth resulting in age below 18 or above 70.
2. Fill other required fields validly.
3. Click Next.
Expected Result:
- Progression blocked.
- Age validation message displayed.

TC-TRK-003-04
Type: Negative
Title: Invalid website format validation
Preconditions:
- Enter Insurant Data is active.
Execution Steps:
1. Fill required fields.
2. Enter Website as mysite.
3. Click Next.
Expected Result:
- Website format validation displayed.
- User remains on step.

TC-TRK-003-05
Type: Positive
Title: Multi-select hobbies are retained
Preconditions:
- Enter Insurant Data is active.
Execution Steps:
1. Select Speeding and Skydiving.
2. Click outside the hobby section.
3. Verify both remain selected.
Expected Result:
- Multiple hobby values are retained.

## US-TRK-004: Complete Truck Product Data
User Story:
As a prospective customer,
I want to choose truck product coverage,
so that the quote reflects my desired protection.

Acceptance Criteria:
1. Given Product Data mandatory fields are valid, when Next is clicked, then Price Option opens.
2. Given invalid start date rule, when Next is clicked, then progression is blocked.
3. Given optional products are selected, when proceeding, selections are retained.

Test Cases (Type tagged):

TC-TRK-004-01
Type: Positive
Title: Complete Product Data with valid values
Preconditions:
- Enter Product Data is active.
Execution Steps:
1. Start Date: 12/15/2026.
2. Insurance Sum: 7.000.000,00.
3. Damage Insurance: Partial Coverage.
4. Select Euro Protection.
5. Click Next.
Expected Result:
- Select Price Option opens.
- Product counter becomes 0.

TC-TRK-004-02
Type: Negative
Title: Start Date less than one month in future blocked
Preconditions:
- Enter Product Data is active.
Execution Steps:
1. Enter Start Date as current date plus less than one month.
2. Fill other required fields.
3. Click Next.
Expected Result:
- User remains on Product Data.
- Start Date future-rule validation appears.

TC-TRK-004-03
Type: Negative
Title: Missing Insurance Sum blocks progression
Preconditions:
- Enter Product Data is active.
Execution Steps:
1. Fill all required fields except Insurance Sum.
2. Click Next.
Expected Result:
- Insurance Sum required validation appears.
- Step does not advance.

TC-TRK-004-04
Type: Positive
Title: Both optional products can be selected
Preconditions:
- Enter Product Data is active.
Execution Steps:
1. Select Euro Protection.
2. Select Legal Defense Insurance.
3. Fill required fields.
4. Click Next.
Expected Result:
- Both options retained.
- User proceeds to Price Option.

TC-TRK-004-05
Type: Positive
Title: Validate Product Data field set for Truck
Preconditions:
- Enter Product Data is active.
Execution Steps:
1. Verify fields present: Start Date, Insurance Sum, Damage Insurance, Optional Products.
2. Confirm no Merit Rating and no Courtesy Car fields in Truck flow.
Expected Result:
- Truck-specific product field set is displayed correctly.

## US-TRK-005: Select Truck Price Option
User Story:
As a prospective customer,
I want to compare truck plans and select one,
so that I can continue to quote submission.

Acceptance Criteria:
1. Given first three steps completed, when user opens Price Option, then table is displayed.
2. Given no plan selected, when user tries to continue, then progression is blocked.
3. Given one plan selected, when user clicks Next, then Send Quote form opens.

Test Cases (Type tagged):

TC-TRK-005-01
Type: Positive
Title: Verify Truck price matrix values
Preconditions:
- Select Price Option step is active and prior steps complete.
Execution Steps:
1. Read Price per Year row.
2. Read Online Claim row.
3. Read Claims Discount row.
4. Read Worldwide Cover row.
Expected Result:
- Price per Year: 279.00, 823.00, 1,615.00, 3,078.00.
- Online Claim: No, Submit, Submit, Submit.
- Claims Discount: No, 2, 5, 10.
- Worldwide Cover: No, Limited, Limited, Unlimited.

TC-TRK-005-02
Type: Negative
Title: Price table hidden when prerequisites incomplete
Preconditions:
- At least one of first three steps is incomplete.
Execution Steps:
1. Navigate to Select Price Option.
Expected Result:
- Informational message prompts completion of first three steps.
- Price table is not shown.

TC-TRK-005-03
Type: Negative
Title: No selected plan blocks Send Quote access
Preconditions:
- Price table is displayed.
Execution Steps:
1. Do not select any plan.
2. Attempt to continue to Send Quote.
Expected Result:
- Send Quote fields are not available.
- Informational message asks to select a price option.

TC-TRK-005-04
Type: Positive
Title: Select Gold plan and continue
Preconditions:
- Price table is displayed.
Execution Steps:
1. Select Gold plan.
2. Click Next.
Expected Result:
- Send Quote step opens.
- Price Option counter becomes 0.

TC-TRK-005-05
Type: Positive
Title: Single selection behavior across plans
Preconditions:
- Price table is displayed.
Execution Steps:
1. Select Platinum.
2. Select Ultimate.
Expected Result:
- Ultimate remains selected.
- Platinum is deselected.

## US-TRK-006: Submit Truck Quote
User Story:
As a prospective customer,
I want to submit my truck quote request,
so that I can receive processing confirmation.

Acceptance Criteria:
1. Given valid Send Quote inputs, when Send is clicked, then submission proceeds and result modal appears.
2. Given invalid credentials/email format, when Send is clicked, then submission is blocked.
3. Given required fields are empty, when Send is clicked, then required validation is shown.

Test Cases (Type tagged):

TC-TRK-006-01
Type: Positive
Title: Submit Truck quote with valid data
Preconditions:
- Send Quote form is visible.
Execution Steps:
1. E-Mail: robert.miles@example.com.
2. Phone: 12345678.
3. Username: rmiles20260729.
4. Password: Pass1234.
5. Confirm Password: Pass1234.
6. Comments: Truck quote e2e submit.
7. Click Send.
Expected Result:
- Submission status modal appears.

TC-TRK-006-02
Type: Negative
Title: Password mismatch blocks submission
Preconditions:
- Send Quote form is visible.
Execution Steps:
1. Enter valid fields.
2. Set Password and Confirm Password to different values.
3. Click Send.
Expected Result:
- Submission blocked.
- Password mismatch validation displayed.

TC-TRK-006-03
Type: Negative
Title: Invalid email format blocked
Preconditions:
- Send Quote form is visible.
Execution Steps:
1. Enter E-Mail as robert-at-example.
2. Fill remaining fields validly.
3. Click Send.
Expected Result:
- Submission blocked.
- Email format validation shown.

TC-TRK-006-04
Type: Negative
Title: Missing username blocks submission
Preconditions:
- Send Quote form is visible.
Execution Steps:
1. Fill required fields except Username.
2. Click Send.
Expected Result:
- Submission blocked.
- Username required validation shown.

TC-TRK-006-05
Type: Positive
Title: Submit with alternate valid account data
Preconditions:
- Send Quote form is visible.
Execution Steps:
1. Enter unique valid email and username.
2. Enter valid phone and matching passwords.
3. Click Send.
Expected Result:
- Submission accepted.
- Result modal displayed.

## US-TRK-007: Mandatory Validation and Gating
User Story:
As the insurance provider,
I want strict mandatory-field and sequence validation,
so that incomplete or inconsistent truck quotes are not processed.

Acceptance Criteria:
1. Given required values missing, when Next/Send is clicked, then user is blocked on current step.
2. Given dependencies not met, when opening later steps, then gating message appears.
3. Given invalid value corrected, when action retried, then user can proceed.

Test Cases (Type tagged):

TC-TRK-007-01
Type: Negative
Title: Vehicle step empty form blocked
Preconditions:
- Enter Vehicle Data is active.
Execution Steps:
1. Click Next without entering values.
Expected Result:
- User remains on Vehicle Data.
- Required validations appear.

TC-TRK-007-02
Type: Negative
Title: Insurant step empty form blocked
Preconditions:
- Enter Insurant Data is active.
Execution Steps:
1. Click Next with required fields blank.
Expected Result:
- User remains on Insurant Data.
- Required validations appear.

TC-TRK-007-03
Type: Negative
Title: Product step empty mandatory fields blocked
Preconditions:
- Enter Product Data is active.
Execution Steps:
1. Click Next with required fields blank.
Expected Result:
- User remains on Product Data.
- Required validations appear.

TC-TRK-007-04
Type: Negative
Title: Send Quote hidden when price plan not selected
Preconditions:
- First three steps complete.
Execution Steps:
1. Do not select any price option.
2. Navigate to Send Quote.
Expected Result:
- Send Quote form is not displayed.
- Message asks user to select a price option.

TC-TRK-007-05
Type: Positive
Title: Correcting validation errors enables progression
Preconditions:
- Any step has validation errors.
Execution Steps:
1. Correct invalid/missing fields.
2. Retry Next or Send.
Expected Result:
- Validation errors cleared.
- Flow proceeds to next state.

## US-TRK-008: Data Persistence Across Navigation
User Story:
As a prospective customer,
I want my Truck quote inputs to persist across navigation,
so that I do not lose entered information.

Acceptance Criteria:
1. Given step data entered, when navigating forward/backward, then values persist.
2. Given plan selected, when leaving and returning to Price Option, then selection persists.
3. Given completed steps, when revisiting without edits, counters remain at 0.

Test Cases (Type tagged):

TC-TRK-008-01
Type: Positive
Title: Vehicle data persists on return
Preconditions:
- Vehicle and Insurant steps reachable.
Execution Steps:
1. Enter valid Truck Vehicle Data.
2. Move to Insurant.
3. Navigate back to Vehicle.
Expected Result:
- Entered Vehicle values persist.

TC-TRK-008-02
Type: Positive
Title: Insurant data persists after Product step visit
Preconditions:
- Insurant and Product steps reachable.
Execution Steps:
1. Enter valid Insurant data.
2. Move to Product.
3. Return to Insurant.
Expected Result:
- Insurant values remain populated.

TC-TRK-008-03
Type: Positive
Title: Product data persists after navigating to Price Option
Preconditions:
- Product and Price steps reachable.
Execution Steps:
1. Enter valid Product data.
2. Move to Price Option.
3. Return to Product.
Expected Result:
- Product values remain populated.

TC-TRK-008-04
Type: Positive
Title: Price plan selection persists to Send Quote and back
Preconditions:
- Price Option step is available.
Execution Steps:
1. Select Gold plan.
2. Move to Send Quote.
3. Return to Price Option.
Expected Result:
- Gold remains selected.

TC-TRK-008-05
Type: Negative
Title: Clearing completed mandatory field reopens validation
Preconditions:
- A step counter is 0.
Execution Steps:
1. Return to completed step.
2. Clear one mandatory field.
3. Attempt to continue.
Expected Result:
- Step no longer treated as complete.
- Validation blocks progression until fixed.

## 3. Suggested Regression Execution Order
1. Run happy-path positives first: TC-TRK-001-01, TC-TRK-002-01, TC-TRK-003-01, TC-TRK-004-01, TC-TRK-005-04, TC-TRK-006-01.
2. Run gating validations: TC-TRK-005-02, TC-TRK-005-03, TC-TRK-007-04.
3. Run field-level negatives for each step (US-TRK-002/003/004/006/007).
4. Run persistence tests (US-TRK-008).
5. Re-run smoke positives.

## 4. Reusable Truck Test Data
- Make: Ford
- Engine Performance: 250
- Date of Manufacture: 05/10/2021
- Seats: 2
- Fuel: Diesel
- Payload: 900
- Total Weight: 5500
- List Price: 45000
- Plate: TRK1234
- Mileage: 15000
- First Name: Robert
- Last Name: Miles
- DOB: 02/18/1988
- Country: United States
- Zip: 30301
- City: Atlanta
- Occupation: Employee
- Start Date: 12/15/2026
- Insurance Sum: 7.000.000,00
- Damage Insurance: Partial Coverage
- Email: robert.miles@example.com
- Phone: 12345678
- Username: rmiles20260729
- Password: Pass1234

## 5. Traceability Mapping
- US-TRK-001 to Spec Sections 4 and 5.
- US-TRK-002 to Spec Section 6.1.
- US-TRK-003 to Spec Section 6.2.
- US-TRK-004 to Spec Section 6.3.
- US-TRK-005 to Spec Section 6.4.
- US-TRK-006 to Spec Section 6.5.
- US-TRK-007 to Spec Sections 7 and 8.
- US-TRK-008 to Spec Sections 5 and 8.
