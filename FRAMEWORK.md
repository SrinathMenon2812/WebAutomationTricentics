# Playwright Automation Framework

## Overview

This project uses a Playwright-based test automation framework designed for maintainability, reusability, and scalability. The structure follows a Page Object Model (POM) approach with fixtures, utilities, and externalized test data.

## Framework Structure

- tests/: Contains end-to-end business flow tests.
- pages/: Contains page object classes for UI interactions and validations.
- fixtures/: Contains reusable test fixtures for setup, authentication, and environment handling.
- utils/: Contains helper utilities such as logging, screenshots, dates, and common functions.
- test-data/: Stores externalized test data in JSON, YAML, or CSV files.
- reports/: Stores generated Playwright HTML or Allure reports.
- screenshots/: Stores screenshots captured during execution, especially for failures.

## Design Principles

- Use TypeScript for all framework code.
- Prefer async/await for asynchronous operations.
- Keep tests focused on business flows rather than implementation details.
- Use page objects to encapsulate locators and actions.
- Reuse fixtures instead of repeating setup logic.
- Externalize configuration and test data.
- Capture screenshots and traces for failures.

## Test Standards

- Tests should follow Arrange, Act, and Assert structure.
- Use explicit and descriptive method names.
- Avoid hardcoding URLs and test values directly in test files.
- Keep page objects focused on one responsibility.

## Execution

Run tests with:

```bash
npx playwright test
```

View the report with:

```bash
npx playwright show-report
```

## Notes

This framework is intended to support future growth with reusable components, CI/CD compatibility, and structured automation practices.
