import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Route, withRouter } from 'react-router-dom';

import { Card, CardContent, CardActions, Button,  } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  App: {
    display: "flex",
    flexDirection: "row"
  },
  TallCard: {
    marginRight: "24px",
    flex: "1",
    position: "relative"
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    return (
      <div className={ this.props.classes.App }>
        <Card className={ this.props.classes.TallCard }>
          <CardContent>
            The store has been accessed { this.props.count } times.
          </CardContent>
          <CardActions style={{ position: "absolute", bottom: 0 }}>
            <Button color="primary" onClick={ this.props.accessStore }>ACCESS STORE</Button>
            <Button color="secondary">BUTTON TWO</Button>
          </CardActions>
        </Card>
        <Card style={{ flex: "1" }}>
          <CardContent>
            <Route path="/main" component={ Hello } />
          </CardContent>
          <CardActions>
            <Button color="primary"
              onClick={() => {
                this.props.history.push("/main?keyOne=the best&keyTwo=purple&category=Men");
              }}>WITH QUERY</Button>
            <Button color="secondary"
              onClick={() => {
                this.props.history.push("/main");
              }}>WITHOUT QUERY</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

class Hello extends Component {
  render() {
    return this.props.location.search
      ? (<div>SEARCH STRING: { this.props.location.search }</div>)
      : (<div>No search string exists</div>)
  }
}

const mapState = state => ({
  count: state.storeAccessCount
});

const mapDispatch = dispatch => ({
  accessStore: () => dispatch({ type: "BONOBO", data: "WHATEVS" })
});

const MainWithAccessToStyleObject = withStyles(styles)(Main);
const MainConnectedToStoreWithAccessToStyleObject = connect(mapState, mapDispatch)(MainWithAccessToStyleObject);
const MainWithRouterConnectedToStoreWithAccessToStyleObject = withRouter(MainConnectedToStoreWithAccessToStyleObject)

export default MainWithRouterConnectedToStoreWithAccessToStyleObject;