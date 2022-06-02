import React from 'react'
import { colors } from '../../theme'
import { Line } from 'react-native-svg'

export const DizzyEyes = () => {
  return (
    <>
      <Line
        x1="375.88"
        y1="603.9"
        x2="306.24"
        y2="534.26"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth="16px"
      />
      <Line
        x1="306.24"
        y1="603.9"
        x2="375.88"
        y2="534.26"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth="16px"
      />
      <Line
        x1="695.99"
        y1="603.9"
        x2="626.34"
        y2="534.26"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth="16px"
      />
      <Line
        x1="626.34"
        y1="603.9"
        x2="695.99"
        y2="534.26"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth="16px"
      />
    </>
  )
}
