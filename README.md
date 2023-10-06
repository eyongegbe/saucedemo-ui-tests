# UI Automated Test Framework - Playwright JS

Welcome to the UI Automated Test Framework using Playwright JS. This repository contains automated tests for your web applications using Playwright.

## Getting Started

To run these tests locally, follow the steps below:

### Prerequisites

1. **Node.js**: You need to have Node.js installed on your system. If you don't have it, you can download and install it from [nodejs.org](https://nodejs.org/en).

### Installation

2. Clone this repository to your local machine:

   ```shell
   git clone <https://github.com/eyongegbe/saucedemo-ui-tests.git>
   ```

3. Navigate to the project directory:

   ```shell
   cd <https://github.com/eyongegbe/saucedemo-ui-tests.git>
   ```

4. Install project dependencies by running the following command:

   ```shell
   npm install
   ```

### Running Tests

5. Run the tests using Playwright:

   ```shell
   npx playwright test
   ```

This command will execute the tests, and you will see the test results in your terminal.

### Generating Reports

If you want to generate reports for your test results, follow these additional steps:

6. Run the tests and generate reports using the following command:

   ```shell
   npx playwright test && npx playwright show-report
   ```

This command will not only run the tests but also generate HTML reports that you can view in your browser. The reports provide detailed information about test execution, including screenshots and logs.

That's it! You now have the Playwright JS UI Automated Test Framework up and running locally. Happy testing!