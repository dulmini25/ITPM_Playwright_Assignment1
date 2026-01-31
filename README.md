

\# IT 23480186

\# Playwright Assignment 1



\## Installation



1\. Clone the repository:

&nbsp;  ```bash

&nbsp;  git clone https://github.com/dulmini25/ITPM\_Playwright\_Assignment1.git

&nbsp;  ```

2\. Navigate to the project folder:

&nbsp;  ```bash

&nbsp;  cd ITPM\_Playwright\_Assignment1

&nbsp;  ```

3\. Install dependencies:

&nbsp;  ```bash

&nbsp;  npm install

&nbsp;  ```



\## Running Tests



\- To run all tests in headed mode on Chromium:

&nbsp; ```bash

&nbsp; npx playwright test --headed --project=chromium

&nbsp; ```

\- To run a specific test file in headed mode on Chromium:

&nbsp; ```bash

&nbsp; npx playwright test tests/translator.spec.ts --headed --project=chromium

&nbsp; ```



\## Project Structure



\- `tests/` - contains all Playwright test scripts

\- `playwright.config.ts` - Playwright configuration

\- `package.json` - project dependencies



