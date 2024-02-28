export const animationOptions = [
  {
    label: '无动画',
    value: 'none',
  },
  {
    label: '上滑淡入',
    value: 'slide-fadein-up',
  },
  {
    label: '右滑淡入',
    value: 'slide-fadein-right',
  },
  {
    label: '缩放淡入',
    value: 'zoom-fadein',
  },
  {
    label: '淡入',
    value: 'fadein',
  },
]

export type AnimationType = 'none' | 'slide-fadein-up' | 'slide-fadein-right' | 'zoom-fadein' | 'fadein'
