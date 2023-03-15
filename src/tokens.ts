export const base = {
  colors: {
    'grey-100': '#F6F6F6',
    'grey-200': '#BFBFBF',
    'grey-300': '#626262',
    'grey-400': '#595959',
    'grey-500': '#0D0D0D',
  },
  font: {
    fontFamily: 'IBM Plex Sans, sans-serif',
  },
}

export const tokens = {
  heading: {
    xs: {
      font: {
        fontFamily: base.font.fontFamily,
        fontSize: '13px',
        lineHeight: '17px',
        letterSpacing: '0.75px',
        color: base.colors['grey-300'],
      },
    },
    sm: {
      font: {
        fontFamily: base.font.fontFamily,
        fontSize: '15px',
        fontWeight: '700',
        letterSpacing: '0.75px',
        color: base.colors['grey-300'],
      },
    },
    md: {
      font: {
        fontFamily: base.font.fontFamily,
        fontSize: '17px',
        letterSpacing: '6px',
        fontWeight: '400',
        textTransform: 'uppercase',
        color: base.colors['grey-500'],
      },
    },
    lg: {
      font: {
        fontFamily: base.font.fontFamily,
        fontSize: '40px',
        lineHeight: '50px',
        letterSpacing: '10px',
        textTransform: 'uppercase',
        fontWeight: '400',
        color: base.colors['grey-400'],
      },
    },
  },
  text: {
    font: {
      fontFamily: base.font.fontFamily,
      fontSize: '13px',
      lineHeight: '17px',
      letterSpacing: '0.25px',
      color: base.colors['grey-300'],
    },
  },
  stack: {
    divider: {
      color: base.colors['grey-200'],
    },
  },
}
