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
    const config: Config = {
      content: [
        {
          raw: html`<div class="base16-monokai"><article class="prose"><a href="/">Hello World</a></article></div>`
        }
      ]
    }

    it('should add prose variables to the html', async () => {
      await runPluginWithConfig(config, { withTypography: true }).then(result => {
        expect(result.css).toMatch('--tw-prose-links: rgb(var(--color-blue));')
      })
    })

    it('should not add prose variables when false', async () => {
      await runPluginWithConfig(config).then(result => {
        expect(result.css).not.toMatch('--tw-prose-links: rgb(var(--color-blue));')
      })
    })
  })

  describe('extendOnly', () => {
    const config: Config = {
      content: [
        {
          raw: html`<div class="base16-monokai"><p className="text-lime-500">Hello World</p></div>`
        }
      ]
    }

    it('should not override default colors', async () => {
      await runPluginWithConfig(config, { extendOnly: true }).then(result => {
        expect(result.css).toIncludeCss(css`
          .text-lime-500 {
            --tw-text-opacity: 1;
            color: rgb(132 204 22 / var(--tw-text-opacity));
          };
        `)
      })
    })

    it('should override default colors when false', async () => {
      await runPluginWithConfig(config).then(result => {
        expect(result.css).not.toIncludeCss(css`
          .text-lime-500 {
            --tw-text-opacity: 1;
            color: rgb(132 204 22 / var(--tw-text-opacity));
          };
        `)
      })
    })
  })

  describe('customPath', () => {
    it('should work with custom scheme directories', async () => {
      const config: Config = {
        content: [
          {
            raw: html`<div class="base16-blue text-green">Hello World</div>`
          }
        ]
      }

      await runPluginWithConfig(config, { customPath: './tests/data/valid' }).then(result => {
        expect(result.css).toIncludeCss(css`
          .base16-blue {
            --color-800: 0 0 0;
            --color-700: 17 17 17;
            --color-600: 34 34 34;
            --color-500: 51 51 51;
            --color-400: 68 68 68;
            --color-300: 85 85 85;
            --color-200: 102 102 102;
            --color-100: 119 119 119;
            --color-red: 136 136 136;
            --color-orange: 153 153 153;
            --color-yellow: 170 170 170;
            --color-green: 187 187 187;
            --color-cyan: 204 204 204;
            --color-blue: 221 221 221;
            --color-purple: 238 238 238;
            --color-pink: 255 255 255;
          }
        `)

        expect(result.css).toIncludeCss(css`
          .text-green {
            --tw-text-opacity: 1;
            color: rgb(var(--color-green) / var(--tw-text-opacity));
          };
        `)
      })
    })

    it('should work with yml', async () => {
      const config: Config = {
        content: [
          {
            raw: html`<div class="base16-cool">Hello World</div>`
          }
        ]
      }

      await runPluginWithConfig(config, { customPath: './tests/data/mix' }).then(result => {
        expect(result.css).toIncludeCss(css`
          .base16-cool {
            --color-800: 0 0 0;
            --color-700: 17 17 17;
            --color-600: 34 34 34;
            --color-500: 51 51 51;
            --color-400: 68 68 68;
            --color-300: 85 85 85;
            --color-200: 102 102 102;
            --color-100: 119 119 119;
            --color-red: 136 136 136;
            --color-orange: 153 153 153;
            --color-yellow: 170 170 170;
            --color-green: 187 187 187;
            --color-cyan: 204 204 204;
            --color-blue: 221 221 221;
            --color-purple: 238 238 238;
            --color-pink: 255 255 255;
          }
        `)
      })
    })

    it('should work with json', async () => {
      const config: Config = {
        content: [
          {
            raw: html`<div class="base16-fun">Hello World</div>`
          }
        ]
      }

      await runPluginWithConfig(config, { customPath: './tests/data/mix' }).then(result => {
        expect(result.css).toIncludeCss(css`
          .base16-fun {
            --color-800: 255 255 255;
            --color-700: 17 17 17;
            --color-600: 34 34 34;
            --color-500: 51 51 51;
            --color-400: 68 68 68;
            --color-300: 85 85 85;
            --color-200: 102 102 102;
            --color-100: 119 119 119;
            --color-red: 136 136 136;
            --color-orange: 153 153 153;
            --color-yellow: 170 170 170;
            --color-green: 187 187 187;
            --color-cyan: 204 204 204;
            --color-blue: 221 221 221;
            --color-purple: 238 238 238;
            --color-pink: 0 0 0;
          }
        `)
      })
    })
  })

  describe('colorSpace', () => {
    const config: Config = {
      content: [
        {
          raw: html`<div class="base16-circus text-blue">Hello World</div>`
        }
      ]
    }

    it('should output rgb by default', async () => {
      await runPluginWithConfig(config).then(result => {
        expect(result.css).toIncludeCss(css`
          .text-blue {
            --tw-text-opacity: 1;
            color: rgb(var(--color-blue) / var(--tw-text-opacity));
          };
        `)
      })
    })

    it('should output rgba when specified', async () => {
      await runPluginWithConfig(config, { colorSpace: 'rgba' }).then(result => {
        expect(result.css).toIncludeCss(css`
          .text-blue {
            --tw-text-opacity: 1;
            color: rgba(var(--color-blue) / var(--tw-text-opacity));
          };
        `)
      })
    })

    it('should output hsl when specified', async () => {
      await runPluginWithConfig(config, { colorSpace: 'hsl' }).then(result => {
        expect(result.css).toIncludeCss(css`
          .text-blue {
            --tw-text-opacity: 1;
            color: hsl(var(--color-blue) / var(--tw-text-opacity));
          };
        `)
      })
    })

    it('should output hsla when specified', async () => {
      await runPluginWithConfig(config, { colorSpace: 'hsla' }).then(result => {
        expect(result.css).toIncludeCss(css`
          .text-blue {
            --tw-text-opacity: 1;
            color: hsla(var(--color-blue) / var(--tw-text-opacity));
          };
        `)
      })
    })
  })

  describe('invert', () => {
    const config: Config = {
      content: [
        {
          raw: html`<div class="base24-github">Hello World</div>`
        }
      ]
    }

    it('should return light to dark for light color schemes', async () => {
      await runPluginWithConfig(config, { invert: true, system: 'base24' }).then(result => {
        expect(result.css).toIncludeCss(css`
          .base24-github {
            --color-100: 244 244 244;
            --color-200: 62 62 62;
            --color-300: 102 102 102;
            --color-400: 140 140 140;
            --color-500: 178 178 178;
            --color-600: 216 216 216;
            --color-700: 255 255 255;
            --color-800: 255 255 255;
            --color-red: 151 11 22;
            --color-orange: 248 238 199;
            --color-yellow: 46 108 186;
            --color-green: 7 150 42;
            --color-cyan: 137 209 236;
            --color-blue: 0 62 138;
            --color-purple: 233 70 145;
            --color-pink: 75 5 11;
            --color-100-lighter: 68 68 68;
            --color-100-lightest: 34 34 34;
            --color-red-bright: 222 0 0;
            --color-yellow-bright: 241 208 7;
            --color-green-bright: 135 213 162;
            --color-cyan-bright: 28 250 254;
            --color-blue-bright: 46 108 186;
            --color-purple-bright: 255 162 159;
          }
        `)
      })
    })

    it('should not return dark to light for light color schemes', async () => {
      await runPluginWithConfig(config, { invert: true, system: 'base24' }).then(result => {
        expect(result.css).not.toIncludeCss(css`
          .base24-github {
            --color-800: 244 244 244;
            --color-700: 62 62 62;
            --color-600: 102 102 102;
            --color-500: 140 140 140;
            --color-400: 178 178 178;
            --color-300: 216 216 216;
            --color-200: 255 255 255;
            --color-100: 255 255 255;
            --color-red: 151 11 22;
            --color-orange: 248 238 199;
            --color-yellow: 46 108 186;
            --color-green: 7 150 42;
            --color-cyan: 137 209 236;
            --color-blue: 0 62 138;
            --color-purple: 233 70 145;
            --color-pink: 75 5 11;
            --color-800-darker: 68 68 68;
            --color-800-darkest: 34 34 34;
            --color-red-bright: 222 0 0;
            --color-yellow-bright: 241 208 7;
            --color-green-bright: 135 213 162;
            --color-cyan-bright: 28 250 254;
            --color-blue-bright: 46 108 186;
            --color-purple-bright: 255 162 159;
          }
        `)
      })
    })
  })
})
