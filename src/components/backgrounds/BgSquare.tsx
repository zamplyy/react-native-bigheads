import React from 'react'
import { colors } from '../../theme'
import { Path } from 'react-native-svg'
import { BgShapeProps } from './types'

export const BgSquare = ({ bgColor }: BgShapeProps) => {
  const color = colors.bgColors[bgColor]

  return <Path d="M832.442 297.718H167.558V962.602H832.442V297.718Z" fill={color} />
}
