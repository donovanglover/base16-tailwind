import { Base16Config } from '../src/Base16Config.ts'

describe('Base16Config', () => {
  it('should override the default tailwind colors', () => {
    expect(new Base16Config()).toHaveProperty('theme.colors')
  })

  it('should add transparent as a color option', () => {
    expect(new Base16Config()).toHaveProperty('theme.colors.transparent')
  })

  it('should add current as a color option', () => {
    expect(new Base16Config()).toHaveProperty('theme.colors.current')
  })

  describe('withTypography', () => {
    it('should extend typography', () => {
      expect(new Base16Config({ withTypography: true })).toHaveProperty('theme.extend.typography')
    })

    it('should not extend typography when false', () => {
      expect(new Base16Config({ withTypography: false })).not.toHaveProperty('theme.extend.typography')
    })

    it('should be false by default', () => {
      expect(new Base16Config()).not.toHaveProperty('theme.extend.typography')
    })
  })

  describe('extendOnly', () => {
    it('should extend existing colors', () => {
      expect(new Base16Config({ extendOnly: true })).toHaveProperty('theme.extend.colors')
    })

    it('should not override existing colors', () => {
      expect(new Base16Config({ extendOnly: true })).not.toHaveProperty('theme.colors')
    })

    it('should not extend the transparent color', () => {
      expect(new Base16Config({ extendOnly: true })).not.toHaveProperty('theme.extend.colors.transparent')
    })

    it('should not extend the current color', () => {
      expect(new Base16Config({ extendOnly: true })).not.toHaveProperty('theme.extend.colors.current')
    })

    it('should not extend colors when false', () => {
      expect(new Base16Config({ extendOnly: false })).not.toHaveProperty('theme.extend.colors')
    })

    it('should be false by default', () => {
      expect(new Base16Config()).not.toHaveProperty('theme.extend.colors')
    })
  })
})
