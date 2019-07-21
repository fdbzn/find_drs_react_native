import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchTab from '../../home/components/searchTab';
import Header from '../../sections/components/header';

class Home extends Component {
  // componentDidMount() {
  //   this.props.dispatch({ type: 'HOME_CLEAR' });
  //   this.props.dispatch({ type: 'APPOINTMENT_CLEAR' });
  // };

  static navigationOptions = () => {
    return {
      header: Header,
      title: 'inicio'
    }
  }
  
  render() {
    return (
      <SearchTab/>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps)(Home);
