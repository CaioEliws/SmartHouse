import { ThemeProvider } from 'styled-components'

import { defaultTheme } from 'src/themes/default';

import { Home } from '@screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  );
}

