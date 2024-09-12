import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'src/themes/default';
import AppNavigator from './AppNavigator';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppNavigator />
    </ThemeProvider>
  );
}
