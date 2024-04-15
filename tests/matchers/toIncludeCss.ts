import { diff } from 'jest-diff'
import { formatCss } from '../helpers/formatCss'

export type JestMessage = () => string

expect.extend({
  toIncludeCss (received: string, argument: string) {
    const options = {
      comment: 'stripped(received).includes(stripped(argument))',
      isNot: this.isNot,
      promise: this.promise
    }

    const actual = formatCss(received)
    const expected = formatCss(argument)

    const pass = actual.includes(expected)

    const message: JestMessage = pass
      ? () => {
          return (
            this.utils.matcherHint('toIncludeCss', undefined, undefined, options) +
            '\n\n' +
            `Expected: not ${this.utils.printExpected(actual)}\n` +
            `Received: ${this.utils.printReceived(expected)}`
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
