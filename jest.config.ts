import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '~build': '<rootDir>/src/build/lib.ts',
    '~lib': '<rootDir>/src/lib.ts'
  }
}

export default config
