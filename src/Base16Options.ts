export interface Base16Options {
  /** Whether or not to style prose classes as well. */
  withTypography?: boolean

  /** Only extend colors instead of override them.
   *
   * This lets you use base16 colors with existing Tailwind CSS colors.
   */
  extendOnly?: boolean

  /** Custom directory for base16 schemes in .yaml files. */
  customPath?: string
}
