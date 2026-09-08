# Automobile LOB User Stories, Acceptance Criteria, and Test Cases

Version: 1.0
Date: 2026-07-29
Application: Tricentis Vehicle Insurance Sample App - Automobile
Reference Spec: Automobile_LOB_Functional_Business_Spec.md

## 1. Story Map Summary
- US-001: Start Automobile quote from landing page
- US-002: Enter valid Vehicle Data and proceed
- US-003: Enter valid Insurant Data and proceed
- US-004: Enter valid Product Data and proceed
- US-005: Select one Price Option and proceed
- US-006: Submit quote from Send Quote step
- US-007: Prevent progression when mandatory inputs are missing
- US-008: Preserve entered data during back and forth navigation

## 2. Detailed User Stories

## US-001: Start Automobile Quote
User Story:
As a prospective customer,
I want to start an Automobile insurance quote from the home page,
so that I can begin the quote process quickly.

Acceptance Criteria:
1. Given user is on landing page, when user clicks Automobile offer tile, then system opens Automobile wizard.
2. Given wizard opens, when first step is displayed, then title is Enter Vehicle Data.
3. Given first step is displayed, when page loads, then required counters are visible for all five steps.

Test Cases (5):

TC-US001-01
Type: Positive
Title: Open Automobile wizard from offer tile
Preconditions:
- User is on landing page.
Execution Steps:
1. Open https://sampleapp.tricentis.com/101/.
2. Locate Automobile offer card.
3. Click Automobile offer card.
Expected Result:
- User is navigated to app.php.
- Wizard is loaded with Automobile context.
- Enter Vehicle Data step is active.

TC-US001-02
Type: Positive
Title: Verify initial counters are displayed
Preconditions:
- User has opened Automobile wizard.
Execution Steps:
1. Observe step navigation counters.
2. Record visible counts for all steps.
Expected Result:
- Enter Vehicle Data shows 7.
- Enter Insurant Data shows 7.
- Enter Product Data shows 6.
- Select Price Option shows 1.
- Send Quote shows 4.

TC-US001-03
Type: Positive
Title: Start journey from home menu Automobile link
Preconditions:
- User is on landing page.
Execution Steps:
1. Click menu icon.
2. Click Automobile from menu.
Expected Result:
- Automobile wizard is opened.
- Enter Vehicle Data step is active.

TC-US001-04
Type: Negative
Title: Clicking non-Automobile card should not start Automobile flow
Preconditions:
- User is on landing page.
Execution Steps:
1. Click Truck or Camper offer card.
Expected Result:
- Non-automobile line is opened.
- Enter Vehicle Data for Automobile is not the active context.

TC-US001-05
Type: Positive
Title: Home breadcrumb returns user to landing page
Preconditions:
- User is on Automobile wizard page.
Execution Steps:
1. Click Home breadcrumb.
Expected Result:
- User returns to index.php landing page.
- Automobile offer card is visible.

## US-002: Complete Vehicle Data
User Story:
As a prospective customer,
I want to enter vehicle details,
so that the system can prepare quote-relevant risk and pricing inputs.

Acceptance Criteria:
1. Given Vehicle Data step is active, when user enters valid values in mandatory fields, then Next is allowed.
2. Given valid values are entered, when user clicks Next, then system opens Enter Insurant Data step.
3. Given Make is dropdown, when user opens options, then predefined manufacturer list is available.

Test Cases (5):

TC-US002-01
Type: Positive
Title: Complete Vehicle Data with valid values
Preconditions:
- Vehicle Data step is active.
Execution Steps:
1. Set Make to Audi.
2. Enter Engine Performance as 120.
3. Enter Date of Manufacture as 06/15/2022.
4. Set Number of Seats to 4.
5. Set Fuel Type to Petrol.
6. Enter List Price as 25000.
7. Enter License Plate Number as AB123CD.
8. Enter Annual Mileage as 8000.
9. Click Next.
Expected Result:
- No validation blocker appears.
- System navigates to Enter Insurant Data.
- Vehicle step counter becomes 0.

TC-US002-02
Type: Positive
Title: Validate Make dropdown option set
Preconditions:
- Vehicle Data step is active.
Execution Steps:
1. Open Make dropdown.
2. Verify values including Audi, BMW, Ford, Toyota, Volkswagen, Volvo.
Expected Result:
- Dropdown contains expected predefined make list.

