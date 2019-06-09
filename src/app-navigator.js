// https://medium.com/@ksashrithbhat/custom-transitions-in-react-navigation-screen-to-screen-c2d035aa3c63

import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import {
  createMaterialBottomTabNavigator,
} from 'react-navigation-material-bottom-tabs';
import React from 'react';
import {Text, Image} from 'react-native';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import Home from './home/containers/home';
import SearchAddress from './home/containers/searchAddress';
import ResultDoctors from './home/containers/resultDoctors';
import Specialties from './home/containers/specialties';

import DoctorProfile from './appointment/containers/doctorProfile';
import DrHealthCenterMap from './appointment/containers/drHealthCenterMap';
import WhoAppointment from './appointment/containers/whoAppointment';
import ConfirmProfile from './appointment/containers/confirmProfile';
import SelectFamily from './appointment/containers/selectFamily';
import SelectPayMethod from './appointment/containers/selectPayMethod';
import Checkout from './appointment/containers/checkout';

import Loading from './welcome/containers/loading';
import Login from './welcome/containers/login';
import Welcome from './welcome/containers/welcome';
import ForgotPass from './welcome/containers/forgotPass';
import Register from './welcome/containers/register';
import Conditions from './welcome/containers/conditions';

import Profile from './profile/containers/profile';
import Notifications from './notifications/containers/notifications';

const Main = createStackNavigator (
  {
    Home,
    SearchAddress,
    ResultDoctors: ResultDoctors,
    Specialties,
    DoctorProfile,
    DrHealthCenterMap,
    WhoAppointment,
    ConfirmProfile,
    SelectFamily,
    SelectPayMethod,
    Checkout,
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

const styleFontTab = { fontSize: 12, fontFamily:'Montserrat-Regular' };
const TabNavigator = createMaterialBottomTabNavigator (
  {
    Home: {
      screen: Main,
      navigationOptions: {
        tabBarLabel: <Text style={styleFontTab}> Citas </Text>,
        tabBarIcon: <Image
          source={require ('../assets/sections/citas_icon.png')}
        />,
        // tabBarIcon: (obj) => {
        //   const image = obj.focused ? "hola" : "adios";
        //   return <Icon icon = {image}/>

        // },
      },
    },

    Notifications: {
      screen: Notifications,
      navigationOptions: {
        tabBarLabel: <Text style={styleFontTab}> Notificaciones </Text>,
        tabBarIcon: <Image
          source={require ('../assets/sections/notificaciones_icon.png')}
        />,
        // tabBarIcon: (obj) => {
        //   const image = obj.focused ? "hola" : "adios";
        //   return <Icon icon = {image}/>

        // },
      },
    },

    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: <Text style={styleFontTab}> Perfil </Text>,
        tabBarIcon: <Image
          source={require ('../assets/sections/perfil_icon.png')}
        />,
        // tabBarIcon: (obj) => {
        //   const image = obj.focused ? "hola" : "adios";
        //   return <Icon icon = {image}/>

        // },
      },
    },

    
  },
  {
    activeTintColor: '#3D3F42',
    //activeBackgroundColor: '#808080',
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
