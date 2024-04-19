import { Base16Css } from '../src/Base16Css.ts'
import { Base16Palette } from '../src/Base16Palette.ts'
import { randomPalette } from './helpers/randomPalette.ts'

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

  describe('fromPalette', () => {
    const css = new Base16Css('base16')
    const palette = new Base16Palette(randomPalette())

    it('should return rgb colors by default', () => {
      expect(css.fromPalette(palette)).toHaveProperty('--color-800', palette.colors[0].rgb)
    })

    it('should return rgb colors if specified', () => {
      expect(css.fromPalette(palette, 'rgb')).toHaveProperty('--color-800', palette.colors[0].rgb)
    })

    it('should return rgba colors if specified', () => {
      expect(css.fromPalette(palette, 'rgba')).toHaveProperty('--color-800', palette.colors[0].rgba)
    })

    it('should return hsl colors if specified', () => {
      expect(css.fromPalette(palette, 'hsl')).toHaveProperty('--color-800', palette.colors[0].hsl)
    })

    it('should return hsla colors if specified', () => {
      expect(css.fromPalette(palette, 'hsla')).toHaveProperty('--color-800', palette.colors[0].hsla)
    })
  })
})
