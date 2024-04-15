declare namespace jest {
  interface Matchers<R> {
    toIncludeCss: (arg: string) => R
  }
}
