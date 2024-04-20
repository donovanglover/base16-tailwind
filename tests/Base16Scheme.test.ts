import { Base16Scheme } from '../src/Base16Scheme.ts'
import { randomPalette } from './helpers/randomPalette.ts'

describe('Base16Scheme', () => {
  it('should error if null', () => {
    expect(() => {
      void new Base16Scheme(null)
    }).toThrow()
  })

  it('should error if not object', () => {
    expect(() => {
      void new Base16Scheme(727)
    }).toThrow()
  })

  it('should error if missing name', () => {
    expect(() => {
      void new Base16Scheme({
        system: 'base16',
        author: 'John Doe',
        variant: 'light',
        palette: randomPalette()
      })
    }).toThrow()
  })

  it('should error if missing variant', () => {
    expect(() => {
      void new Base16Scheme({
        system: 'base16',
        name: 'Cool Scheme',
        author: 'John Doe',
        palette: randomPalette()
      })
    }).toThrow()
  })

  it('should error if missing author', () => {
    expect(() => {
      void new Base16Scheme({
        system: 'base16',
        name: 'Cool Scheme',
        variant: 'light',
        palette: randomPalette()
      })
    }).toThrow()
  })

  it('should error if missing palette', () => {
    expect(() => {
      void new Base16Scheme({
        system: 'base16',
        name: 'Cool Scheme',
        author: 'John Doe',
        variant: 'light'
      })
    }).toThrow()
  })

  it('should error if missing system', () => {
    expect(() => {
      void new Base16Scheme({
        name: 'Cool Scheme',
        author: 'John Doe',
        variant: 'light',
        palette: randomPalette()
      })
    }).toThrow()
  })

  it('should error if invalid system', () => {
    expect(() => {
      void new Base16Scheme({
        system: 'base727',
        name: 'Cool Scheme',
        author: 'John Doe',
        variant: 'light',
        palette: randomPalette()
      })
    }).toThrow()
  })

  it('should pass if missing slug', () => {
    expect(new Base16Scheme({
      system: 'base16',
      name: 'Cool Scheme',
      author: 'John Doe',
      variant: 'light',
      palette: randomPalette()
    })).toBeDefined()
  })

  describe('slug', () => {
    it('should be in the form base16-$name if system is base16', () => {
      expect(new Base16Scheme({
        system: 'base16',
        name: 'Cool Scheme',
        author: 'John Doe',
        variant: 'light',
        palette: randomPalette()
      })).toHaveProperty('slug', 'base16-cool-scheme')
    })

    it('should be in the form base24-$name if system is base24', () => {
      expect(new Base16Scheme({
        system: 'base24',
        name: 'Cool Scheme',
        author: 'John Doe',
        variant: 'light',
        palette: randomPalette(24)
      })).toHaveProperty('slug', 'base24-cool-scheme')
    })

    it('should use the existing slug if one is specified', () => {
      expect(new Base16Scheme({
        system: 'base16',
        name: 'Cool Scheme',
        slug: 'oh',
        author: 'John Doe',
        variant: 'light',
        palette: randomPalette()
      })).toHaveProperty('slug', 'base16-oh')
    })
  })
})