TC-US002-03
Type: Negative
Title: Invalid date format blocks progression
Preconditions:
- Vehicle Data step is active.
Execution Steps:
1. Fill all mandatory fields with valid values.
2. Enter Date of Manufacture as 2022-06-15.
3. Click Next.
Expected Result:
- User remains on Vehicle Data.
- Date validation message is shown.

TC-US002-04
Type: Negative
Title: Non-numeric engine performance is rejected
Preconditions:
- Vehicle Data step is active.
Execution Steps:
1. Fill all fields with valid values except Engine Performance.
2. Enter Engine Performance as abc.
3. Click Next.
Expected Result:
- User remains on Vehicle Data.
- Engine Performance field shows validation error.

TC-US002-05
Type: Negative
Title: Missing mandatory field blocks Next
Preconditions:
- Vehicle Data step is active.
Execution Steps:
1. Fill all mandatory fields except Annual Mileage.
2. Click Next.
Expected Result:
- User remains on Vehicle Data.
- Annual Mileage is flagged as required.

## US-003: Complete Insurant Data
User Story:
As a prospective customer,
I want to provide my personal and profile details,
so that the quote request can be associated with an applicant.

Acceptance Criteria:
1. Given Insurant Data step is active, when mandatory fields are completed, then Next is enabled.
2. Given valid data, when user clicks Next, then system opens Enter Product Data.
3. Given hobbies are checkboxes, when user selects more than one hobby, then selections are retained.

Test Cases (5):

TC-US003-01
Type: Positive
Title: Complete Insurant Data with valid values
Preconditions:
- Insurant Data step is active.
Execution Steps:
1. Enter First Name as John.
2. Enter Last Name as Doe.
3. Enter Date of Birth as 01/15/1990.
4. Select Gender as Male.
5. Enter Street Address as 123 Main Street.
6. Select Country as United States.
7. Enter Zip Code as 12345.
8. Enter City as New York.
9. Select Occupation as Employee.
10. Select hobby Speeding.
11. Enter Website as https://example.com.
12. Click Next.
Expected Result:
- System navigates to Enter Product Data.
- Insurant step counter becomes 0.

TC-US003-02
Type: Positive
Title: Multi-select hobbies are retained
Preconditions:
- Insurant Data step is active.
Execution Steps:
1. Select Speeding.
2. Select Skydiving.
3. Click outside hobby section.
Expected Result:
- Both selections remain checked.

TC-US003-03
Type: Negative
Title: Missing last name blocks progression
Preconditions:
- Insurant Data step is active.
Execution Steps:
1. Fill all required fields except Last Name.
2. Click Next.
Expected Result:
- User remains on Insurant Data.
- Last Name is flagged as required.

TC-US003-04
Type: Negative
Title: Invalid date of birth format is rejected
Preconditions:
- Insurant Data step is active.
Execution Steps:
1. Enter Date of Birth as 1990-01-15.
2. Fill all other required fields validly.
3. Click Next.
Expected Result:
- User remains on Insurant Data.
- Date of Birth shows validation feedback.

TC-US003-05
Type: Negative
Title: Numeric zip rule validation
Preconditions:
- Insurant Data step is active.
Execution Steps:
1. Fill required fields.
2. Enter Zip Code as ABCDE.
3. Click Next.
Expected Result:
- User remains on Insurant Data.
- Zip Code field shows validation error.

## US-004: Complete Product Data
User Story:
As a prospective customer,
I want to choose product and coverage configuration,
so that I can get a quote matching my desired protection level.

Acceptance Criteria:
1. Given Product Data step is active, when user enters required values, then Next is allowed.
2. Given valid product configuration, when user clicks Next, then system opens Select Price Option.
3. Given optional products are checkboxes, when selected, then multiple add-ons are supported.

Test Cases (5):

TC-US004-01
Type: Positive
Title: Complete Product Data with valid values
Preconditions:
- Product Data step is active.
Execution Steps:
1. Enter Start Date as 12/20/2026.
2. Select Insurance Sum as 10.000.000,00.
3. Select Merit Rating as Bonus 3.
4. Select Damage Insurance as Full Coverage.
5. Select Euro Protection.
6. Set Courtesy Car to Yes.
7. Click Next.
Expected Result:
- System navigates to Select Price Option.
- Product step counter becomes 0.

TC-US004-02
Type: Positive
Title: Validate Product Data dropdown options
Preconditions:
- Product Data step is active.
Execution Steps:
1. Open Insurance Sum dropdown.
2. Verify values from 3.000.000,00 through 35.000.000,00.
3. Open Damage Insurance dropdown.
4. Verify No Coverage, Partial Coverage, Full Coverage.
Expected Result:
- Expected options are present.

