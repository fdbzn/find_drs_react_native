import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationActions} from 'react-navigation';
import moment from 'moment';

import API from '../../../utils/api';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import openpay from 'react-native-openpay';
openpay.setup('m2jlbaqfthsawos7lwef', 'pk_052ad5194681465191e163e94f4c6ace');

class checkout extends Component {
  state = {
    my_profile:{}
  }

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

  handleEndAppointment = async () => {
    openpay.getDeviceSessionId().then(async (device_session_id) => {
      let userAppointment = {};
      if(this.props.main_user){ 
        userAppointment = await API.userAppointment( this.props.token, this.props.payment_method.id, device_session_id, this.props.schedule._id );
      }else{
        //fix: openpay method
        //userAppointment = await API.userRelativeAppointment( this.props.token, this.props.payment_method.id, his.props.schedule._id, this.props.patient._id );
      }
      
      console.log(userAppointment)
      this.props.dispatch(
        NavigationActions.navigate({
          routeName: 'SuccessAppointment',
        })
      );
    });
    
  };

  
  render() {
    console.log("check", this.props);

    const appointment_date = this.props.schedule.date;
    let icon_type_card; 
    if( this.props.payment_method.brand == 'visa' ){
      icon_type_card = require('../../../assets/appointment/visa_debit.png');
    }else if( this.props.payment_method.brand == 'mastercard'){
      icon_type_card = require('../../../assets/appointment/master_card.png');
    }
   

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
            <Text style={styles.labelLast4}>************{this.props.payment_method.card_number.substring( 12,16 )}</Text>
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
    patient: state.appointment.patient,
    main_user: true,
    selected_dr: state.homeSearch.selected_dr,
    schedule: state.appointment.schedule,
    payment_method: state.appointment.payment_method,
    token: state.user.token,
  };
}
export default connect(mapStateToProps)(checkout);
