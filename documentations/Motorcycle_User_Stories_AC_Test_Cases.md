# Motorcycle LOB User Stories, Acceptance Criteria, and Test Cases

Version: 1.0
Date: 2026-07-30
Application: Tricentis Vehicle Insurance Sample App - Motorcycle
Reference Spec: Motorcycle_LOB_Functional_Business_Spec.md

## 1. Story Map Summary
- US-001: Start Motorcycle quote from landing page
- US-002: Enter valid Vehicle Data and proceed
- US-003: Enter valid Insurant Data and proceed
- US-004: Enter valid Product Data and proceed
- US-005: Select one Price Option and proceed
- US-006: Submit quote from Send Quote step

## 2. Detailed User Stories

## US-001: Start Motorcycle Quote
User Story:
As a prospective customer,
I want to start a Motorcycle insurance quote from the home page,
so that I can begin the quote process quickly.

Acceptance Criteria:
1. Given the user is on the landing page, when the Motorcycle offer is clicked, then the Motorcycle wizard opens.
2. Given the wizard opens, when the first step is displayed, then the title is Enter Vehicle Data.
3. Given the first step is displayed, when the page loads, then required counters are visible for all five steps.

Test Cases (5):

TC-US001-01
Type: Positive
Title: Open Motorcycle wizard from offer tile
Preconditions:
- User is on the landing page.
Execution Steps:
1. Open https://sampleapp.tricentis.com/101/.
2. Locate the Motorcycle offer card.
3. Click the Motorcycle offer card.
Expected Result:
- User is navigated to the Motorcycle quote wizard.
- Enter Vehicle Data is the active step.
- The wizard is loaded in Motorcycle context.

TC-US001-02
Type: Positive
Title: Verify initial counters are displayed
Preconditions:
- User has opened the Motorcycle wizard.
Execution Steps:
1. Observe the step navigation counters.
2. Record the visible counts for each step.
Expected Result:
- Enter Vehicle Data shows 8.
- Enter Insurant Data shows 7.
- Enter Product Data shows 4.
- Select Price Option shows 1.
- Send Quote shows 4.

TC-US001-03
Type: Positive
Title: Start journey from the home menu Motorcycle link
Preconditions:
- User is on the landing page.
Execution Steps:
1. Click the menu icon.
2. Click Motorcycle from the menu.
Expected Result:
- The Motorcycle wizard opens.
- Enter Vehicle Data is active.

TC-US001-04
Type: Negative
Title: Clicking a non-Motorcycle card should not start the Motorcycle flow
Preconditions:
- User is on the landing page.
Execution Steps:
1. Click the Automobile or Camper offer card.
Expected Result:
- The non-Motorcycle line of business opens instead.
- The Motorcycle wizard is not activated.

TC-US001-05
Type: Positive
Title: Home breadcrumb returns user to landing page
Preconditions:
- User is on the Motorcycle wizard page.
Execution Steps:
1. Click the Home breadcrumb.
Expected Result:
- User returns to the landing page.
- The Motorcycle offer card is visible.

## US-002: Complete Vehicle Data
User Story:
As a prospective customer,
I want to enter vehicle details,
so that the system can prepare quote-relevant risk and pricing inputs.

Acceptance Criteria:
1. Given the Vehicle Data step is active, when valid values are entered, then Next is allowed.
2. Given valid values are entered, when the user clicks Next, then the system opens Enter Insurant Data.
3. Given the Model dropdown is available, when the user reviews the vehicle form, then Scooter, Three-Wheeler, Moped, and Motorcycle options are presented.

Test Cases (5):

TC-US002-01
Type: Positive
Title: Complete Vehicle Data with valid motorcycle values
Preconditions:
- Vehicle Data step is active.
Execution Steps:
1. Set Make to Honda.
2. Set Model to Motorcycle.
3. Enter Cylinder Capacity as 600.
4. Enter Engine Performance as 45.
5. Enter Date of Manufacture as 06/15/2022.
6. Set Number of Seats to 2.
7. Enter List Price as 9000.
8. Enter Annual Mileage as 6000.
9. Click Next.
Expected Result:
- No validation blocker appears.
- The system navigates to Enter Insurant Data.
- The Vehicle step counter becomes 0.

