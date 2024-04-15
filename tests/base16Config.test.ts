import { runPluginWithConfig } from './helpers/runPluginWithConfig'
import { base16Config } from '../src'

const html = String.raw
const css = String.raw

test('Returns color classes with CSS variables', async () => {
  const config = {
    content: [
      {
        raw: html`<div class="base16-marrakesh text-200 bg-600">Hello World</div>`
      }
    ]
  }

  const withBase16Config = {
    ...base16Config,
    ...config
  }

  await runPluginWithConfig(withBase16Config).then(result => {
    expect(result.css).toIncludeCss(css`
      .text-200 {
        --tw-text-opacity: 1;
        color: rgb(var(--color-200) / var(--tw-text-opacity));
      };
    `)
  })
})
