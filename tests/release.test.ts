import { readFileSync } from 'node:fs'

describe('release', () => {
  const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))
  const jsr = JSON.parse(readFileSync('./jsr.json', 'utf-8'))

  const readme = readFileSync('./README.md', 'utf-8')

  describe('package.json', () => {
    it('should have package name as repository name', () => {
      expect(pkg.repository).toContain(`/${pkg.name}`)
    })
  })

  describe('jsr.json', () => {
    it('should have the same version as package.json', () => {
      expect(jsr.version).toBe(pkg.version)
    })

    it('should have exports equal to "./" + package.json main', () => {
      expect(jsr.exports).toBe(`./${pkg.main}`)
    })

    it('should have name equal to "@" + package.json repository', () => {
      expect(jsr.name).toBe(`@${pkg.repository}`)
    })
  })

  describe('README.md', () => {
    it('should have the same description as package.json', () => {
      expect(readme).toContain(pkg.description)
    })

    it('should have the correct jsr installation instructions', () => {
      expect(readme).toContain(`npx jsr add ${jsr.name}`)
    })
  })
})