TC-US002-02
Type: Positive
Title: Validate Model dropdown option set
Preconditions:
- Vehicle Data step is active.
Execution Steps:
1. Open the Model dropdown.
2. Review the available values.
Expected Result:
- The dropdown contains Scooter, Three-Wheeler, Moped, and Motorcycle.

TC-US002-03
Type: Positive
Title: Number of Seats dropdown contains valid motorcycle values
Preconditions:
- Vehicle Data step is active.
Execution Steps:
1. Open the Number of Seats dropdown.
2. Review the available values.
Expected Result:
- The dropdown includes 1, 2, and 3 as valid seat options.

TC-US002-04
Type: Negative
Title: Invalid date format blocks progression
Preconditions:
- Vehicle Data step is active.
Execution Steps:
1. Fill all mandatory fields with valid values.
2. Enter Date of Manufacture as 2022-06-15.
3. Click Next.
Expected Result:
- The user remains on Vehicle Data.
- A date validation message is shown.

TC-US002-05
Type: Negative
Title: Missing mandatory field blocks Next
Preconditions:
- Vehicle Data step is active.
Execution Steps:
1. Fill all mandatory fields except Annual Mileage.
2. Click Next.
Expected Result:
- The user remains on Vehicle Data.
- Annual Mileage is flagged as required.

## US-003: Complete Insurant Data
User Story:
As a prospective customer,
I want to provide personal details,
so that the quote request can be associated with an applicant.

Acceptance Criteria:
1. Given the Insurant Data step is active, when mandatory fields are completed, then Next is enabled.
2. Given valid data, when the user clicks Next, then the system opens Enter Product Data.
3. Given required personal data is missing, when the user tries to proceed, then the form should block progression.

Test Cases (5):

TC-US003-01
Type: Positive
Title: Complete Insurant Data with valid values
Preconditions:
- Insurant Data step is active.
Execution Steps:
1. Enter First Name as Liam.
2. Enter Last Name as Brooks.
3. Enter Date of Birth as 01/15/1990.
4. Select Gender as Male.
5. Enter Street Address as 42 Market Street.
6. Select Country as United States.
7. Enter Zip Code as 10001.
8. Enter City as New York.
9. Select Occupation as Employee.
10. Enter Website as https://example.com.
11. Click Next.
Expected Result:
- The system navigates to Enter Product Data.
- The Insurant step counter becomes 0.

TC-US003-02
Type: Negative
Title: Missing last name blocks progression
Preconditions:
- Insurant Data step is active.
Execution Steps:
1. Fill all required fields except Last Name.
2. Click Next.
Expected Result:
- The user remains on Insurant Data.
- Last Name is flagged as required.

TC-US003-03
Type: Negative
Title: Invalid date of birth format is rejected
Preconditions:
- Insurant Data step is active.
Execution Steps:
1. Enter Date of Birth as 1990-01-15.
2. Fill all other required fields with valid values.
3. Click Next.
Expected Result:
- The user remains on Insurant Data.
- Date of Birth shows validation feedback.

TC-US003-04
Type: Negative
Title: Numeric zip code validation is enforced
Preconditions:
- Insurant Data step is active.
Execution Steps:
1. Enter Zip Code as ABCDE.
2. Fill all other required fields with valid values.
3. Click Next.
Expected Result:
- The user remains on Insurant Data.
- Zip Code is flagged as invalid.

TC-US003-05
Type: Negative
Title: Missing street address blocks progression
Preconditions:
- Insurant Data step is active.
Execution Steps:
1. Fill all required fields except Street Address.
2. Click Next.
Expected Result:
- The user remains on Insurant Data.
- Street Address is flagged as required.

