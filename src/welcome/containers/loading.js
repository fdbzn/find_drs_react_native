import React, { Component } from 'react';
import LoadingLayout from '../../sections/components/loading';
import { connect } from 'react-redux';

class Login extends Component {
  set_search = ()=>{
    this.props.dispatch({
      type: 'SET_SELECTED_ADDRESS',
      payload: {
        selected_address:{
          location:{
            lat: '19.4003499',
            lng: '-99.1731086',
          }
        }
      }
    });

    this.props.dispatch ({
      type: 'SET_SELECTED_SPECIALTY',
      payload: {
        selected_specialty: '',
      },
    });

    this.props.dispatch ({
      type: 'SET_TYPE_SEARCH',
      payload: {
        type_search: 1,
      },
    });
  }

  componentDidMount() {
    if(this.props.user) {
      this.set_search();
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Initial');
    }
  }
  render() {
    return <LoadingLayout />
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login)
