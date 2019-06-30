import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

class appointmentIntervals extends Component {
  state = {
    appointment_date: new Date(),
  };

  curdate = () => {
    return new Date();
  };

  last_date_enabled = $days => {
    var dt = new Date();
    dt.setDate(dt.getDate() + $days);
    return dt;
  };

  handleInitAppointment = () => {
    // --- guarda la hora de cita
    this.props.dispatch({
      type: 'SET_DR_PROFILE',
      payload: {
        schedule: '31 de sep 13:30',
        address: 'insurgentes 553',
        geo_address: '',
        dr_name: 'Juan Pablo Rodriguez',
        cost: '850',
      },
    });
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'WhoAppointment',
      })
    );
  };
  render() {
    return (
      <View style={styles.sectionAppointment}>
        <Text style={styles.subtitle}>Agendar cita</Text>
        <View style={styles.boxDate}>
          <Text style={styles.txtDate}>Fecha:</Text>
          <DatePicker
            style={styles.selected_day}
            date={this.state.appointment_date}
            mode="date"
            placeholder="Hoy"
            format="D/MM/YYYY"
            minDate={this.curdate()}
            maxDate={this.last_date_enabled(15)}
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            showIcon={true}
            iconSource={require('../../../assets/appointment/calendar_icon.png')}
            customStyles={{
              dateInput: {
                //marginLeft: 36,
                borderWidth: 0,
              },
            }}
            onDateChange={date => {
              console.log(date);
              this.setState({appointment_date: date});
            }}
          />
        </View>
        <View style={styles.boxAppointments}> 
            <TouchableOpacity onPress={this.handleInitAppointment}>
            <Text style={styles.appointmentBtn}>12:00</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.appointmentBtn}>13:00</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.appointmentBtn}>16:00</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_m = 'Montserrat-Medium';
const montserrat_li = 'Montserrat-Light';
const styles = StyleSheet.create({
  subtitle: {
    fontSize: 21,
    fontFamily: montserrat_b,
    color: 'black',
  },

  sectionAppointment: {
    flexDirection: 'column',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 30,
    width: '100%',
    minHeight: 100,
    borderBottomWidth: 2,
    borderColor: '#e9e9e9',
    marginBottom: 25,
    borderRadius: 4,
    backgroundColor: 'white',
  },

  boxDate: {
    flexDirection: 'row',
    marginTop: 15,
  },

  txtDate: {
    fontFamily: montserrat_m,
    fontSize: 16,
    color: 'black',
  },
  selected_day: {
    fontFamily: montserrat_li,
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
    //marginRight : 15,
    //backgroundColor:'blue',
    borderWidth: 1,
    borderColor: '#e9e9e9',
    borderRadius: 7,
    marginTop: -9,
    width: 140,
  },
  iconDefault: {
    color: '#4DB6AC',
    fontSize: 16,
    alignSelf: 'center',
  },
  boxAppointments: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  appointmentBtn: {
    backgroundColor: '#FFE082',
    width: 90,
    textAlign: 'center',
    fontFamily: montserrat_m,
    fontSize: 16,
    //paddingHorizontal:10,
    paddingVertical: 10,
    borderRadius: 40,
    marginBottom: 15,
    marginRight: 15,

    shadowRadius: 4,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    elevation: 3,
  },
});

function mapStateToProps(state) {
  return {
    
  };
}

export default connect(mapStateToProps)(appointmentIntervals);
