import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,

  collectCoverageFrom: [
    './src/**/*.ts'
  ],

  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },

  setupFilesAfterEnv: [
    './tests/matchers/toIncludeCss.ts'
  ]
}

export default config
