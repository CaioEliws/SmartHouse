import { ThemeProvider } from 'styled-components'

import { defaultTheme } from 'src/themes/default';

import { Home } from '@screens/Home';
import { Lamp } from '@screens/Lamp';
import { Lock } from '@screens/Lock';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Lock />
    </ThemeProvider>
  );
}

