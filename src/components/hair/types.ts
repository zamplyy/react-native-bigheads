import { colors } from '../../theme'

export interface HairProps {
  hairColor: keyof typeof colors.hair
  hasHat?: boolean
  skinTone?: keyof typeof colors.skin
}
