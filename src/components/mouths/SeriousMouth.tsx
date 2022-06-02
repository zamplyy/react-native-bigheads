import React from 'react'
import { colors } from '../../theme'
import { Line } from 'react-native-svg'

export const SeriousMouth = () => {
  return (
    <Line
      x1="446.66"
      y1="606.02"
      x2="542.53"
      y2="606.02"
      fill="none"
      stroke={colors.outline}
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth="12px"
    />
  )
}
