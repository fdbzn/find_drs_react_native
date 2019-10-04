import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationActions} from 'react-navigation';

import CreditCardList from '../components/creditCardList'
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import API from '../../../utils/api';

class selectPayMethod extends Component {
  state = {
    btn_color : {backgroundColor: '#ccc'},
    btn_state : true,
  }


  async componentDidMount () {
    const credit_cards = await API.getPaymentMethods(this.props.token);
    
    this.props.dispatch ({
      type: 'SET_CREDIT_CARDS',
      payload: {
        credit_cards: credit_cards.data,
      },
    });
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
  
  
  handleAddNewMethod = () =>{
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'NewPayMethod',
      })
    );
  }
  

  handlenGoToCheckout = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Checkout',
      })
    );
  };

  payMethodSelected = (item_pay_method) => {
    // --- guarda metodo de pago
    this.props.dispatch({
      type: 'SET_PAY_METHOD',
      payload: {
        payment_method : item_pay_method
      }
    });

    // --- habilitar boton para continuar
    this.setState({
      btn_color: {backgroundColor: '#fee082'},
      btn_state: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Datos de pago</Text>
        <TouchableOpacity
          onPress={this.handleAddNewMethod}
          style={[styles.buttonYellow, styles.buttonAddNewMethod]}
        >
          <Text style={styles.buttonLabel}>AGREGAR NUEVO</Text>
        </TouchableOpacity>

        <CreditCardList 
          payMethodSelected={this.payMethodSelected} 
        />        

        {/* 
        <TouchableOpacity
          onPress={this.handlenPayPal}
          style={[styles.button, styles.buttonGray]}
        >
          <Text style={styles.paypalLabel}>Pagar con </Text>
          <Image style={styles.imgPaypal} source={require('../../../assets/appointment/paypal_logo.png')} />
        </TouchableOpacity>
        */}
        <TouchableOpacity
          disabled={this.state.btn_state}
          onPress={this.handlenGoToCheckout}
          style={[styles.button, this.state.btn_color]}
          
        >
          <Text style={styles.buttonLabel}>IR A CONFIRMACION</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_m = 'Montserrat-Medium';
const montserrat_li = 'Montserrat-Light';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  txtTitle: {
    fontSize: 18,
    color: 'black',
    marginTop: 20,
    marginBottom: 15,
    paddingLeft: 20,
    fontFamily: montserrat_b,
  },

  withPadding: {
    paddingHorizontal: 20,
  },


  buttonAddNewMethod:{
    width:210,
    marginLeft:'auto',
    marginRight:20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36, 
    borderRadius: 3,

    // ios
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    // android (Android +5.0)
    elevation: 3,
  },

  button: {
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
  
  buttonGray:{
    backgroundColor: '#E4E4E4',
  },

  buttonLabel: {
    flex: 1,
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: montserrat_m,
  },
  paypalLabel:{
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: montserrat_li,
    marginRight:5,
  },
  
});

function mapStateToProps (state) {
  return {
    token: state.user.token,
  }
}

export default connect(mapStateToProps)(selectPayMethod);
