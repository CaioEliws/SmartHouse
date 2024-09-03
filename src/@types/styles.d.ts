import { defaultTheme } from '@theme/default';

import 'styled-components/native';


declare module 'styled-components' {
    type ThemeType = typeof defaultTheme;

    export interface DefaultTheme extends ThemeType {}
}