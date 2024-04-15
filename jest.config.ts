import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.ts'
  ],
  coveragePathIgnorePatterns: [
    './src/types/Base16ColorName.ts'
  ],
  setupFilesAfterEnv: [
    './tests/_customMatchers.ts'
  ]
}

export default config
