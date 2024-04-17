import { Base16Palette } from '../src/Base16Palette.ts'
import { randomScheme } from './helpers/randomScheme.ts'

describe('Base16Palette', () => {
  it('should pass for base00-base0F', () => {
    expect(new Base16Palette(randomScheme())).toBeDefined()
  })

  it('should error if missing base values', () => {
    expect(() => {
      void new Base16Palette({ base07: 'DECADE' })
    }).toThrow()
  })

  it('should error if too many base values', () => {
    expect(() => {
      void new Base16Palette({ ...randomScheme(), ...{ base0G: 'DE1E7E' } })
    }).toThrow()
  })

  it('should error if valid keys but invalid color value', () => {
    expect(() => {
      void new Base16Palette({ ...randomScheme(), ...{ base0F: 'LEL' } })
    }).toThrow()
  })

  describe('isValid', () => {
    it('should return true for base00-base0F', () => {
      expect(Base16Palette.isValid(randomScheme())).toBe(true)
    })

    it('should return false if missing base values', () => {
      expect(Base16Palette.isValid({ base07: 'DECADE' })).toBe(false)
    })

    it('should return false if too many base values', () => {
      expect(Base16Palette.isValid({ ...randomScheme(), ...{ base0G: 'DE1E7E' } })).toBe(false)
    })

    it('should return false if valid keys but invalid color value', () => {
      expect(Base16Palette.isValid({ ...randomScheme(), ...{ base0F: 'LEL' } })).toBe(false)
    })
  })
})
