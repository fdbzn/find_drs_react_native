import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationActions} from 'react-navigation';
import moment from 'moment';

import Header from '../../sections/components/header';
import Close from '../../sections/components/close';


class checkout extends Component {
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

  componentDidMount () {
    console.log(this.props.all)
  }

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
        routeName: 'SuccessAppointment',
      })
    );
  };

  
  render() {
    const appointment_date = this.props.schedule.date;
    const icon_type_card = this.props.payment_method.brand == 'VISA'
      ? require('../../../assets/appointment/visa_debit.png')
      : require('../../../assets/appointment/master_card.png');

    return (
      <View style={styles.container}>
        <View style={styles.gralInfo}>

          <Text style={styles.txtTitle}>Confirma tu cita</Text>
          
          <View style={styles.rowUser}>
            <Text style={styles.toPatient} >Cita para: </Text>
            <Text style={styles.patientName}>{this.props.patient.name} {this.props.patient.lastName}</Text>
          </View>

          <View style={styles.rowItem}>

            <Text style={styles.drName} >
              Dr. {this.props.selected_dr.name} {this.props.selected_dr.lastName} 
              - {this.props.selected_dr.workplace.speciality.name} 
            </Text>
           
          </View>

          <View style={styles.rowItem}>
            <Text style={styles.dateSelected} >{moment(appointment_date.substring(0, 10)).format( 'DD MMMM' )} </Text>
            <Text style={styles.hourSelected} >{this.props.schedule.startTime} hrs</Text>
          </View>

          <View style={styles.rowItem}>
            <Text style={styles.docAddress}>
              {this.props.selected_dr.workplace.healthCenter.address}
            </Text>
            <TouchableOpacity
              onPress={this.handleLocation}
              style={styles.btnDrLocation}
            >
              <Image
                style={styles.iconLocation}
                source={require('../../../assets/appointment/place.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.rowItem}>
            <Text style={styles.costAppoint}>
              Costo: ${this.props.selected_dr.workplace.price}
            </Text>
          </View>

          <View style={styles.rowItem}>
            <Image
                style={styles.imgTypeCard} 
                source={icon_type_card} 
                />
            <Text style={styles.labelLast4}>************{this.props.payment_method.last4}</Text>
          </View>
        
        </View>

        <TouchableOpacity
          onPress={this.handleEndAppointment}
          style={[styles.button, styles.buttonYellow]}
        >
          <Text style={styles.buttonLabel}>CONFIRMAR MI CITA</Text>
        </TouchableOpacity>
        
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
    //justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  toPatient:{
    color:'black',
    fontSize:20,
    fontFamily: montserrat_b,
  },
  labelLast4:{
    color:'black',
    fontSize:17,
    fontFamily: montserrat_r,
  },
  dateSelected:{
    color:'black',
    fontSize:17,
    fontFamily: montserrat_b,
  },
  costAppoint:{
    color:'#17bfa5',
    fontSize:17,
    fontFamily: montserrat_b,
  },
  hourSelected:{
    color:'#17bfa5',
    fontSize:17,
    fontFamily: montserrat_b,
  },
  drName:{
    color:'black',
    fontSize:17,
    fontFamily: montserrat_b,
  },
  patientName:{
    fontSize:17,
    fontFamily: montserrat_m,
    color:'black',
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
  docAddress: {
    flex:1,
    fontFamily: montserrat_m,
    fontSize: 13,
    marginBottom: 5,
  },
  

  txtTitle: {
    fontSize: 23,
    color: '#17bfa5',
    marginBottom: 12,
    fontFamily: montserrat_b,
    textAlign:'center',
  },
  rowUser:{
    paddingBottom:10,
  },
  rowItem:{
    flexDirection: 'row',
    alignItems:'center',
    paddingBottom:10,
  },
  
  iconLocation:{
    width:43,
    height:43,
  },
  
  btnDrLocation:{
    marginLeft:10,
  },
  imgTypeCard:{
    marginRight:10
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
  buttonGreen: {
    backgroundColor: '#17bfa5',
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


function mapStateToProps (state) {
  return {
    all: state,
    patient: state.appointment.patient,
    main_user: state.appointment.main_user,
    selected_dr: state.homeSearch.selected_dr,
    schedule: state.appointment.schedule,
    payment_method: state.appointment.payment_method,
  };
}
export default connect(mapStateToProps)(checkout);
