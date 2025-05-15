'use client';

import { ThemeProvider } from '@mui/material/styles';
import { PropsWithChildren } from 'react';
import { theme } from '@/theme/theme';
import { EmotionRegistry } from '@/utils/EmotionRegistry';

export function MUIThemeProvider({ children }: PropsWithChildren) {
  return (
    <EmotionRegistry>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </EmotionRegistry>
  );
}