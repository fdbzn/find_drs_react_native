import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import Header from '../../sections/components/header';
import Close from '../../sections/components/close';

class editRelative extends Component {
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

  render () {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.sectionAbout}>
            <Text style={[styles.subtitle, styles.subAbout]}>
              Estas seguro de borrar a lallala
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={this.handlenGoToCheckout}
          style={[styles.button, styles.buttonYellow]}
        >
          <Text style={styles.buttonLabel}>CANCELAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handlenGoToCheckout}
          style={[styles.button, styles.buttonYellow]}
        >
          <Text style={styles.buttonLabel}>CONFIRMAR</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const montserrat_b = 'Montserrat-Bold';
const montserrat_li = 'Montserrat-Light';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 21,
    fontFamily: montserrat_b,
    color: 'black',
  },

  subAbout: {
    marginBottom: 15,
  },
  sectionAbout: {
    flexDirection: 'column',
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    minHeight: 100,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    marginBottom: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    fontFamily: montserrat_li,
    fontSize: 16,

    // ios
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,

    // android (Android +5.0)
    elevation: 3,
  },
  button: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48, 
    borderRadius: 3,
    marginHorizontal:20,
    marginBottom:15,

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
  
})

function mapStateToProps (state) {
  return {
    edit_profile: state.appointment.edit_profile
  }
}

export default connect(mapStateToProps)(editRelative)
