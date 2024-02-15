import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/lib.ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '~build': '<rootDir>/src/build/lib.ts',
    '~lib': '<rootDir>/src/lib.ts'
  }
}

export default config
