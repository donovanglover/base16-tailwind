import { Base16Color } from '../src/Base16Color.ts'

describe('Base16Color', () => {
  it('should pass if value is a valid hexadecimal string', () => {
    expect(new Base16Color('1AD1E5')).toBeDefined()
  })

  it('should pass if value is a valid 6 character hexadecimal string with #', () => {
    expect(new Base16Color('#1AD1E5')).toBeDefined()
  })

  it('should pass if value is a valid 3 character hexadecimal string with #', () => {
    expect(new Base16Color('#ACE')).toBeDefined()
  })

  it('should error if value is not a string', () => {
    expect(() => {
      void new Base16Color(727)
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
      void new Base16Color('A2')
    }).toThrow()
  })

  describe('rgb', () => {
    it('should convert "1AD1E5" to "26 209 229"', () => {
      expect(new Base16Color('1AD1E5').rgb).toBe('26 209 229')
    })

    it('should convert "#1AD1E5" to "26 209 229"', () => {
      expect(new Base16Color('#1AD1E5').rgb).toBe('26 209 229')
    })

    it('should convert "#ACE" to "170 204 238"', () => {
      expect(new Base16Color('#ACE').rgb).toBe('170 204 238')
    })
  })

  describe('rgba', () => {
    it('should convert "1AD1E5" to "26, 209, 229"', () => {
      expect(new Base16Color('1AD1E5').rgba).toBe('26, 209, 229')
    })

    it('should convert "#1AD1E5" to "26, 209, 229"', () => {
      expect(new Base16Color('#1AD1E5').rgba).toBe('26, 209, 229')
    })

    it('should convert "#ACE" to "170, 204, 238"', () => {
      expect(new Base16Color('#ACE').rgba).toBe('170, 204, 238')
    })
  })

  describe('hsl', () => {
    it('should convert "1AD1E5" to "186 80% 50%"', () => {
      expect(new Base16Color('1AD1E5').hsl).toBe('186 80% 50%')
    })

    it('should convert "#1AD1E5" to "186 80% 50%"', () => {
      expect(new Base16Color('#1AD1E5').hsl).toBe('186 80% 50%')
    })

    it('should convert "#ACE" to "210 67% 80%"', () => {
      expect(new Base16Color('#ACE').hsl).toBe('210 67% 80%')
    })
  })

  describe('hsla', () => {
    it('should convert "1AD1E5" to "186, 80%, 50%"', () => {
      expect(new Base16Color('1AD1E5').hsla).toBe('186, 80%, 50%')
    })

    it('should convert "#1AD1E5" to "186, 80%, 50%"', () => {
      expect(new Base16Color('#1AD1E5').hsla).toBe('186, 80%, 50%')
    })

    it('should convert "#ACE" to "210, 67%, 80%"', () => {
      expect(new Base16Color('#ACE').hsla).toBe('210, 67%, 80%')
    })
  })
})
