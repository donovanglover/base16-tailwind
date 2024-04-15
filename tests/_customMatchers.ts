import prettier from '@prettier/sync'
import { diff } from 'jest-diff'

export type JestMessage = () => string

function format (input: string): string {
  return prettier.format(input, {
    parser: 'css',
    printWidth: 100
  })
}

expect.extend({
  toIncludeCss (received: string, argument: string) {
    const options = {
      comment: 'stripped(received).includes(stripped(argument))',
      isNot: this.isNot,
      promise: this.promise
    }

    const actual = format(received)
    const expected = format(argument)

    const pass = actual.includes(expected)

    const message: JestMessage = pass
      ? () => {
          return (
            this.utils.matcherHint('toIncludeCss', undefined, undefined, options) +
            '\n\n' +
            `Expected: not ${this.utils.printExpected(format(received))}\n` +
            `Received: ${this.utils.printReceived(format(argument))}`
          )
        }
      : () => {
          const diffString = diff(expected, actual, {
            expand: this.expand
          })

          if (diffString !== null) {
            return (
              this.utils.matcherHint('toIncludeCss', undefined, undefined, options) +
              '\n\n' +
              (diffString?.includes('- Expect')
                ? `Difference:\n\n${diffString}`
                : `Expected: ${this.utils.printExpected(expected)}\n` +
                  `Received: ${this.utils.printReceived(actual)}`)
            )
          } else {
            return (
              this.utils.matcherHint('toIncludeCss', undefined, undefined, options)
            )
          }
        }

    return { actual: received, message, pass }
  }
})
