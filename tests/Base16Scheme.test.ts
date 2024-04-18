import { Base16Scheme } from '../src/Base16Scheme.ts'
import { randomScheme } from './helpers/randomScheme.ts'

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
        palette: randomScheme()
      })
    }).toThrow()
  })

  it('should error if missing variant', () => {
    expect(() => {
      void new Base16Scheme({
        system: 'base16',
        name: 'Cool Scheme',
        author: 'John Doe',
        palette: randomScheme()
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

  it('should pass if missing system', () => {
    expect(new Base16Scheme({
      name: 'Cool Scheme',
      author: 'John Doe',
      variant: 'light',
      palette: randomScheme()
    })).toBeDefined()
  })

  it('should pass if missing slug', () => {
    expect(new Base16Scheme({
      system: 'base16',
      name: 'Cool Scheme',
      author: 'John Doe',
      variant: 'light',
      palette: randomScheme()
    })).toBeDefined()
  })

  describe('name', () => {
    it('should be in the form base16-$name', () => {
      expect(new Base16Scheme({
        system: 'base16',
        name: 'Cool Scheme',
        author: 'John Doe',
        variant: 'light',
        palette: randomScheme()
      })).toHaveProperty('name', 'base16-cool-scheme')
    })

    it('should use the existing slug if one is specified', () => {
      expect(new Base16Scheme({
        system: 'base16',
        name: 'Cool Scheme',
        slug: 'oh',
        author: 'John Doe',
        variant: 'light',
        palette: randomScheme()
      })).toHaveProperty('name', 'base16-oh')
    })
  })
})
