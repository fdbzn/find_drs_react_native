import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationActions} from 'react-navigation';

import Header from '../../sections/components/header';
import Close from '../../sections/components/close';


class SuccessAppointment extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <Header>
          <Close
            onPress={() => {
              navigation.goBack();
            }}
            icon="<"
          />
        </Header>
      ),
    };
  };

  handleLocation = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'DrHealthCenterMap',
      })
    );
  };

  handleEndAppointment = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'hola',
      })
    );
  };

  
  render() {
    

    return (
      <View style={styles.container}>
        <View style={styles.gralInfo}>

          <Text style={styles.txtTitle}>¡Cita creada con exito!</Text>
          
          

            <TouchableOpacity
            onPress={this.handleEndAppointment}
            style={[styles.button, styles.buttonYellow]}
          >
            <Text style={styles.buttonLabel}>AGENDAR NUEVA CITA</Text>
          </TouchableOpacity>
        
        </View>

       
        
      </View>
    );
  }
}

const montserrat_m = 'Montserrat-Medium';
const montserrat_b = 'Montserrat-Bold';
const montserrat_r = 'Montserrat-Regular';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  txtTitle: {
    fontSize: 23,
    color: '#17bfa5',
    marginBottom: 12,
    fontFamily: montserrat_b,
    textAlign:'center',
  },
  gralInfo: {
    flexDirection: 'column',
    paddingTop: 35,
    paddingBottom: 10,
    paddingHorizontal: 10,
    //alignSelf: 'center',
    width: '100%',
    minHeight: 100,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    marginBottom: 10,
    borderRadius: 4,
    backgroundColor: 'white',

    // ios
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,

    // android (Android +5.0)
    elevation: 3,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 48,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 3,

    // ios
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    // android (Android +5.0)
    elevation: 3,
  },
  buttonYellow: {
    backgroundColor: '#fee082',
  },
  buttonLabel: {
    flex: 1,
    color: 'black',
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: montserrat_m,
  },
 
});

export default connect()(SuccessAppointment);
