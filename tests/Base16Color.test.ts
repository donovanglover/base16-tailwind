import { Base16Color } from '../src/Base16Color.ts'

describe('Base16Color', () => {
  it('should pass if value is a valid hexadecimal string', () => {
    expect(new Base16Color('1AD1E5')).toBeDefined()
  })

  it('should pass if value is a valid hexadecimal string with #', () => {
    expect(new Base16Color('#1AD1E5')).toBeDefined()
  })

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

  describe('isValid', () => {
    it('should return true if value is a valid hexadecimal string', () => {
      expect(Base16Color.isValid('1AD1E5')).toBe(true)
    })

    it('should return true if value is a valid hexadecimal string with #', () => {
      expect(Base16Color.isValid('#1AD1E5')).toBe(true)
    })

    it('should return false if value is not a string', () => {
      expect(Base16Color.isValid(727)).toBe(false)
    })

    it('should return false if value is an invalid hexadecimal string', () => {
      expect(Base16Color.isValid('AJ3C9X')).toBe(false)
    })

    it('should return false if value is a too long hexadecimal string', () => {
      expect(Base16Color.isValid('ACA2ABA1')).toBe(false)
    })

    it('should return false if value is a too short hexadecimal string', () => {
      expect(Base16Color.isValid('A3B')).toBe(false)
    })
  })

  describe('rgb', () => {
    it('should convert "1AD1E5" to "26 209 229"', () => {
      expect(new Base16Color('1AD1E5').rgb).toBe('26 209 229')
    })

    it('should convert "#1AD1E5" to "26 209 229"', () => {
      expect(new Base16Color('#1AD1E5').rgb).toBe('26 209 229')
    })
  })

  describe('rgba', () => {
    it('should convert "1AD1E5" to "26, 209, 229"', () => {
      expect(new Base16Color('1AD1E5').rgba).toBe('26, 209, 229')
    })

    it('should convert "#1AD1E5" to "26, 209, 229"', () => {
      expect(new Base16Color('#1AD1E5').rgba).toBe('26, 209, 229')
    })
  })

  describe('hsl', () => {
    it('should convert "1AD1E5" to "186 80% 50%"', () => {
      expect(new Base16Color('1AD1E5').hsl).toBe('186 80% 50%')
    })

    it('should convert "#1AD1E5" to "186 80% 50%"', () => {
      expect(new Base16Color('#1AD1E5').hsl).toBe('186 80% 50%')
    })
  })

  describe('hsla', () => {
    it('should convert "1AD1E5" to "186, 80%, 50%"', () => {
      expect(new Base16Color('1AD1E5').hsla).toBe('186, 80%, 50%')
    })

    it('should convert "#1AD1E5" to "186, 80%, 50%"', () => {
      expect(new Base16Color('#1AD1E5').hsla).toBe('186, 80%, 50%')
    })
  })
})
