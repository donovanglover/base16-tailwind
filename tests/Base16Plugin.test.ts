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

import { runPluginWithConfig } from './helpers/runPluginWithConfig.ts'

const html = String.raw
const css = String.raw

test('Returns base16 class when included in html', async () => {
  const config = {
    content: [
      {
        raw: html`<div class="base16-monokai">Hello World</div>`
      }
    ]
  }

  await runPluginWithConfig(config, { withTypography: true }).then(result => {
    expect(result.css).toIncludeCss(css`
      .base16-monokai {
        --color-800: 39 40 34;
        --color-700: 56 56 48;
        --color-600: 73 72 62;
        --color-500: 117 113 94;
        --color-400: 165 159 133;
        --color-300: 248 248 242;
        --color-200: 245 244 241;
        --color-100: 249 248 245;
        --color-red: 249 38 114;
        --color-orange: 253 151 31;
        --color-yellow: 244 191 117;
        --color-green: 166 226 46;
        --color-cyan: 161 239 228;
        --color-blue: 102 217 239;
        --color-purple: 174 129 255;
        --color-pink: 204 102 51
      }
    `)
  })
})

test('Returns base24 class when included in html', async () => {
  const config = {
    content: [
      {
        raw: html`<div class="base24-dracula">Hello World</div>`
      }
    ]
  }

  await runPluginWithConfig(config).then(result => {
    expect(result.css).toIncludeCss(css`
      .base24-dracula {
        --color-800: 33 34 44;
        --color-700: 40 42 54;
        --color-600: 58 60 78;
        --color-500: 77 79 104;
        --color-400: 98 100 131;
        --color-300: 233 233 244;
        --color-200: 248 248 242;
        --color-100: 255 255 255;
        --color-red: 255 85 85;
        --color-orange: 241 250 140;
        --color-yellow: 235 255 135;
        --color-green: 80 250 123;
        --color-cyan: 139 233 253;
        --color-blue: 189 147 249;
        --color-purple: 255 121 198;
        --color-pink: 0 247 105;
        --color-800-darker: 29 29 38;
        --color-800-darkest: 27 27 35;
        --color-red-bright: 255 110 110;
        --color-yellow-bright: 255 255 165;
        --color-green-bright: 105 255 148;
        --color-cyan-bright: 164 255 255;
        --color-blue-bright: 214 172 255;
        --color-purple-bright: 255 146 223;
      }
    `)
  })
})

test('Returns color classes with CSS variables', async () => {
  const config = {
    content: [
      {
        raw: html`<div class="base16-marrakesh text-200 bg-600">Hello World</div>`
      }
    ]
  }

  await runPluginWithConfig(config).then(result => {
    expect(result.css).toIncludeCss(css`
      .text-200 {
        --tw-text-opacity: 1;
        color: rgb(var(--color-200) / var(--tw-text-opacity));
      };
    `)
  })
})

test('Returns color classes for base24 -bright variants when system is base24', async () => {
  const config = {
    content: [
      {
        raw: html`<div class="base24-sparky text-blue-bright">Hello World</div>`
      }
    ]
  }

  await runPluginWithConfig(config, { system: 'base24' }).then(result => {
    expect(result.css).toIncludeCss(css`
      .text-blue-bright {
        --tw-text-opacity: 1;
        color: rgb(var(--color-blue-bright) / var(--tw-text-opacity));
      };
    `)
  })
})
