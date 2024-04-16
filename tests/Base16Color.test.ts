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
})
