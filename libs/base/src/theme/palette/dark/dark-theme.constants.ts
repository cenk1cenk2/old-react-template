import { Theme } from '@cenk1cenk2/react-template-base'
import { createMuiTheme } from '@material-ui/core'

const DefaultMuiDarkTheme = createMuiTheme({ palette: { type: 'dark' } })

export const DarkPalette: Theme['palette'] = {
  ...DefaultMuiDarkTheme.palette,
  background: {
    default: '#121212',
    paper: '#1c1c1c'
  },
  common: {
    black: '#000000',
    white: '#efefef'
  },
  primary: {
    dark: '#52a472',
    main: '#3fa535',
    light: '#ECF6EB',
    contrastText: '#fff'
  },
  secondary: {
    light: '#ff4081',
    main: '#f50057',
    dark: '#c51162',
    contrastText: '#fff'
  },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
    contrastText: '#fff'
  },
  warning: {
    light: '#ffb74d',
    main: '#ff9800',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  info: {
    light: '#bfdcf5',
    main: '#2196f3',
    dark: '#1976d2',
    contrastText: '#fff'
  },
  success: {
    light: '#81c784',
    main: '#4caf50',
    dark: '#388e3c',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161'
  },
  text: {
    primary: '#efefef',
    secondary: '#E0E0E0',
    disabled: '#cccccc',
    hint: 'rgba(239, 239, 239, 0.38)'
  },
  divider: 'rgba(239, 239, 239, 0.12)'
}