import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationActions} from 'react-navigation';

import CardItemProfile from '../components/cardItemProfile.js';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';

class confirmProfile extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <Header>
          <Close
            onPress={() => {
              navigation.goBack();
            }}
          />
        </Header>
      ),
    };
  };

  handleEdit = () => {
    alert();
  };

  handlenGoToPay = () => {
    
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'SelectPayMethod',
      })
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Datos del paciente</Text>
        
        <CardItemProfile />  
        
        <TouchableOpacity
              onPress={this.handlenGoToPay}
              style={[styles.button, styles.buttonYellow]}
            >
            <Text style={styles.buttonLabel}>SIGUIENTE </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_m = 'Montserrat-Medium';
const montserrat_sb = 'Montserrat-SemiBold';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    //justifyContent: 'center',
    //alignItems: 'center',
    paddingHorizontal:20,
  },
  txtTitle: {
    fontSize: 18,
    color: 'black',
    marginTop: 22,
    marginBottom: 33,
    paddingLeft: 20,
    fontFamily: montserrat_b,
  },

  withPadding: {
    paddingHorizontal: 20,
  },

  button: {
    position:'absolute',
    bottom:0,
    right:20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 48,
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
    flex: 0.5,
    color: 'black',
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: montserrat_m,
  },
});

export default connect(null)(confirmProfile);
