import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {NavigationActions} from 'react-navigation';

import API from '../../../utils/api';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';


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

  componentDidMount () {
    this.getMyProfile();
  }

  getMyProfile = async ()=>{
    const my_profile = await API.getMyProfile(this.props.token)
    if(my_profile.success == true){
      this.setState({my_profile:my_profile.data});
      
    }
    
  }

  handleEndAppointment = () => {
    console.log(this.props.all)
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'SuccessAppointment',
      })
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Confirmar cita</Text>
        <Text >Cita para:</Text>
        <View>
          <Text >{this.state.my_profile.name}</Text>
          <Text >{this.state.my_profile.lastName}</Text>
        </View>
        <View>
          <Text >{this.props.schedule.date}</Text>
          <Text >{this.props.schedule.startTime}</Text>
        </View>
        <TouchableOpacity
          onPress={this.handleEndAppointment}
          style={[styles.button, styles.buttonYellow]}
        >
          <Text style={styles.buttonLabel}>CONFIRMAR CITA</Text>
        </TouchableOpacity>
        
      </View>
    );
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
    fontSize: 18,
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
  console.log("**",state)
  return {
    token: state.user.token,
    schedule:state.appointment.schedule,
    selected_address:state.homeSearch.selected_address,
    selected_dr:state.homeSearch.selected_dr,
    payment_method:state.payment_method
  };
}
export default connect(mapStateToProps)(checkout);
