import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import API from '../../../utils/api';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';

class cancelAppointment extends Component {
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


  handleCancelAppointment = async ()=>{
    console.log(this.props.selected_appointment_id)
    const cancel_appointment = await API.cancelAppointment( this.props.selected_appointment_id, this.props.token )
    
    if(cancel_appointment.success == true){
    //   // --- get my list relatives
    //   const my_relatives = await API.getMyRelatives( this.props.token )
    //   this.props.dispatch ({
    //   type: 'SET_RELATIVES',
    //   payload: {
    //     my_relatives: my_relatives.data,
    //     },
    //   });

      this.props.dispatch(
        NavigationActions.navigate({
          routeName: 'Doctors',
        })
      );
    }else{
        alert(cancel_appointment.description)
    }

  }

  handleCancel = ()=>{
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Doctors',
      })
    );
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>
          ¿Estas seguro de querer cancelar la cita? 
          Si cancelas en un rango menor a 24hrs antes de la cita 
          se hara un cobro por el 25% de la consulta.
        </Text>
        <TouchableOpacity
          onPress={this.handleCancel}
          style={[styles.button, styles.buttonYellow]}
        >
          <Text style={styles.buttonLabel}>VOLVER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleCancelAppointment}
          style={[styles.button, styles.buttonGreen]}
        >
          <Text style={styles.buttonLabel}>CANCELAR CITA</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const montserrat_m = 'Montserrat-Medium';
const montserrat_b = 'Montserrat-Bold';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  txtTitle: {
    fontSize: 16,
    color: 'black',
    //marginTop: 80,
    marginBottom: 33,
    paddingLeft: 16,
    fontFamily: montserrat_b,
  },
  button: {
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
    backgroundColor: '#ccc',
  },
  buttonGreen: {
    backgroundColor: 'red',
  },
  buttonLabel: {
    flex: 0.5,
    color: 'white',
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: montserrat_m,
  },
})

function mapStateToProps (state) {
  return {
    selected_appointment_id : state.doctors.selected_appointment_id,
    token: state.user.token,
  }
}

export default connect(mapStateToProps)(cancelAppointment)
