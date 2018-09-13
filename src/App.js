import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

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
          <Router>
            <Switch>
              <Route path="/main" component={ Main } />
              <Redirect to="/main" />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </Provider>
    )
  }
}



export default App;
