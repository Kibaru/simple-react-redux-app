import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

import Main from '../components/Main.js';
import User from '../components/User.js';
import setName from '../actions/userActions';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Main changeUsername={() => this.props.setName("Kibaru")}/>
        <User username={this.props.user.name}/>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return{
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = (dispatch) =>{
  return{
    setName: (name) =>{
      dispatch(setName(name));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
