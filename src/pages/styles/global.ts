import { globalCss } from '.';
import { Heebo } from '@next/font/google';

const heebo = Heebo({ subsets: ['latin'] });

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$blue50',
    color: '$gray900',
    '-webkit-font-smoothing': 'antialiased'
  },

  'body, input, textarea, button': {
    fontFamily: `${heebo}`,
    fontWeight: 300,
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: `${heebo}`,
    fontWeight: 400,
  },

  'button': {
    cursor: 'pointer'
  },

  'button[disabled]': {
    cursor: 'not-allowed'
  }

});