## US-004: Complete Product Data
User Story:
As a prospective customer,
I want to choose coverage options,
so that I can get a quote matching my desired protection level.

Acceptance Criteria:
1. Given Product Data is active, when the user enters required values, then Next is allowed.
2. Given valid product configuration, when the user clicks Next, then the system opens Select Price Option.
3. Given optional products are available, when the user selects one or more options, then the selection is retained.

Test Cases (5):

TC-US004-01
Type: Positive
Title: Complete Product Data with valid values
Preconditions:
- Product Data step is active.
Execution Steps:
1. Enter Start Date as 06/15/2026.
2. Select Insurance Sum as 5,000,000.
3. Select Merit Rating as 1.
4. Select Damage Insurance as Full Coverage.
5. Select Courtesy Car as Yes.
6. Select optional product Euro Protection.
7. Click Next.
Expected Result:
- The system navigates to Select Price Option.
- The Product step counter becomes 0.

TC-US004-02
Type: Positive
Title: Validate optional products selection behavior
Preconditions:
- Product Data step is active.
Execution Steps:
1. Select Euro Protection.
2. Select Legal Defense Insurance.
3. Click Next.
Expected Result:
- Both optional products remain selected.
- The form proceeds to the next step without resetting the selections.

TC-US004-03
Type: Negative
Title: Reject incomplete product configuration
Preconditions:
- Product Data step is active.
Execution Steps:
1. Leave Insurance Sum empty.
2. Fill the remaining required fields with valid values.
3. Click Next.
Expected Result:
- The user remains on Product Data.
- Insurance Sum is flagged as required.

TC-US004-04
Type: Negative
Title: Start date invalid format blocks progression
Preconditions:
- Product Data step is active.
Execution Steps:
1. Enter Start Date as 2026-06-15.
2. Fill the remaining fields with valid values.
3. Click Next.
Expected Result:
- The user remains on Product Data.
- A validation message is shown for the Start Date field.

TC-US004-05
Type: Positive
Title: Courtesy Car dropdown options are available
Preconditions:
- Product Data step is active.
Execution Steps:
1. Open the Courtesy Car dropdown.
2. Review the available values.
Expected Result:
- The dropdown includes No and Yes options.

## US-005: Select Price Option
User Story:
As a prospective customer,
I want to choose one price plan,
so that I can proceed to quote submission.

Acceptance Criteria:
1. Given the Price Option step is active, when exactly one plan is selected, then Next is allowed.
2. Given more than one plan is selected, then the selection should remain single-select.
3. Given no plan is selected, when the user clicks Next, then the selection should be blocked.

Test Cases (5):

TC-US005-01
Type: Positive
Title: Select Gold plan and proceed
Preconditions:
- Price Option step is active.
Execution Steps:
1. Select Gold.
2. Click Next.
Expected Result:
- The system moves to Send Quote.
- The selected plan remains highlighted.

TC-US005-02
Type: Positive
Title: Ensure only one price option is selectable at a time
Preconditions:
- Price Option step is active.
Execution Steps:
1. Select Silver.
2. Select Gold.
Expected Result:
- The previous selection is cleared.
- Only one plan remains selected at a time.

TC-US005-03
Type: Negative
Title: No plan selected blocks progression
Preconditions:
- Price Option step is active.
Execution Steps:
1. Do not select any plan.
2. Click Next.
Expected Result:
- The user remains on Price Option.
- A validation message indicates that a plan must be selected.

TC-US005-04
Type: Positive
Title: Change selection between plans
Preconditions:
- Price Option step is active.
Execution Steps:
1. Select Platinum.
2. Change selection to Ultimate.
Expected Result:
- The final selection updates correctly.
- The prior selection is no longer active.

TC-US005-05
Type: Positive
Title: All plan options are visible
Preconditions:
- Price Option step is active.
Execution Steps:
1. Review the available plan options.
Expected Result:
- Silver, Gold, Platinum, and Ultimate are visible as available price options.

