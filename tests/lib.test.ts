import { colors } from '~lib'

const solarized = {
  100: '#fdf6e3',
  200: '#eee8d5',
  300: '#93a1a1',
  400: '#839496',
  500: '#657b83',
  600: '#586e75',
  700: '#073642',
  800: '#002b36',
  blue: '#268bd2',
  current: 'currentColor',
  cyan: '#2aa198',
  green: '#859900',
  orange: '#cb4b16',
  pink: '#d33682',
  purple: '#6c71c4',
  red: '#dc322f',
  transparent: 'transparent',
  yellow: '#b58900'
}

test('Colors are correct', () => {
  expect(colors).toHaveProperty('solarized-dark', solarized)
  expect(colors).toHaveProperty('solarized-light', solarized)
})
