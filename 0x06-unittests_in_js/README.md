Project Overview
This repository contains a series of JavaScript tasks designed to help you understand unit testing and integration testing using Mocha, Chai, and Sinon. The tasks progress from basic function creation and testing to more advanced topics like spies, stubs, and asynchronous tests.

Directory Structure
0x06-unittests_in_js/
package.json: Defines project metadata and dependencies. It includes scripts for running tests using Mocha.
0-calcul.js: Contains the calculateNumber function, which rounds two numbers and returns their sum.
0-calcul.test.js: Test cases for the calculateNumber function using Node's assert library.
1-calcul.js: Enhances the previous function to perform addition, subtraction, or division based on a specified type.
1-calcul.test.js: Test cases for the enhanced calculateNumber function, using the assert library.
2-calcul_chai.js: Copies and rewrites 1-calcul.js using Chai's expect assertion style.
2-calcul_chai.test.js: Test cases for 2-calcul_chai.js using the Chai assertion library.
utils.js: Contains a module with the calculateNumber function for use in other files.
3-payment.js: Implements a function that sums total amounts and total shipping using the calculateNumber function from utils.js.
3-payment.test.js: Tests for the sendPaymentRequestToApi function using Sinon spies.
4-payment.js: Copies 3-payment.js but implements stubs to prevent calling the actual calculateNumber function during tests.
4-payment.test.js: Tests for the stubbed sendPaymentRequestToApi function.
5-payment.js: Similar to 4-payment.js but adds hooks for setting up and tearing down tests.
5-payment.test.js: Tests for the sendPaymentRequestToApi function using hooks.
6-payment_token.js: Contains an asynchronous function to simulate an API call.
6-payment_token.test.js: Tests for the asynchronous getPaymentTokenFromAPI function.
7-skip.test.js: Demonstrates how to skip tests without removing or commenting them out.
8-api/: Contains files for an Express API including the server setup and tests for the API endpoints.
api.js: Implements the Express server with a basic endpoint.
api.test.js: Tests for the API endpoints, ensuring correct responses and status codes.
9-api/: Extends the previous API implementation with additional endpoints.
api.js: Adds a new /cart/:id endpoint that responds with payment methods for a given cart ID.
api.test.js: Tests for the new /cart/:id endpoint, ensuring correct responses for valid and invalid IDs.
How to Use
Clone the Repository:

bash
Copy code
git clone <repository-url>
cd 0x06-unittests_in_js
Install Dependencies: Run the following command to install the necessary dependencies:

bash
Copy code
npm install
Run Tests: Use the following command to execute the test suites:

bash
Copy code
npm test <test-file.js>
For example, to run tests for the calculateNumber function, use:

bash
Copy code
npm test 0-calcul.test.js
Check API Functionality: To test the API endpoints, first start the server:

bash
Copy code
node 8-api/api.js
Then, you can make requests using tools like curl or Postman to verify the API responses.
