// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { worker } from 'node:cluster';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 30*1000,
  workers: 3,
  //retries: 2,
  expect: {
    timeout: 5*1000
  },
  reporter: 'html',
  projects: [
    {
      name: 'chrome',
      use: {
        actionTimeout: 10*1000,
        navigationTimeout: 10*1000,
        browserName: 'chromium',
        headless: !!process.env.CI,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
      },
    },
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: true,
        actionTimeout: 10*1000,
        navigationTimeout: 10*1000,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'

      }
    }
    
  ]
  




});

module.exports = config
