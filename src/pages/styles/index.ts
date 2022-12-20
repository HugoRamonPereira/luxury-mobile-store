import { createStitches } from '@stitches/react';

export const { config, styled, globalCss, keyframes, css, reset, getCssText, theme, createTheme } = createStitches({
  theme: {
    colors: {
      blue50: '#e3f2fd',
      blue100: '#bbdefb',
      blue200: '#90caf9',
      blue300: '#64b5f6',
      blue400: '#42a5f5',
      blue500: '#2196f3',
      blue600: '#1e88e5',
      blue700: '#1976d2',
      blue800: '#1565c0',
      blue900: '#0d47a1',

      gray50: '#fafafa',
      gray100: '#f5f5f5',
      gray200: '#eeeeee',
      gray300: '#e0e0e0',
      gray400: '#bdbdbd',
      gray500: '#9e9e9e',
      gray600: '#757575',
      gray700: '#616161',
      gray800: '#424242',
      gray900: '#212121'
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    }
  }
});
