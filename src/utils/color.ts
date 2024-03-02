import { composite } from 'seemly'

export function calculateColors(key = 'primary', color: string) {
  return {
    [`${key}Color`]: color,
    [`${key}ColorHover`]: createHoverColor(color),
    [`${key}ColorPressed`]: createPressedColor(color),
    [`${key}ColorSuppl`]: createHoverColor(color),
  }
}

export function createHoverColor(rgb: string): string {
  return composite(rgb, [255, 255, 255, 0.16])
}

export function createPressedColor(rgb: string): string {
  return composite(rgb, [0, 0, 0, 0.12])
}
