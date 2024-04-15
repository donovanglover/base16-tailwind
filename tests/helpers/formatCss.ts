import prettier from '@prettier/sync'

export function formatCss (input: string): string {
  return prettier.format(input, {
    parser: 'css',
    printWidth: 100
  })
}