TC-US004-03
Type: Negative
Title: Past start date blocks progression
Preconditions:
- Product Data step is active.
Execution Steps:
1. Enter Start Date as 01/01/2020.
2. Fill other mandatory fields validly.
3. Click Next.
Expected Result:
- User remains on Product Data.
- Start Date validation is shown.

TC-US004-04
Type: Negative
Title: Missing insurance sum blocks Next
Preconditions:
- Product Data step is active.
Execution Steps:
1. Fill all required fields except Insurance Sum.
2. Click Next.
Expected Result:
- User remains on Product Data.
- Insurance Sum is flagged as required.

TC-US004-05
Type: Positive
Title: Multiple optional products can be selected
Preconditions:
- Product Data step is active.
Execution Steps:
1. Select Euro Protection.
2. Select Legal Defense Insurance.
3. Fill remaining mandatory fields validly.
4. Click Next.
Expected Result:
- Both options remain selected.
- User proceeds to Select Price Option.

## US-005: Select Price Option
User Story:
As a prospective customer,
I want to compare and choose a price package,
so that I can continue with my preferred premium and benefits.

Acceptance Criteria:
1. Given Price Option step is active, when user views plan table, then Silver, Gold, Platinum, Ultimate are shown.
2. Given user selects one plan, when selection is complete, then only one radio option remains active.
3. Given plan is selected, when user clicks Next, then system opens Send Quote step.

Test Cases (5):

TC-US005-01
Type: Positive
Title: Select Gold plan and continue
Preconditions:
- Select Price Option step is active.
Execution Steps:
1. Select Gold.
2. Click Next.
Expected Result:
- Send Quote step opens.
- Price Option counter becomes 0.

TC-US005-02
Type: Positive
Title: Validate comparison matrix values
Preconditions:
- Select Price Option step is active.
Execution Steps:
1. Verify Price per Year values.
2. Verify Online Claim values.
3. Verify Claims Discount values.
4. Verify Worldwide Cover values.
Expected Result:
- Matrix values match specification.

TC-US005-03
Type: Negative
Title: No plan selected blocks progression
Preconditions:
- Select Price Option step is active.
Execution Steps:
1. Ensure no plan selected.
2. Click Next.
Expected Result:
- User remains on Select Price Option.
- Validation indicates a selection is required.

TC-US005-04
Type: Positive
Title: Only one plan can be selected at a time
Preconditions:
- Select Price Option step is active.
Execution Steps:
1. Select Silver.
2. Select Platinum.
Expected Result:
- Platinum is selected.
- Silver is deselected automatically.

TC-US005-05
Type: Positive
Title: Ultimate plan selection path
Preconditions:
- Select Price Option step is active.
Execution Steps:
1. Select Ultimate.
2. Click Next.
Expected Result:
- Send Quote step opens with Ultimate retained as selected plan.

## US-006: Submit Quote
User Story:
As a prospective customer,
I want to submit my quote request,
so that I receive final processing confirmation.

Acceptance Criteria:
1. Given Send Quote step is active, when user fills required fields with valid values, then submission is accepted.
2. Given submission is triggered, when processing finishes, then system shows final status modal.
3. Given successful completion, when user closes modal, then form remains in consistent post-submit state.

Test Cases (7):

TC-US006-01
Type: Positive
Title: Submit quote with valid data
Preconditions:
- Send Quote step is active.
- Prior steps are complete.
Execution Steps:
1. Enter valid E-Mail, Phone, Username, Password, Confirm Password, and Comments.
2. Click Send.
3. Wait for result modal.
Expected Result:
- Submission modal is displayed.
- A completion status is shown.

TC-US006-02
Type: Negative
Title: Password and confirm password mismatch
Preconditions:
- Send Quote step is active.
Execution Steps:
1. Enter Password as Pass1234.
2. Enter Confirm Password as Pass12345.
3. Fill other fields validly.
4. Click Send.
Expected Result:
- Submission is blocked.
- Password mismatch validation appears.

TC-US006-03
Type: Negative
Title: Invalid email format blocks submission
Preconditions:
- Send Quote step is active.
Execution Steps:
1. Enter E-Mail as johndoe-at-example.
2. Fill other fields validly.
3. Click Send.
Expected Result:
- Submission is blocked.
- Email format validation is shown.

TC-US006-04
Type: Negative
Title: Missing username blocks submission
Preconditions:
- Send Quote step is active.
Execution Steps:
1. Fill all required fields except Username.
2. Click Send.
Expected Result:
- Submission is blocked.
- Username is flagged as required.

