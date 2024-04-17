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

  await runPluginWithConfig(config).then(result => {
    expect(result.css).toIncludeCss(css`
      .base16-monokai {
        --color-100: 249 248 245;
        --color-200: 245 244 241;
        --color-300: 248 248 242;
        --color-400: 165 159 133;
        --color-500: 117 113 94;
        --color-600: 73 72 62;
        --color-700: 56 56 48;
        --color-800: 39 40 34;
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
