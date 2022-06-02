import { colors } from '../../theme'

export interface ClothingProps {
  color: keyof typeof colors.clothing
  skinTone?: keyof typeof colors.skin
  graphic?: React.ComponentType
  hasBreasts?: boolean
}
