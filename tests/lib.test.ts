import { Base16Scheme } from '../src/Base16Scheme.ts'
import { base16Schemes } from '../src/lib.ts'

describe('base16Schemes()', () => {
  it('should return the correct metadata for color schemes', () => {
    expect(base16Schemes({ customPath: './tests/data/valid' })).toContainEqual(new Base16Scheme({
      system: 'base16',
      name: 'Blue',
      author: 'Blue is not red',
      slug: 'blue',
      variant: 'dark',
      palette: [
        '000000',
        '111111',
        '222222',
        '333333',
        '444444',
        '555555',
        '666666',
        '777777',
        '888888',
        '999999',
        'AAAAAA',
        'BBBBBB',
        'CCCCCC',
        'DDDDDD',
        'EEEEEE',
        'FFFFFF'
      ]
    }))
  })
})
