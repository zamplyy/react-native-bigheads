import { colors } from '../../theme'

export interface BodyProps {
  clothingColor: keyof typeof colors.clothing
  braStraps: boolean
  skinTone: keyof typeof colors.skin
}
