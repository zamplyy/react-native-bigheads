import { colors } from 'theme'
export interface EyeProps {
  withLashes?: boolean
  skinTone: keyof typeof colors.skin
}
