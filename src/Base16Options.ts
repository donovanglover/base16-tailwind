import type { Base16ColorSpace } from './Base16ColorSpace.ts'

export interface Base16Options {
  /** Whether or not to style prose classes as well.
   *
   * @default false
   **/
  withTypography?: boolean

  /** Only extend colors instead of override them.
   *
   * This lets you use base16 colors with existing Tailwind CSS colors.
   *
   * @default false
   */
  extendOnly?: boolean

  /** Custom directory for base16 schemes in .yaml files.
   *
   * If `undefined`, base16 color schemes from tinted-theming are used.
   *
   * Scheme gallery: <https://tinted-theming.github.io/base16-gallery/>
   * Upstream repository: <https://github.com/tinted-theming/schemes>
   *
   * @default '/path/to/base16-tailwind/schemes/base16'
   **/
  customPath?: string

  /** Which color space to use for the CSS variables.
  *
  * @default 'rgb'
  **/
  colorSpace?: Base16ColorSpace
}
