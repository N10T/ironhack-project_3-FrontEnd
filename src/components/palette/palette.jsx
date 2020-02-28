import { createMuiTheme  } from '@material-ui/core/styles';

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
        light: '#FFDCB3',
        main: '#E5B67E',
        dark: '#BB8749',
        contrastText: '#000',
      },
    },
  });

  export default theme

