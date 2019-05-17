import React, { Component } from "react";
import "./App.scss";

import { getData, addSmurf, deleteSmurf } from "../actions";
import { connect } from "react-redux";
import Smurf from "./Smurf";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      smurf: {
        ...this.state.smurf,
        [event.target.name]: event.target.value
      }
    });
  };

  add = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    })
}

delete = (event, id) => {
  event.preventDefault();
    this.props.deleteSmurf(id);
}

  render() {
    return (
      <div className="App">
        <div className="smurf-container">
          {this.props.smurfs.map(smurf => (
            <Smurf delete={this.delete} smurf={smurf} />
          ))}
        </div>
        <form className="form" onSubmit={this.add}>
          <input
            placeholder="Name"
            value={this.state.smurf.name}
            onChange={e => this.handleChanges(e)}
            name="name"
          />
          <input
            placeholder="Age"
            value={this.state.smurf.age}
            onChange={e => this.handleChanges(e)}
            name="age"
          />
          <input
            placeholder="Height"
            value={this.state.smurf.height}
            onChange={e => this.handleChanges(e)}
            name="height"
          />
          <button onClick={this.add}>Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error
});

export default connect(
  mapStateToProps,
  {
    getData, addSmurf, deleteSmurf
  }
)(App);
