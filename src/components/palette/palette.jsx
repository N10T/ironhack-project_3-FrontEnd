import { createMuiTheme } from '@material-ui/core/styles';
// import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#89d4a9',
        main: '#59a27a',
        dark: '#29734e',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  export default theme

