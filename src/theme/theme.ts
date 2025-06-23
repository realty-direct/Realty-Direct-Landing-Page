import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#345075', // primary-700
      dark: '#102542', // primary-900
      light: '#7a99b8', // primary-500
    },
    secondary: {
      main: '#f59e0b', // gold-500
      dark: '#d97706', // gold-600
      light: '#fbbf24', // gold-400
    },
    grey: {
      50: '#f8fafc', // slate-100
      100: '#f3f4f6', // accent-500
      200: '#d1d5db', // accent-600
      300: '#b0b7bd', // accent-700
      400: '#6b7280', // slate-600
      500: '#374151', // slate-700
      600: '#23272b', // slate-800
      700: '#181c20', // slate-900
    },
    success: {
      main: '#198754',
    },
    warning: {
      main: '#f59e42',
    },
    error: {
      main: '#dc3545',
    },
  },
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  },
});