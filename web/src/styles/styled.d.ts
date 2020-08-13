import 'styled-components';

import { DefaultThemeColors } from './themes/types';

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeColors {
    title: string;
  }
}