## US-006: Submit Quote
User Story:
As a prospective customer,
I want to send my quote request,
so that I can receive confirmation of submission.

Acceptance Criteria:
1. Given the Send Quote step is active, when valid credentials and comments are provided, then Send submits the form.
2. Given submission completes, when the system responds, then a final modal is displayed.
3. Given inconsistent credentials are provided, when the user clicks Send, then the form should block submission.

Test Cases (5):

TC-US006-01
Type: Positive
Title: Submit a quote with valid credentials
Preconditions:
- Send Quote step is active.
Execution Steps:
1. Enter E-Mail as test.user@example.com.
2. Enter Phone as 5551234567.
3. Enter Username as motorcycleuser.
4. Enter Password as Password123!.
5. Enter Confirm Password as Password123!.
6. Enter Comments as Please contact me with the quote details.
7. Click Send.
Expected Result:
- The form is submitted successfully.
- A final modal is displayed with submission status.

TC-US006-02
Type: Negative
Title: Reject password mismatch
Preconditions:
- Send Quote step is active.
Execution Steps:
1. Enter Password as Password123!.
2. Enter Confirm Password as Password321!.
3. Click Send.
Expected Result:
- The submission is blocked.
- A password mismatch validation message is shown.

TC-US006-03
Type: Negative
Title: Validate email format
Preconditions:
- Send Quote step is active.
Execution Steps:
1. Enter E-Mail as not-an-email.
2. Enter valid values for the remaining required fields.
3. Click Send.
Expected Result:
- The submission is blocked.
- An email-format validation error is shown.

TC-US006-04
Type: Negative
Title: Missing username blocks submission
Preconditions:
- Send Quote step is active.
Execution Steps:
1. Leave Username empty.
2. Fill the remaining required fields with valid values.
3. Click Send.
Expected Result:
- The submission is blocked.
- Username is flagged as required.

TC-US006-05
Type: Positive
Title: Comments field accepts free-text input
Preconditions:
- Send Quote step is active.
Execution Steps:
1. Enter a detailed comment in the Comments field.
2. Continue completing the other required fields.
3. Click Send.
Expected Result:
- The comment value is retained.
- The submission proceeds when all required validations are satisfied.

## 3. Motorcycle End-to-End Happy Flow Test Cases

## Current Test Case: Motorcycle Quote Happy Path (Honda with Gold Plan)

TC-US006-END-TO-END-01
Type: Positive
Title: Complete end-to-end Motorcycle quote journey with Honda and Gold plan
Preconditions:
- User is on landing page.
- Test data is available with vehicle, insurant, product, and contact information.
Execution Steps:
1. Open https://sampleapp.tricentis.com/101/ (landing page).
2. Locate and click Motorcycle offer card.
3. Verify Motorcycle wizard opens with Enter Vehicle Data step active.
4. Verify step counters are visible for all 5 steps.
5. Set Make to Honda.
6. Set Model to Motorcycle.
7. Enter Cylinder Capacity as per test data.
8. Enter Engine Performance as per test data.
9. Enter Date of Manufacture as per test data.
10. Set Number of Seats as per test data.
11. Enter List Price as per test data.
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
29. Enter E-Mail, Phone, Username, Password, and Confirm Password as per test data.
30. Click Send.
Expected Result:
- All steps complete without validation errors.
- Quote submission is accepted.
- Completion modal is displayed with status confirmation.

## Additional Test Case: Motorcycle Quote with Suzuki Vehicle and Silver Plan

