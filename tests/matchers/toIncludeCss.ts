/* This file is based on @tailwindcss/typography, available under the MIT license.
 * https://github.com/tailwindlabs/tailwindcss-typography/blob/cacc7dc/jest/customMatchers.js
 *
 * Copyright (C) 2021-2024 Tailwind Labs, Inc.
 * Copyright (C) 2024 Donovan Glover <https://donovan.is/>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { diff } from 'jest-diff'
import { formatCss } from '../helpers/formatCss.ts'

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
