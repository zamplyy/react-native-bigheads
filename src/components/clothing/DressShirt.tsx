import React from 'react'
import { colors } from '../../theme'
import { ClothingProps } from './types'
import { Noop } from '../../utils/Noop'
import { Polygon } from 'react-native-svg'
import { Path, Line, G, Polyline, Circle } from 'react-native-svg'

export const DressShirt = ({ color, graphic: Graphic = Noop, skinTone }: ClothingProps) => {
  const skin = colors.skin[skinTone || 'light']
  const { base } = colors.clothing[color]

  return (
    <>
      <Polygon
        points="547.85 847.98 505.72 813.61 580.35 758.82 419.65 758.82 494.28 813.61 452.15 847.98 414.52 791.48 414.52 869.96 588.78 869.96 588.78 786.52 547.85 847.98"
        fill={skin.shadow}
      />
      <Path
        d="M616.66,758.16l-42.73.1a119.49,119.49,0,0,1-1.43,13.48,63.7,63.7,0,0,1-1.74,6.34c-2.34,6.49-17.26,12-21.49,16.73a48.22,48.22,0,0,1-4.5,4.43c-25.17,18.2-65.17,19.2-89.48-.58a51.36,51.36,0,0,1-7.11-7.61c-4.23-5.56-16.4-11.59-18.1-18.94a60,60,0,0,1-1.08-6.59,63.55,63.55,0,0,1-.36-6.8s-45.21-.56-45.21-.56a13.28,13.28,0,0,0-13.28,13.27v284.69a13.28,13.28,0,0,0,13.28,13.27H622.36a13.27,13.27,0,0,0,13.27-13.27V778C635.63,765.82,629.75,758.16,616.66,758.16Z"
        fill={colors.white}
      />
      <Path d="M612.84,758.16c63.54,0,88.52,43.39,78.9,272-18.74,6.7-55.91,4.59-55.91,4.59Z" fill={colors.white} />
      <Polygon
        points="451.06 855.4 499.51 831.31 548.09 855.4 511.03 812.38 467.14 813.21 451.06 855.4"
        fill={colors.clothing.white.shadow}
      />
      <Path
        d="M635.63,831.31s-22.79,84.54-19.31,234l33.21-31,3.58-137.58C647.49,824.5,635.63,831.31,635.63,831.31Z"
        fill={colors.clothing.white.shadow}
      />
      <Path d="M389,758.16c-61.78,0-88.88,56.45-80.75,245.48,22.42,9.91,56.19,5.58,56.19,5.58Z" fill={colors.white} />
      <Path
        d="M306.94,957.49q.26,20.46,1.21,43.48c15.27.73,43.69.88,57.11,0l4.18-42.81C358.67,956.9,323.66,956.49,306.94,957.49Z"
        fill={colors.clothing.white.shadow}
      />
      <Path
        d="M370.12,831.31l-.5,177.69-13.35.9C353.3,860.85,370.12,831.31,370.12,831.31Z"
        fill={colors.clothing.white.shadow}
      />
      <Path
        d="M612.84,758.16c67.42,0,78.45,56.28,78.9,133.78v138.22s-50,5.53-55.91,4.59l-.1-142.11"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        d="M389,758.16c-25.73,0-43.52,8.12-55.71,22.44-19.45,22.87-24.63,61.54-25,108.27v123.77c12.06,3.32,61.36-3.64,61.36-3.64l.49-118.6"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        d="M372.6,1011.24c-1.83,2.61-73.77,1.92-74.67,0s-2.19-37.5,0-41c1.8-2.88,72.11-2.27,74.67,0S374.43,1008.63,372.6,1011.24Z"
        fill={colors.white}
        stroke={colors.outline}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        d="M383.43,1069.39H500c-109.19,0-100.91-231.14-129.89-231.14v217.87A13.28,13.28,0,0,0,383.43,1069.39Z"
        fill={colors.clothing.white.shadow}
      />
      <Path
        d="M364.15,860.29c-.19-3.67-.11-7.35.06-11s.47-7.34.85-11c.2-1.83.41-3.67.65-5.51s.49-3.67.85-5.5a44.05,44.05,0,0,1,3.59-11,44.05,44.05,0,0,1,3.59,11c.36,1.83.62,3.67.85,5.5s.45,3.68.65,5.51q.58,5.52.86,11c.16,3.67.24,7.35,0,11Z"
        fill={colors.outline}
      />
      <Path
        d="M635.63,869.4v8c.26,34,.26,69,0,102.76,0,2.87,0,5.72,0,8.53v67.41a13.27,13.27,0,0,1-13.27,13.27H383.43a13.28,13.28,0,0,1-13.28-13.27V990.3c-.26-34.86-.26-69.86,0-105.3V860.29"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        d="M697.42,970.24c2.22,2.26,1.59,38.39,0,41s-64,1.92-64.77,0-1.9-37.5,0-41c.27-.5,2.28-.89,5.45-1.18"
        fill={colors.white}
        stroke={colors.outline}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path d="M678.92,968.3c3.8.3,15-1.18,15.42-.76" fill={colors.white} />
      <Path
        d="M678.92,968.3a23.67,23.67,0,0,1,1.88-2.16,12.13,12.13,0,0,1,1.78-1.47,12.74,12.74,0,0,1,1.81-1c.61-.29,1.22-.54,1.83-.79a24.1,24.1,0,0,1,3.79-1.18,15.85,15.85,0,0,1,2-.31c.36,0,.73,0,1.17,0,.25,0,.46,0,.82,0,.12,0,.44,0,.71.07l.35,0,.49.11.25.06.2.06.57.21a6.45,6.45,0,0,1,2,1.37l4.2,4.29-8.65,8.48-4.12-4.37a5.73,5.73,0,0,0,1.91,1.32c.18.08.36.14.54.2l.17,0,.19.05a2.34,2.34,0,0,0,.38.09l.19,0h0c.1,0,.26,0,.22,0s-.07,0-.15,0l-.75,0c-.57,0-1.19,0-1.82,0a26.27,26.27,0,0,1-3.92-.53c-.67-.15-1.34-.3-2-.49a12.56,12.56,0,0,1-2-.72,10,10,0,0,1-2.08-1.32A8.19,8.19,0,0,1,678.92,968.3Z"
        fill={colors.outline}
      />
      <Polygon
        points="592.51 763.64 517.84 818.45 559.98 852.83 619.4 763.59 592.51 763.64"
        fill={colors.clothing.white.shadow}
      />
      <Path
        d="M629.63,869.4c-.19-4.18-.1-8.36.06-12.53s.47-8.36.86-12.53c.2-2.09.4-4.18.64-6.27s.49-4.18.86-6.27a54.83,54.83,0,0,1,3.58-12.53,54.37,54.37,0,0,1,3.59,12.53c.36,2.09.63,4.18.85,6.27s.45,4.18.65,6.27c.39,4.17.69,8.35.85,12.53s.26,8.35.06,12.53Z"
        fill={colors.outline}
      />
      <Path d="M383.43,758.26l233.23-.1" fill="none" stroke={colors.outline} strokeMiterlimit={10} strokeWidth="12px" />
      <Polygon
        points="529.39 835.55 507.04 813.21 484.7 835.55 495.68 846.53 485.96 953.16 506.7 969.33 528.12 953.16 518.41 846.53 529.39 835.55"
        fill={colors.clothing.white.shadow}
      />
      <Line
        x1="500.04"
        y1="813.21"
        x2="500.04"
        y2="1069.39"
        fill="none"
        stroke={colors.outline}
        strokeLinecap="square"
        strokeMiterlimit={10}
        strokeWidth="6px"
      />
      <Polygon points="500.04 813.21 522.39 828.55 500.04 850.9 477.7 828.55 500.04 813.21" fill={base} />
      <Path
        d="M419.62,758.8s43.27,39.34,74.66,54.81C479,838.82,452.15,848,452.15,848l-59.43-89.23Z"
        fill={colors.white}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        d="M580.38,758.8S541,800,505.72,813.61c10,20.28,42.13,34.37,42.13,34.37l59.43-89.23Z"
        fill={colors.white}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <G transform="translate(0 30)">
        <Graphic />
      </G>
      <Polygon
        points="478.96 946.16 499.7 962.33 521.12 946.16 511.12 836.38 488.96 836.38 478.96 946.16"
        fill={base}
      />
      <Polyline
        points="477.7 828.55 488.68 839.53 478.96 946.16 499.7 962.33 521.12 946.16 511.41 839.53 522.39 828.55"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <Path d="M638.1,969.06c7.51-.71,21.51-.89,34-.67" fill={colors.white} />
      <Path
        d="M637.54,963.08a50.92,50.92,0,0,1,8.84-.47c2.9.07,5.78.3,8.66.65,1.43.18,2.87.37,4.3.61a43.36,43.36,0,0,1,4.29.85,27.53,27.53,0,0,1,8.5,3.67,30.13,30.13,0,0,1-8.52,3.5c-1.41.36-2.82.63-4.23.86s-2.81.47-4.21.69c-2.8.42-5.59.78-8.35,1s-5.52.5-8.16.54l-6,.1-1-11.13Z"
        fill={colors.outline}
      />
      <Circle cx="515.77" cy="982.93" r="4.8" fill={colors.outline} />
      <Path
        d="M490.89,836.19c-.05-.06,0,0,0,0l.07.05a.88.88,0,0,1,.17.12l.38.29c.25.21.52.42.78.65.53.45,1.09.93,1.7,1.39s1.27.9,2,1.42a27.37,27.37,0,0,1,2.71,2.33,5.61,5.61,0,0,1-3.13,2.43,9.41,9.41,0,0,1-3.7.27,11,11,0,0,1-3.63-1,9.72,9.72,0,0,1-1.65-1,8.85,8.85,0,0,1-.77-.63c-.12-.11-.25-.23-.37-.36l-.2-.21-.25-.29Z"
        fill={colors.outline}
      />
    </>
  )
}
