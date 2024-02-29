/**
 * 计算颜色的辅助色、按下时的色调、悬停时的色调
 * @param key 键
 * @param color 颜色
 * @returns 返回一个对象，包含了辅助色、按下时的色调、悬停时的色调
 */
export function calculateColors(key = 'primary', color: string) {
  return {
    [`${key}Color`]: color,
    [`${key}ColorHover`]: shiftColor(color, 20),
    [`${key}ColorPressed`]: shiftColor(color, -50),
    [`${key}ColorSuppl`]: shiftColor(color, 20),
  }
}

export function shiftColor(color: string, shiftValue: number) {
  // 将颜色转换成RGB格式
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  color = color.replace(shorthandRegex, (_m, r, g, b) => {
    return `#${r}${r}${g}${g}${b}${b}`
  })

  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
  if (!rgb)
    return color

  let r = Number.parseInt(rgb[1], 16)
  let g = Number.parseInt(rgb[2], 16)
  let b = Number.parseInt(rgb[3], 16)

  // 调整颜色值
  r = Math.min(255, Math.max(0, r + shiftValue))
  g = Math.min(255, Math.max(0, g + shiftValue))
  b = Math.min(255, Math.max(0, b + shiftValue))

  // 转换回Hex格式
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}