TC-US006-END-TO-END-02
Type: Positive
Title: Complete end-to-end Motorcycle quote journey with Suzuki and Silver plan
Preconditions:
- User is on landing page.
- Test data is available with vehicle, insurant, product, and contact information.
Execution Steps:
1. Open https://sampleapp.tricentis.com/101/ (landing page).
2. Click Motorcycle offer card.
3. Verify Motorcycle wizard is loaded with Enter Vehicle Data step active.
4. Verify step counters are visible for all 5 steps.
5. Set Make to Suzuki.
6. Set Model to Motorcycle.
7. Enter Cylinder Capacity as 500.
8. Enter Engine Performance as 35.
9. Enter Date of Manufacture as 06/15/2021.
10. Set Number of Seats to 2.
11. Enter List Price as 8000.
12. Enter Annual Mileage as 5000.
13. Click Next.
14. Verify Enter Insurant Data step is active.
15. Enter First Name as Jane.
16. Enter Last Name as Smith.
17. Enter Date of Birth as 03/20/1988.
18. Select Gender as Male.
19. Enter Street Address as 456 Rider Lane.
20. Select Country as United States.
21. Enter Zip Code as 54321.
22. Enter City as Los Angeles.
23. Select Occupation as Employee.
24. Enter Website as https://motorcycle-enthusiast.com.
25. Click Next.
26. Verify Enter Product Data step is active.
27. Enter Start Date as 12/20/2026.
28. Select Insurance Sum as 10.000.000,00.
29. Select Merit Rating as Bonus 3.
30. Select Damage Insurance type as Full Coverage.
31. Set Courtesy Car as Yes.
32. Click Next.
33. Verify Select Price Option step is active.
34. Select Silver price plan.
35. Click Next.
36. Verify Send Quote step is active.
37. Enter E-Mail as per test data.
38. Enter Phone as per test data.
39. Enter Username as per test data.
40. Enter Password and Confirm Password as per test data.
41. Click Send.
Expected Result:
- All steps complete without validation errors.
- Quote submission is accepted.
- Completion modal is displayed with status confirmation.

## Additional Test Case: Motorcycle Quote with BMW Vehicle and Platinum Plan

TC-US006-END-TO-END-03
Type: Positive
Title: Complete end-to-end Motorcycle quote journey with BMW and Platinum plan
Preconditions:
- User is on landing page.
- Test data is available with vehicle, insurant, product, and contact information.
Execution Steps:
1. Open https://sampleapp.tricentis.com/101/ (landing page).
2. Click Motorcycle offer card.
3. Verify Motorcycle wizard is loaded with Enter Vehicle Data step active.
4. Verify step counters are visible for all 5 steps.
5. Set Make to BMW.
6. Set Model to Motorcycle.
7. Enter Cylinder Capacity as 600.
8. Enter Engine Performance as 45.
9. Enter Date of Manufacture as 08/10/2020.
10. Set Number of Seats to 3.
11. Enter List Price as 12000.
12. Enter Annual Mileage as 7500.
13. Click Next.
14. Verify Enter Insurant Data step is active.
15. Enter First Name as Liam.
16. Enter Last Name as Brooks.
17. Enter Date of Birth as 01/15/1990.
18. Select Gender as Male.
19. Enter Street Address as 42 Market Street.
20. Select Country as United States.
21. Enter Zip Code as 10001.
22. Enter City as New York.
23. Select Occupation as Employee.
24. Enter Website as https://example.com.
25. Click Next.
26. Verify Enter Product Data step is active.
27. Enter Start Date as 12/20/2026.
28. Select Insurance Sum as 5.000.000,00.
29. Select Merit Rating as Bonus 1.
30. Select Damage Insurance type as Partial Coverage.
31. Set Courtesy Car as No.
32. Click Next.
33. Verify Select Price Option step is active.
34. Select Platinum price plan.
35. Click Next.
36. Verify Send Quote step is active.
37. Enter E-Mail as per test data.
38. Enter Phone as per test data.
39. Enter Username as per test data.
40. Enter Password and Confirm Password as per test data.
41. Click Send.
Expected Result:
- All steps complete without validation errors.
- Quote submission is accepted.
- Completion modal is displayed with status confirmation.

