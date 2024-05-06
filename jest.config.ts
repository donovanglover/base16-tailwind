import type { Config } from 'jest'
import { join } from 'path'

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
  ],

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [1343]
        },
        astTransformers: {
          before: [
            {
              path: 'ts-jest-mock-import-meta',
              options: {
                metaObjectReplacement: {
                  dirname: join(__dirname, './src')
                }
              }
            }
          ]
        }
      }
    ]
  }
}

export default config
