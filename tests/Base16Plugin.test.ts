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

import typographyPlugin from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import { runPluginWithConfig } from './helpers/runPluginWithConfig.ts'

const html = String.raw
const css = String.raw

describe('Base16Plugin', () => {
  describe('base16', () => {
    it('should return 16 css variables for base16 schemes when included in html', async () => {
      const config: Config = {
        content: [
          {
            raw: html`<div class="base16-monokai">Hello World</div>`
          }
        ]
      }

      await runPluginWithConfig(config).then(result => {
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

    it('should return 16 css variables for base24 schemes when included in html', async () => {
      const config: Config = {
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
          }
        `)

        expect(result.css).not.toIncludeCss(css`
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

    it('should add base16 color utility classes to the CSS as needed', async () => {
      const config: Config = {
        content: [
          {
            raw: html`<div class="base16-marrakesh text-200">Hello World</div>`
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

    it('should not add base24 color utility classes to the CSS', async () => {
      const config: Config = {
        content: [
          {
            raw: html`<div class="base16-marrakesh bg-blue-bright">Hello World</div>`
          }
        ]
      }

      await runPluginWithConfig(config).then(result => {
        expect(result.css).not.toIncludeCss(css`
          .bg-blue-bright {
            --tw-text-opacity: 1;
            color: rgb(var(--color-blue-bright) / var(--tw-text-opacity));
          };
        `)
      })
    })
  })

  describe('base24', () => {
    it('should return 24 css variables for base24 schemes when included in html', async () => {
      const config: Config = {
        content: [
          {
            raw: html`<div class="base24-dracula">Hello World</div>`
          }
        ]
      }

      await runPluginWithConfig(config, { system: 'base24' }).then(result => {
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

    it('should return 24 css variables for base16 schemes when included in html for compatibility', async () => {
      const config: Config = {
        content: [
          {
            raw: html`<div class="base16-icy">Hello World</div>`
          }
        ]
      }

      await runPluginWithConfig(config, { system: 'base24' }).then(result => {
        expect(result.css).toIncludeCss(css`
          .base16-icy {
            --color-800: 2 16 18;
            --color-700: 3 22 25;
            --color-600: 4 31 35;
            --color-500: 5 46 52;
            --color-400: 6 64 72;
            --color-300: 9 91 103;
            --color-200: 12 124 140;
            --color-100: 16 156 176;
            --color-red: 22 193 217;
            --color-orange: 179 235 242;
            --color-yellow: 128 222 234;
            --color-green: 77 208 225;
            --color-cyan: 38 198 218;
            --color-blue: 0 188 212;
            --color-purple: 0 172 193;
            --color-pink: 0 151 167;
            --color-800-darker: 2 16 18;
            --color-800-darkest: 2 16 18;
            --color-red-bright: 22 193 217;
            --color-yellow-bright: 128 222 234;
            --color-green-bright: 77 208 225;
            --color-cyan-bright: 38 198 218;
            --color-blue-bright: 0 188 212;
            --color-purple-bright: 0 172 193;
          }
        `)
      })
    })

    it('should add base24 color utility classes to the CSS as needed', async () => {
      const config: Config = {
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
  })

  describe('withTypography', () => {
    it('should add prose classes to the html', async () => {
      const config: Config = {
        content: [
          {
            raw: html`<div class="base16-monokai"><article class="prose"><a href="/">Hello World</a></article></div>`
          }
        ],

        plugins: [
          typographyPlugin
        ]
      }

      await runPluginWithConfig(config, { withTypography: true }).then(result => {
        expect(result.css).toIncludeCss(css`
          .prose {
            --tw-prose-links: rgba();
          }
        `)
      })
    })
  })
})
