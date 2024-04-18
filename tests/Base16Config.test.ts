import { Base16Config } from '../src/Base16Config.ts'

describe('Base16Config', () => {
  it('should override the default tailwind colors', () => {
    expect(new Base16Config()).toHaveProperty('theme.colors')
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