TC-US006-05
Type: Positive
Title: Submit with alternate valid user data
Preconditions:
- Send Quote step is active.
Execution Steps:
1. Enter unique valid email and username.
2. Enter valid phone and matching password fields.
3. Click Send.
Expected Result:
- Submission request is accepted.
- Result modal appears.

TC-US006-06
Type: Positive
Title: End-to-end quote with Toyota Diesel vehicle, Female Farmer insurant, and Silver plan
Preconditions:
- User is on landing page.
Execution Steps:
1. Open https://sampleapp.tricentis.com/101/.
2. Click Automobile offer card.
3. Set Make to Toyota.
4. Enter Engine Performance as 95.
5. Enter Date of Manufacture as 09/01/2018.
6. Set Number of Seats to 2.
7. Set Fuel Type to Diesel.
8. Enter List Price as 18000.
9. Enter License Plate Number as TY456DL.
10. Enter Annual Mileage as 5000.
11. Click Next.
12. Enter First Name as Laura.
13. Enter Last Name as Müller.
14. Enter Date of Birth as 03/08/1978.
15. Select Gender as Female.
16. Enter Street Address as 45 Berliner Strasse.
17. Select Country as Germany.
18. Enter Zip Code as 10115.
19. Enter City as Berlin.
20. Select Occupation as Farmer.
21. Click Next.
22. Enter Start Date as 01/15/2027.
23. Select Insurance Sum as 5.000.000,00.
24. Select Merit Rating as Bonus 1.
25. Select Damage Insurance as Partial Coverage.
26. Set Courtesy Car to No.
27. Click Next.
28. Select Silver.
29. Click Next.
30. Enter E-Mail as laura.mueller.20270115@example.com.
31. Enter Phone as 49301234567.
32. Enter Username as lmueller20270115.
33. Enter Password as Pass5678.
34. Enter Confirm Password as Pass5678.
35. Click Send.
Expected Result:
- All steps complete without validation errors.
- Submission modal is displayed with a completion status.

TC-US006-07
Type: Positive
Title: End-to-end quote with Volkswagen Electric vehicle, Selfemployed insurant with hobbies, and Platinum plan
Preconditions:
- User is on landing page.
Execution Steps:
1. Open https://sampleapp.tricentis.com/101/.
2. Click Automobile offer card.
3. Set Make to Volkswagen.
4. Enter Engine Performance as 200.
5. Enter Date of Manufacture as 11/20/2023.
6. Set Number of Seats to 4.
7. Set Fuel Type to Electric Power.
8. Enter List Price as 52000.
9. Enter License Plate Number as VW321EL.
10. Enter Annual Mileage as 20000.
11. Click Next.
12. Enter First Name as Marco.
13. Enter Last Name as Rossi.
14. Enter Date of Birth as 07/14/1990.
15. Select Gender as Male.
16. Enter Street Address as 10 Via Roma.
17. Select Country as Italy.
18. Enter Zip Code as 00100.
19. Enter City as Rome.
20. Select Occupation as Selfemployed.
21. Select hobby Skydiving.
22. Select hobby Cliff Diving.
23. Enter Website as https://marcorossi.example.com.
24. Click Next.
25. Enter Start Date as 03/01/2027.
26. Select Insurance Sum as 20.000.000,00.
27. Select Merit Rating as Bonus 5.
28. Select Damage Insurance as Full Coverage.
29. Select Legal Defense Insurance.
30. Select Euro Protection.
31. Set Courtesy Car to Yes.
32. Click Next.
33. Select Platinum.
34. Click Next.
35. Enter E-Mail as marco.rossi.20270301@example.com.
36. Enter Phone as 390612345678.
37. Enter Username as mrossi20270301.
38. Enter Password as Pass9012.
39. Enter Confirm Password as Pass9012.
40. Click Send.
Expected Result:
- All steps complete without validation errors.
- Both Skydiving and Cliff Diving hobbies are retained throughout navigation.
- Submission modal is displayed with a completion status.

## US-007: Mandatory Field Validation Enforcement
User Story:
As the insurance provider,
I want mandatory data validation at each step,
so that incomplete quotes are not processed.

Acceptance Criteria:
1. Given required fields are missing, when user clicks Next or Send, then progression/submission is blocked.
2. Given missing data exists, when validation runs, then user receives error indicators.
3. Given user corrects missing data, when action is retried, then flow continues.

Test Cases (5):

