import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchTab from '../../home/components/searchTab';
import Header from '../../sections/components/header';

class Home extends Component {
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
