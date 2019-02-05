import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BackHandler} from 'react-native';
import AppNavigator from './app-navigator';
import { NavigationActions } from 'react-navigation';
import {reduxifyNavigator} from 'react-navigation-redux-helpers';

const ReduxifyApp = reduxifyNavigator (AppNavigator, 'root');

class AppNavigatorWithState extends ReduxifyApp {
  // permite manejar el evento del boton back del sistema
  componentDidMount () {
    BackHandler.addEventListener ('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount () {
    BackHandler.removeEventListener ('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    // --- si es el ultimo history termina
    const {state, dispatch} = this.props;
    if (state.index === 0) {
      //console.log("nolohagasenback1",this.props)  
      //return false; //esto hacia que botara en home
    }
    this.props.dispatch(
      NavigationActions.back()
    )
    //this.currentNavProp.goBack ();
    return true;
  };
}

function mapStateToProps (state) {
  return {
    state: state.navigation,
  };
}

export default connect (mapStateToProps) (AppNavigatorWithState);
