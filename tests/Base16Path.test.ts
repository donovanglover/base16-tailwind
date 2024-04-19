import { Base16Path } from '../src/Base16Path.ts'

describe('Base16Path', () => {
  describe('DEFAULT_PATH', () => {
    it('should use default path if undefined', () => {
      expect(new Base16Path()).toBeDefined()
    })

    it('should use default path if null', () => {
      expect(new Base16Path(null)).toBeDefined()
    })
  })

  it('should pass if path exists', () => {
    expect(new Base16Path('./tests/data/valid')).toBeDefined()
  })

  it('should error if path does not exist', () => {
    expect(() => {
      void new Base16Path('./does/not/exist')
    }).toThrow()
  })

  it('should error if yaml slug differs from file name', () => {
    expect(() => {
      void new Base16Path('./tests/data/invalid')
    }).toThrow()
  })

  it('should error if duplicate slug in path', () => {
    expect(() => {
      void new Base16Path('./tests/data/duplicate')
    }).toThrow()
  })
})
