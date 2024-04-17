import { Base16Color } from '../src/Base16Color'

describe('Base16Color', () => {
  it('should error if value is not a string', () => {
    expect(() => {
      void new Base16Color(4923)
    }).toThrow()
  })

  it('should error if value is an invalid hexadecimal string', () => {
    expect(() => {
      void new Base16Color('AJ3C9X')
    }).toThrow()
  })

  it('should error if value is a too long hexadecimal string', () => {
    expect(() => {
      void new Base16Color('ACA2ABA1')
    }).toThrow()
  })

  it('should error if value is a too short hexadecimal string', () => {
    expect(() => {
      void new Base16Color('A3B')
    }).toThrow()
  })

  describe('rgb', () => {
    it('should convert "1AD1E5" to "26 209 229"', () => {
      expect(new Base16Color('1AD1E5').rgb).toBe('26 209 229')
    })
  })

  describe('rgba', () => {
    it('should convert "1AD1E5" to "26, 209, 229"', () => {
      expect(new Base16Color('1AD1E5').rgba).toBe('26, 209, 229')
    })
  })

  describe('hsl', () => {
    it('should convert "1AD1E5" to "186 80% 50%"', () => {
      expect(new Base16Color('1AD1E5').hsl).toBe('186 80% 50%')
    })
  })

  describe('hsla', () => {
    it('should convert "1AD1E5" to "186, 80%, 50%"', () => {
      expect(new Base16Color('1AD1E5').hsla).toBe('186, 80%, 50%')
    })
  })
})
