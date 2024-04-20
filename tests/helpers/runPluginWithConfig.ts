/* This file is based on @tailwindcss/typography, available under the MIT license.
 * https://github.com/tailwindlabs/tailwindcss-typography/blob/cacc7dc/src/index.test.js
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

import path from 'node:path'
import typographyPlugin from '@tailwindcss/typography'
import postcss from 'postcss'
import tailwind, { type Config } from 'tailwindcss'
import type { Base16Options } from '../../src/Base16Options.ts'
import { base16Tailwind } from '../../src/lib.ts'

type PostCSSResult = postcss.Result<postcss.Root>

export async function runPluginWithConfig (config: Config, options?: Base16Options): Promise<PostCSSResult> {
  const { currentTestName } = expect.getState()

  config = {
    ...config,

    ...{
      plugins: [
        typographyPlugin,
        base16Tailwind(options)
      ],

      corePlugins: {
        preflight: false
      }
    }
  }

  return await postcss(tailwind(config)).process(
    [
      '@tailwind base;',
      '@tailwind components;',
      '@tailwind utilities'
    ].join('\n'),

    {
      from: `${path.resolve(__filename)}?test=${currentTestName}`
    }
  )
}
