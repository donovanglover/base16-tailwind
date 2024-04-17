import { Base16Config } from '../src/Base16Config.ts'

describe('Base16Config', () => {
  it('should set content files to search for tailwind classes', () => {
    expect(new Base16Config()).toHaveProperty('content')
  })

  it('should override the default tailwind colors', () => {
    expect(new Base16Config()).toHaveProperty('theme.colors')
  })

  describe('withFontOverride', () => {
    it('should set fontFamily.mono', () => {
      expect(new Base16Config({ withFontOverride: true })).toHaveProperty('theme.extend.fontFamily.mono', ['var(--font-mono)'])
    })

    it('should set fontFamily.sans', () => {
      expect(new Base16Config({ withFontOverride: true })).toHaveProperty('theme.extend.fontFamily.sans', ['var(--font-sans)'])
    })

    it('should set fontFamily.serif', () => {
      expect(new Base16Config({ withFontOverride: true })).toHaveProperty('theme.extend.fontFamily.serif', ['var(--font-serif)'])
    })

    it('should not set fontFamily when false', () => {
      expect(new Base16Config({ withFontOverride: false })).not.toHaveProperty('theme.extend.fontFamily')
    })
  })

  describe('withTypography', () => {
    it('should extend typography', () => {
      expect(new Base16Config({ withTypography: true })).toHaveProperty('theme.extend.typography')
    })

    it('should not extend typography when false', () => {
      expect(new Base16Config({ withTypography: false })).not.toHaveProperty('theme.extend.typography')
    })
  })
})
