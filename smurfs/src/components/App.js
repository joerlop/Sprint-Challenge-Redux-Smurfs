import React, { Component } from "react";
import "./App.css";

import { getData } from "../actions";
import { connect } from "react-redux";
import Smurf from "./Smurf"

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props);
    return (
    <div className="App">
      {this.props.smurfs.map(smurf => 
        <Smurf smurf={smurf} />
      )}
    </div>
    ) 
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error
});

export default connect(
  mapStateToProps,
  {
    getData
  }
)(App);
