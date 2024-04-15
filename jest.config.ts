import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,

  collectCoverageFrom: [
    './src/**/*.ts'
  ],

  coveragePathIgnorePatterns: [
    './src/types'
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
    './tests/_customMatchers.ts'
  ]
}

export default config
