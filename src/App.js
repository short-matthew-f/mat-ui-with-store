import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, green } from '@material-ui/core/colors';

import Main from './Main';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});




class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <MuiThemeProvider theme={ theme }>
          <Main />
        </MuiThemeProvider>
      </Provider>
    )
  }
}



export default App;
