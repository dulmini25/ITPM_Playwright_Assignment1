

# Playwright Assignment 1 - Swift Translator Test Automation

Website Under Test: https://www.swifttranslator.com/

---

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/dulmini25/ITPM_Playwright_Assignment1.git
   ```

2. Navigate into the project folder:

   ```bash
   cd ITPM_Playwright_Assignment1
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

---

## Running the Tests

### Run all tests in headed mode on Chromium:

```bash
npx playwright test --headed --project=chromium
```

### Run only the translator test file:

```bash
npx playwright test tests/translator.spec.ts --headed --project=chromium
```

---

## Project Structure

- `tests/translator.spec.ts` - Main test script containing positive, negative, and UI test cases  
- `playwright.config.ts` - Playwright configuration file  
- `package.json` - Project dependencies and scripts  
- `.github/workflows/` - GitHub Actions workflow (if included)

---


