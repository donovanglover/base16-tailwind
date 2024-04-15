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

  setupFilesAfterEnv: [
    './tests/_customMatchers.ts'
  ]
}

export default config
