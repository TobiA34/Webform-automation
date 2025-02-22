# Playwright Login Tests

## Overview
This repository contains Playwright test cases to validate the login functionality of the **SauceDemo** application. The tests cover valid and invalid login scenarios to ensure proper authentication handling.

## Prerequisites
Before running the tests, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)

## Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## Running the Tests
To execute the test suite, use the following command:
```sh
npx playwright test
```

### Running Specific Tests
You can run individual test cases by specifying the test file or using `.only` in the test case:
```sh
npx playwright test <test-file-name>
```

## Test Scenarios
### ✅ **Valid Test Cases**
1. **Login with valid credentials**
2. **Login using the 'Enter' key**
3. **Login with a different valid user after logout**

### ❌ **Invalid Test Cases**
1. **Leave the username field empty**
2. **Leave the password field empty**
3. **Login with an incorrect password**
4. **Login with an incorrect username**
5. **Attempt login with a locked-out user**
6. **Check case sensitivity of username and password fields**
7. **Login with spaces in the password**
8. **Login with Unicode or emoji characters in the username**

## Best Practices Used
- **Assertions with `expect`** for verifying login success.
- **Use of `waitForSelector`** instead of time-based waits (`waitForTimeout`).
- **Separation of valid and invalid test cases**.
- **Logging and debugging using `console.log()` and `page.pause()` (for debugging purposes).**

## Contributing
Feel free to submit issues and pull requests for improvements.

## License
This project is licensed under the MIT License.

