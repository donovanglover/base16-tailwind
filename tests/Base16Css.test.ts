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

  describe('prefix', () => {
    it('should pass if alphanumeric prefix', () => {
      expect(() => {
        void new Base16Css('base16', { prefix: 'base16' })
      }).not.toThrow()
    })

    it('should pass if slug prefix', () => {
      expect(() => {
        void new Base16Css('base16', { prefix: 'cool-prefix' })
      }).not.toThrow()
    })
    it('should error if prefix is too short', () => {
      expect(() => {
        void new Base16Css('base16', { prefix: '' })
      }).toThrow()
    })

    it('should error if prefix is too long', () => {
      expect(() => {
        void new Base16Css('base16', { prefix: 'thisprefixistoolong' })
      }).toThrow()
    })

    it('should error if non-alphanumeric prefix', () => {
      expect(() => {
        void new Base16Css('base16', { prefix: 'best-prefix?' })
      }).toThrow()
    })

    it('should add prefix if valid one is specified', () => {
      expect(new Base16Css('base16', {
        prefix: 'tinted'
      }).variables).toStrictEqual([
        'tinted-800', 'tinted-700',
        'tinted-600', 'tinted-500',
        'tinted-400', 'tinted-300',
        'tinted-200', 'tinted-100',
        'tinted-red', 'tinted-orange',
        'tinted-yellow', 'tinted-green',
        'tinted-cyan', 'tinted-blue',
        'tinted-purple', 'tinted-pink'
      ])
    })
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
