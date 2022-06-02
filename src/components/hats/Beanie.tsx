import React from 'react'
import { colors } from '../../theme'
import { ClothingProps } from '../clothing/types'
import { HatProps } from './types'
import { Path, G, Circle } from 'react-native-svg'

// TODO
// it seems there is an issue with the scale when greater than 1
// for now the scale will be hardcoded to 1
// "Back" and "Front" components -> "G" element

// export const Front = ({ color, scale = 1 }: ClothingProps & HatProps) => {
export const Front = ({ color }: ClothingProps & HatProps) => {
  const { base, shadow } = colors.clothing[color]

  return (
    <G transform={{ scale: 1, origin: 'center' }}>
      <Circle cx="491.44" cy="157.14" r="47.48" fill={base} />
      <Path
        d="M491.44,204.62a47.47,47.47,0,0,0,46.46-57.31c-30.78-4.77-62.7-2-93.77,6-.1,1.26-.17,2.53-.17,3.82A47.48,47.48,0,0,0,491.44,204.62Z"
        fill={shadow}
      />
      <Circle
        cx="491.44"
        cy="157.14"
        r="47.48"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        d="M240.26,423.13a254.67,254.67,0,0,1,6.54-57.5q1.29-5.55,2.81-11c2.9-32.3,20-58.94,42.86-82.73,4.76-3.81,5.71-12.37,10.47-17.13,16.18-14.27,30.45-28.55,48.53-40,74.22-47.58,172.23-73.27,251.21-29.5,16.17,8.56,34.25,13.32,47.57,24.74,25.7,21.88,43.77,47.58,69.47,68.51,22.83,19,26.64,49.48,34.74,76.07q1.53,5.44,2.81,11a254.67,254.67,0,0,1,6.54,57.5Z"
        fill={base}
      />
      <Path
        d="M246.8,365.63a254.67,254.67,0,0,0-6.54,57.5h83C321.7,342.47,301,275.11,406,193,330.68,221.59,262.05,284.38,246.8,365.63Z"
        fill={shadow}
      />
      <Path
        d="M258.18,321.12a109.41,109.41,0,0,0-8.57,33.51q-1.52,5.44-2.81,11a254.67,254.67,0,0,0-6.54,57.5H440.31a827.17,827.17,0,0,1,127.59,0H763.81a254.67,254.67,0,0,0-6.54-57.5q-1.29-5.55-2.81-11c-3.46-11.37-6.15-23.44-9.86-35C582.71,259.73,419,261,258.18,321.12Z"
        fill={shadow}
      />
      <Path
        d="M240.26,423.13a254.67,254.67,0,0,1,6.54-57.5q1.29-5.55,2.81-11c2.9-32.3,20-58.94,42.86-82.73,4.76-3.81,5.71-12.37,10.47-17.13,16.18-14.27,30.45-28.55,48.53-40,74.22-47.58,172.23-73.27,251.21-29.5,16.17,8.56,34.25,13.32,47.57,24.74,25.7,21.88,43.77,47.58,69.47,68.51,22.83,19,26.64,49.48,34.74,76.07q1.53,5.44,2.81,11a254.67,254.67,0,0,1,6.54,57.5Z"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        d="M225.35,356.43c183.42-78,371.14-79.06,555.94,0,17.53,7.5,17.43,139.87,0,133.81-180.47-62.83-371.33-63.5-555.94,0C203.39,497.79,205.53,364.86,225.35,356.43Z"
        fill={base}
      />
      <Path
        d="M751.33,443.71a43.58,43.58,0,0,1,1.35,9.9c.09,3.27-.11,6.52-.26,9.78l-.36,4.87c-.16,1.62-.32,3.24-.52,4.85-.4,3.23-.89,6.44-1.59,9.61l-7.87-1.41c.44-3.17,1-6.31,1.64-9.45l1-4.71,1-4.7c.74-3.13,1.37-6.27,2.22-9.4A53.94,53.94,0,0,1,751.33,443.71Z"
        fill={colors.outline}
      />
      <Path
        d="M749.91,342.47a175.32,175.32,0,0,1,3.63,19c.43,3.19.78,6.39,1.09,9.59s.49,6.42.66,9.63c.26,6.42.37,12.84.06,19.25a114.35,114.35,0,0,1-2.45,19.11c-1-6.39-1.67-12.7-2.32-19s-1.21-12.55-2.05-18.78c-.39-3.12-.83-6.22-1.3-9.32s-1-6.19-1.52-9.27c-1.07-6.17-2.3-12.29-3.59-18.41Z"
        fill={colors.outline}
      />
      <Path
        d="M668.78,322c7.56,42.87,6.71,89.49,0,138.73"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <Path
        d="M598.19,307.61c5.15,42.9,4.57,89.55,0,138.83"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <Path
        d="M533.85,356.47a172.75,172.75,0,0,1,2.37,20.68c.4,6.9.52,13.8.65,20.71l0,10.36c0,3.45,0,6.9-.12,10.35-.15,6.9-.4,13.8-.87,20.69l-8-.4c.22-6.87.57-13.73.94-20.59l1.21-20.57c.46-6.86.82-13.73,1.35-20.6S532.69,363.36,533.85,356.47Z"
        fill={colors.outline}
      />
      <Path
        d="M535.93,299.88a58.54,58.54,0,0,1,.28,6.35c0,1.06-.05,2.12-.08,3.18L536,312.6c-.17,2.12-.32,4.25-.68,6.38a22.42,22.42,0,0,1-2.08,6.41,23.29,23.29,0,0,1-2.7-6.21c-.57-2.08-.93-4.16-1.31-6.25l-.49-3.12c-.13-1.05-.28-2.09-.39-3.13a55,55,0,0,1-.35-6.29Z"
        fill={colors.outline}
      />
      <Path
        d="M467.76,299.65c.35,43,.31,89.67,0,139"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <Path
        d="M403.38,306.18c-2.06,43-1.83,89.73,0,139.11"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <Path
        d="M333.37,391.65a161.31,161.31,0,0,1,2.71,16.78c.63,5.59,1.09,11.17,1.65,16.75l1.51,16.73c.47,5.57.93,11.15,1.25,16.74l-8,.64c-.58-5.61-.93-11.24-1.18-16.87-.13-2.82-.2-5.64-.28-8.46l-.1-8.46c0-5.64.05-11.29.35-16.93A117.52,117.52,0,0,1,333.37,391.65Z"
        fill={colors.outline}
      />
      <Path
        d="M340.48,320.18c-.25,3.65-.64,7.28-1.05,10.91l-.66,5.45-.72,5.45c-.54,3.64-.95,7.28-1.6,10.93a67.39,67.39,0,0,1-2.8,10.92,55.71,55.71,0,0,1-2-11.14c-.3-3.72-.32-7.42-.38-11.14l0-5.56c.06-1.86.11-3.71.2-5.56.2-3.71.49-7.41,1-11.09Z"
        fill={colors.outline}
      />
      <Path
        d="M264.86,340.45c-6.86,43-6.09,89.85,0,139.3"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <Path d="M753.07,434.58a3.75,3.75,0,1,0-3.75-3.75,3.8,3.8,0,0,0,3.75,3.75Z" fill={colors.outline} />
      <Path
        d="M758.28,341.38c10,42.84,8.85,89.43,0,138.64"
        fill="none"
        stroke={shadow}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <Path
        d="M681,320c7.56,42.87,6.71,89.49,0,138.74"
        fill="none"
        stroke={shadow}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <Path
        d="M610.38,305.45c5.15,42.9,4.57,89.55,0,138.83"
        fill="none"
        stroke={shadow}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <Path
        d="M544.06,297.82c2.74,42.92,2.44,89.61,0,138.92"
        fill="none"
        stroke={shadow}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <Path
        d="M479.8,297.16c.34,42.95.31,89.67,0,139"
        fill="none"
        stroke={shadow}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <Path
        d="M415.34,303.53c-2.06,43-1.83,89.73,0,139.11"
        fill="none"
        stroke={shadow}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <Path
        d="M348.41,317c-4.46,43-4,89.79,0,139.21"
        fill="none"
        stroke={shadow}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <Path
        d="M276.74,337.64c-6.86,43-6.09,89.85,0,139.3"
        fill="none"
        stroke={shadow}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <Path
        d="M225.35,356.43c183.42-78,371.14-79.06,555.94,0,17.53,7.5,17.43,139.87,0,133.81-180.47-62.83-371.33-63.5-555.94,0C203.39,497.79,205.53,364.86,225.35,356.43Z"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        d="M426.76,283.72A328.8,328.8,0,0,1,465.37,278c3.25-.28,6.49-.56,9.74-.78l9.75-.56c3.26-.14,6.51-.2,9.77-.3l9.77-.13c13,0,26.05.63,39,1.84a324.4,324.4,0,0,1,38.6,5.8c-13-.29-26-.79-38.88-1.13s-25.84-.49-38.75-.52h-9.68c-3.23,0-6.46.12-9.69.11l-9.68.14c-3.23.11-6.46.16-9.7.2C452.72,283,439.78,283.46,426.76,283.72Z"
        fill={colors.outline}
      />
      <Path
        d="M347.31,233.83a183.71,183.71,0,0,1,22.38-15.33c7.78-4.62,15.81-8.84,24-12.66,2-1,4.13-1.86,6.2-2.78s4.13-1.86,6.24-2.67c4.22-1.65,8.4-3.38,12.7-4.8a217,217,0,0,1,26.06-7.5c-2.07.91-4.16,1.78-6.25,2.63s-4.19,1.64-6.25,2.56c-4.15,1.74-8.31,3.42-12.43,5.22l-3.09,1.33c-1,.43-2.08.85-3.1,1.32l-6.15,2.73c-2.06.88-4.09,1.83-6.14,2.75s-4.09,1.84-6.1,2.83l-6.1,2.83c-2,1-4,2-6.05,3-4,1.94-8,4-12.05,6C363.19,225.31,355.23,229.48,347.31,233.83Z"
        fill={colors.white}
      />
    </G>
  )
}

// export const Back = ({ scale = 1 }: HatProps) => {
export const Back = () => {
  return (
    <G transform={{ scale: 1, origin: 'center' }}>
      <Path
        d="M225.35,498c183.42,77.95,371.14,79.06,555.94,0,17.53-7.5,17.43-139.87,0-133.81-180.47,62.83-371.33,63.5-555.94,0C203.39,356.6,205.53,489.53,225.35,498Z"
        fill={colors.outline}
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
    </G>
  )
}
