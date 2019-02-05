// https://medium.com/@ksashrithbhat/custom-transitions-in-react-navigation-screen-to-screen-c2d035aa3c63

import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import {
  createMaterialBottomTabNavigator,
} from 'react-navigation-material-bottom-tabs';
import React from 'react';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import Home from './home/containers/home';
import SearchAddress from './home/containers/searchAddress';
import ResultDoctors from './home/containers/resultDoctors';
import Specialties from './home/containers/specialties';
import Loading from './welcome/containers/loading';
import Login from './welcome/containers/login';
import Welcome from './welcome/containers/welcome';
import ForgotPass from './welcome/containers/forgotPass';
import Register from './welcome/containers/register';
import Profile from './welcome/containers/profile';
import Conditions from './welcome/containers/conditions';
import Icon from './sections/components/icon';

const Main = createStackNavigator (
  {
    Home: Home,
    SearchAddress: SearchAddress,
    ResultDoctors: ResultDoctors,
    Specialties,
  },
  {
    transitionConfig: getSlideFromRightTransition,
    navigationOptions: {
      //header: Header,
      initialRouteName: 'Home',
    },
  }
);
const Initial = createStackNavigator (
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
      },
    },
    Conditions: {
      screen: Conditions,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    ForgotPass: {
      screen: ForgotPass,
    },
    Register: {
      screen: Register,
    },
  },
  {
    initialRouteName: 'Welcome',
    transitionConfig: getSlideFromRightTransition,
  }
);

const TabNavigator = createMaterialBottomTabNavigator (
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'Inicio',
        tabBarIcon: <Icon icon="🏠" />,
        // tabBarIcon: (obj) => {
        //   const image = obj.focused ? "hola" : "adios";
        //   return <Icon icon = {image}/>

        // },
      },
    },

    Profile: {
      screen: Profile,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      activeBackgroundColor: '#ccc',
    },
  }
);

const SwitchNavigator = createSwitchNavigator (
  {
    App: TabNavigator,
    Initial: Initial,
    Loading: Loading,
  },
  {
    initialRouteName: 'Loading',
  }
);

export default SwitchNavigator;
