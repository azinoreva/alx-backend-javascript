## ES6 Promises Project - README

### Overview
This project covers the fundamentals of ES6 Promises in JavaScript. You'll learn how to create and handle promises, manage asynchronous operations, and ensure code executes correctly using techniques like `async/await`, `try/catch`, and promise chaining. The project also includes several tasks that involve working with promises in practical scenarios, such as handling API responses and managing multiple promises simultaneously.

### Files and Their Functions

1. **0-promise.js**
   - Implements `getResponseFromAPI`, a prototype function that returns a simple Promise object.

2. **1-promise.js**
   - Contains the `getFullResponseFromAPI` function, which returns a promise that either resolves or rejects based on the input boolean parameter.

3. **2-then.js**
   - Defines `handleResponseFromAPI`, a function that appends handlers to a promise to handle both success and failure, logging a message each time the promise resolves.

4. **3-all.js**
   - Implements `handleProfileSignup`, which uses `uploadPhoto` and `createUser` to collectively resolve multiple promises and handle errors.

5. **4-user-promise.js**
   - Contains `signUpUser`, a simple function that returns a resolved promise with a user object.

6. **5-photo-reject.js**
   - Defines `uploadPhoto`, a function that returns a rejected promise with an error message if the file cannot be processed.

7. **6-final-user.js**
   - Implements `handleProfileSignup`, which combines the promises from `signUpUser` and `uploadPhoto` and returns their statuses and values as an array.

8. **7-load_balancer.js**
   - Contains `loadBalancer`, a function that returns the value from the first promise to resolve among the provided ones.

9. **8-try.js**
   - Implements `divideFunction`, which throws an error if the denominator is zero and returns the result of the division otherwise.

10. **9-try.js**
    - Defines `guardrail`, a function that safely executes another function and returns a queue of results, handling errors appropriately.

### Setup and Execution

1. **Install NodeJS 12.11.x:**
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

2. **Install Dependencies:**
   In your project directory, install Jest, Babel, and ESLint by running:
   ```bash
   npm install
   ```

3. **Run Tests:**
   Execute the test suite using:
   ```bash
   npm run test
   ```

This README provides a brief overview of the project and each file's purpose, along with setup instructions for getting started.
