import { Base16Css } from '../src/Base16Css.ts'

describe('Base16Css', () => {
  it('should pass if value is a valid system', () => {
    expect(new Base16Css('base16')).toBeDefined()
  })

  it('should error if value is not a string', () => {
    expect(() => {
      void new Base16Css(727)
    }).toThrow()
  })

  it('should error if value is an invalid system', () => {
    expect(() => {
      void new Base16Css('base64')
    }).toThrow()
  })
})