TC-US007-01
Type: Negative
Title: Vehicle step blocks empty submission
Preconditions:
- Vehicle Data step is active.
Execution Steps:
1. Click Next with blank form.
Expected Result:
- User remains on Vehicle Data.
- Mandatory field errors are shown.

TC-US007-02
Type: Negative
Title: Insurant step blocks empty submission
Preconditions:
- Insurant Data step is active.
Execution Steps:
1. Click Next with blank mandatory fields.
Expected Result:
- User remains on Insurant Data.
- Mandatory field errors are shown.

TC-US007-03
Type: Negative
Title: Product step blocks empty submission
Preconditions:
- Product Data step is active.
Execution Steps:
1. Click Next with missing mandatory values.
Expected Result:
- User remains on Product Data.
- Required field messages are displayed.

TC-US007-04
Type: Negative
Title: Send Quote blocks empty submission
Preconditions:
- Send Quote step is active.
Execution Steps:
1. Leave required fields blank.
2. Click Send.
Expected Result:
- User remains on Send Quote step.
- Required field errors appear.

TC-US007-05
Type: Positive
Title: Correcting validation errors allows continuation
Preconditions:
- User has triggered a mandatory validation error on any step.
Execution Steps:
1. Correct each highlighted field with valid values.
2. Retry Next or Send.
Expected Result:
- Error markers are removed.
- User can continue to next step or submit.

## US-008: Data Persistence Across Navigation
User Story:
As a prospective customer,
I want my entered values to persist while navigating between steps,
so that I do not need to re-enter data.

Acceptance Criteria:
1. Given user enters valid data in a step, when user moves forward and then backward, then previously entered values are retained.
2. Given a selected price plan, when user navigates away and returns, then selected plan remains selected.
3. Given counters reached 0 for completed steps, when user returns without edits, then counters remain 0.

Test Cases (5):

TC-US008-01
Type: Positive
Title: Vehicle values persist after back navigation
Preconditions:
- Vehicle and Insurant steps are reachable.
Execution Steps:
1. Complete Vehicle Data.
2. Move to Insurant.
3. Navigate back to Vehicle.
Expected Result:
- All entered Vehicle values persist.

TC-US008-02
Type: Positive
Title: Price option persists after step change
Preconditions:
- Price Option step is reachable.
Execution Steps:
1. Select Platinum.
2. Move to Send Quote.
3. Navigate back to Price Option.
Expected Result:
- Platinum remains selected.

TC-US008-03
Type: Positive
Title: Insurant values persist after moving to Product and back
Preconditions:
- Insurant and Product steps are reachable.
Execution Steps:
1. Enter valid Insurant data.
2. Move to Product.
3. Navigate back to Insurant.
Expected Result:
- Entered Insurant values are retained.

TC-US008-04
Type: Positive
Title: Completed-step counters remain zero on revisit
Preconditions:
- Vehicle and Insurant steps are completed.
Execution Steps:
1. Move to later step.
2. Revisit completed steps without edits.
Expected Result:
- Completed step counters remain 0.

TC-US008-05
Type: Negative
Title: Changing a previously completed value reactivates validation state
Preconditions:
- A step is completed and shows counter 0.
Execution Steps:
1. Return to completed step.
2. Clear a mandatory field.
3. Attempt to move forward.
Expected Result:
- Progress is blocked until field is fixed.
- Counter no longer indicates completion while invalid.

## 3. Regression Execution Order Recommendation
1. Run all Positive tests in sequence: US-001 to US-008 (TC-xx-01/02 primary happy path first).
2. Run field-level Negative tests on Vehicle and Insurant steps.
3. Run Product and Price Option Negative tests.
4. Run Send Quote Negative tests.
5. Re-run key Positive smoke set: TC-US001-01, TC-US002-01, TC-US003-01, TC-US004-01, TC-US005-01, TC-US006-01.

## 4. Test Data Set (Reusable)
- Make: Audi
- Engine Performance: 120
- Date of Manufacture: 06/15/2022
- Seats: 4
- Fuel: Petrol
- List Price: 25000
- Plate: AB123CD
- Mileage: 8000
- First Name: John
- Last Name: Doe
- DOB: 01/15/1990
- Country: United States
- Zip: 12345
- City: New York
- Occupation: Employee
- Product Start Date: 12/20/2026
- Insurance Sum: 10.000.000,00
- Merit Rating: Bonus 3
- Damage Insurance: Full Coverage
- Courtesy Car: Yes
- Email: john.doe.20260729@example.com
- Phone: 12345678
- Username: jdoe20260729
- Password: Pass1234

