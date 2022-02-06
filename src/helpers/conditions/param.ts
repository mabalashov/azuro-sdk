const param = {
  1: 0,
  4: 1.5,
  5: 2.5,
  6: 3.5,
  7: -1.5,
  32: 4.5,
  36: -2.5,
  94: -3.5,
  96: -4.5,
} as Record<number, number>

export type ParamId = keyof typeof param

export default param
