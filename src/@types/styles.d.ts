import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// Aqui nós estendemos a tipagem que o Styled Components já têm e, não sobrescrever ela

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
