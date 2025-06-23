'use client';

import { ThemeProvider } from '@mui/material/styles';
import { PropsWithChildren } from 'react';
import { theme } from '@/theme/theme';

export function MUIThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}