import { createTheme } from '@mui/material/styles';

/**
 * Configuración personalizada del tema para la marca Capital One
 * Colores principales: Blanco, Rojo y Azul (actualizados)
 *
 * Tipografía:
 * - Barlow como fuente principal
 * - Geogrotesque para títulos (si está disponible)
 * - Minion Italic para detalles o énfasis (si está disponible)
 *
 * Documentación en español para facilitar el mantenimiento.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#004877', // Updated Capital One Blue
      light: '#25639a',
      dark: '#002b4c',
      contrastText: '#fff',
    },
    error: {
      main: '#D22E1E', // Updated Capital One Red
      contrastText: '#fff',
    },
    background: {
      default: '#F4F6F8', // Subtle gray for business look
      paper: '#FFFFFF',
    },
    text: {
      primary: '#222',
      secondary: '#555',
    },
  },
  // Tipografía personalizada para el banco
  typography: {
    // Fuente principal: Barlow
    fontFamily: 'Barlow, Arial, sans-serif',
    fontWeightBold: 700,
    // Títulos principales: Geogrotesque (si está disponible)
    h5: {
      fontFamily: 'Barlow, Arial, sans-serif', // Cambiar a 'Geogrotesque' si se importa
      fontWeight: 700,
      letterSpacing: 1,
    },
    // Subtítulos: Barlow
    h6: {
      fontFamily: 'Barlow, Arial, sans-serif',
      fontWeight: 600,
    },
    // Botones: Barlow
    button: {
      fontFamily: 'Barlow, Arial, sans-serif',
      fontWeight: 600,
      letterSpacing: 1,
    },
    // Detalles o énfasis: Minion Italic (si está disponible)
    subtitle2: {
      fontFamily: 'Barlow, Arial, sans-serif', // Cambiar a 'Minion Italic' si se importa
      fontStyle: 'italic',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: '#fff',
        },
      },
    },
  },
});

export default theme;