## Current Test Case: Automobile Quote Happy Path (Audi with Gold Plan)

TC-US006-END-TO-END-01
Type: Positive
Title: Complete end-to-end Automobile quote journey with Audi and Gold plan
Preconditions:
- User is on landing page.
- Test data is available with vehicle, insurant, product, and contact information.
Execution Steps:
1. Open https://sampleapp.tricentis.com/101/ (landing page).
2. Locate and click Automobile offer card.
3. Verify Automobile wizard opens with Enter Vehicle Data step active.
4. Verify step counters are visible for all 5 steps.
5. Set Make to Audi.
6. Enter Engine Performance as per test data.
7. Enter Date of Manufacture as per test data.
8. Set Number of Seats as per test data.
9. Set Fuel Type as per test data.
10. Enter List Price as per test data.
11. Enter License Plate Number as per test data.
12. Enter Annual Mileage as per test data.
13. Click Next.
14. Verify Enter Insurant Data step is active.
15. Enter First Name, Last Name, Date of Birth, Gender, Street Address, Country, Zip Code, City as per test data.
16. Select Occupation as per test data.
17. Click Next.
18. Verify Enter Product Data step is active.
19. Enter Start Date as per test data.
20. Select Insurance Sum as per test data.
21. Select Merit Rating as per test data.
22. Select Damage Insurance type as per test data.
23. Set Courtesy Car as per test data.
24. Click Next.
25. Verify Select Price Option step is active.
26. Select Gold price plan.
27. Click Next.
28. Verify Send Quote step is active.
29. Enter E-Mail, Phone, Username, Password, and Confirm Password.
30. Click Send.
Expected Result:
- All steps complete without validation errors.
- Quote submission is accepted.
- Completion modal is displayed with status confirmation.

## Additional Test Case: Automobile Quote with Toyota Vehicle, Female Insurant with Multiple Hobbies, and Silver Plan

TC-US006-END-TO-END-02
Type: Positive
Title: Complete Automobile quote with Toyota vehicle, Female insurant with multiple hobbies, and Silver plan
Preconditions:
- User is on landing page.
Execution Steps:
1. Open https://sampleapp.tricentis.com/101/.
2. Click Automobile offer card.
3. Verify Automobile wizard is loaded.
4. Set Make to Toyota.
5. Enter Engine Performance as 95.
6. Enter Date of Manufacture as 09/01/2018.
7. Set Number of Seats to 2.
8. Set Fuel Type to Diesel.
9. Enter List Price as 18000.
10. Enter License Plate Number as TY456DL.
11. Enter Annual Mileage as 5000.
12. Click Next.
13. Verify Insurant Data step is active.
14. Enter First Name as Laura.
15. Enter Last Name as Müller.
16. Enter Date of Birth as 03/08/1978.
17. Select Gender as Female.
18. Enter Street Address as 45 Berliner Strasse.
19. Select Country as Germany.
20. Enter Zip Code as 10115.
21. Enter City as Berlin.
22. Select Occupation as Farmer.
23. Select hobby Speeding.
24. Select hobby Skydiving.
25. Verify both hobby selections remain checked.
26. Click Next.
27. Verify Product Data step is active.
28. Enter Start Date as 01/15/2027.
29. Select Insurance Sum as 5.000.000,00.
30. Select Merit Rating as Bonus 1.
31. Select Damage Insurance as Partial Coverage.
32. Set Courtesy Car to No.
33. Click Next.
34. Verify Price Option step is active.
35. Select Silver plan.
36. Click Next.
37. Verify Send Quote step is active.
38. Enter E-Mail as laura.mueller.20270115@example.com.
39. Enter Phone as 49301234567.
40. Enter Username as lmueller20270115.
41. Enter Password as Pass5678.
42. Enter Confirm Password as Pass5678.
43. Click Send.
Expected Result:
- All steps complete without validation errors.
- Both hobby selections (Speeding and Skydiving) are retained throughout the wizard.
- Quote submission succeeds.
- Completion modal appears with status confirmation.

## 5. Traceability Mapping
- US-001 maps to Spec Sections 4 and 5.
- US-002 maps to Spec Section 6.1.
- US-003 maps to Spec Section 6.2.
- US-004 maps to Spec Section 6.3.
- US-005 maps to Spec Section 6.4.
- US-006 maps to Spec Section 6.5.
- US-007 maps to Spec Sections 7 and 8.
- US-008 maps to Spec Sections 10 and 11.
