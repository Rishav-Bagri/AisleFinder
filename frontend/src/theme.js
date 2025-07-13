export const theme = {
  colors: {
    // Background
    background: '#FDFDFB',  // Soft Ivory White
    
    // Accents
    primary: '#79B7D7',     // Calming Sky Blue
    secondary: '#FFE0B2',   // Warm Soft Peach
    highlight: '#F4C430',   // Muted Mustard
    
    // Text
    text: {
      primary: '#404B52',   // Slate Gray
      secondary: '#6A737D', // Light Charcoal
    },
    
    // UI Elements
    border: '#E3E8EE',     // Misty Silver
    success: '#C8E6C9',    // Minty Green
    
    // States
    states: {
      hover: {
        primary: '#68A0C2',  // Slightly darker blue for hover
        secondary: '#FFD699', // Slightly darker peach for hover
      },
      disabled: {
        background: '#F3F3F3',
        text: '#A0A0A0',
      },
    },
  },
  
  // Typography
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
    },
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem',     // 32px
    '2xl': '3rem',  // 48px
  },
  
  // Border Radius
  borderRadius: {
    sm: '0.25rem',  // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem',   // 8px
    xl: '0.75rem',  // 12px
    full: '9999px', // Full rounded
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  
  // Transitions
  transition: {
    default: 'all 0.2s ease-in-out',
    fast: 'all 0.1s ease-in-out',
    slow: 'all 0.3s ease-in-out',
  },
};

export default theme;
