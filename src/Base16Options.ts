export interface Base16Options {
  /** Whether or not to style prose classes as well. */
  withTypography?: boolean

  /** Whether or not to use CSS variables for fonts.
   *
   * TODO: Remove this since it's out of scope.
  */
  withFontOverride?: boolean

  /** Custom directory for base16 schemes in .yaml files. */
  customPath?: string
}
