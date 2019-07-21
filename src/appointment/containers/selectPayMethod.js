import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';

class selectPayMethod extends Component {
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

  handlenGoToCheckout = () => {
    // --- guarda metodo de pago
    this.props.dispatch({
      type: 'SET_PAY_METHOD',
      payload: {
        name_method:'banamex1',
        card_numbers:'**** **** **** 1294',
      }
    });
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Checkout',
      })
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Datos de pago</Text>
        <TouchableOpacity
          onPress={this.handlenGoToPay}
          style={[styles.buttonYellow, styles.buttonAddNewMethod]}
        >
          <Text style={styles.buttonLabel}>AGREGAR NUEVO</Text>
        </TouchableOpacity>

        <View style={styles.cardItem}>
          <TouchableOpacity onPress={this.handleEdit} style={styles.btnEdit}>
            <Image source={require('../../../assets/appointment/edit.png')} />
          </TouchableOpacity>
          <View style={styles.imgBox}>
            <Image style={styles.imgCard} source={require('../../../assets/appointment/credit_card_icon.png')} />
          </View>

          <View style={styles.cardDetail}>
            <Text style={styles.name}>Banamex Master</Text>
            <Text style={styles.secondaryLabel}>Nombre de usuario</Text>
            <View style={styles.oneDetailBox}>
              <Text style={styles.labelBlack}>Tarjeta: </Text>
              <Text style={styles.labelGreen}>************1358</Text>
            </View>
            <Image style={styles.imgTypeCard} source={require('../../../assets/appointment/visa_debit.png')} />
          </View>
        </View>
        

        <TouchableOpacity
          onPress={this.handlenPayPal}
          style={[styles.button, styles.buttonGray]}
        >
          <Text style={styles.paypalLabel}>Pagar con </Text>
          <Image style={styles.imgPaypal} source={require('../../../assets/appointment/paypal_logo.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handlenGoToCheckout}
          style={[styles.button, styles.buttonYellow]}
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
const montserrat_sb = 'Montserrat-SemiBold';
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

  cardItem: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 10,
    alignSelf: 'center',
    width: '100%',
    minHeight: 150,
    borderBottomWidth: 2,
    borderColor: '#e9e9e9',
    marginBottom: 10,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  btnEdit: {
    zIndex: 1,
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 46,
    height: 46,
  },
  imgBox: {
    width: 65,
    //backgroundColor: 'red',
    flexDirection: 'row',
    //justifyContent: 'center',
  },
  imgCard: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  cardDetail: {
    flex: 1,
  },

  name: {
    fontFamily: montserrat_b,
    fontSize: 18,
    marginBottom: 8,
    color: 'black',
  },

  secondaryLabel: {
    fontFamily: montserrat_m,
    fontSize: 15,
    marginBottom: 5,
    color: '#B4B5B6',
  },

  oneDetailBox: {
    flexDirection: 'row',
  },

  labelBlack: {
    fontSize: 16,
    fontFamily: montserrat_sb,
    color: 'black',
  },
  labelGreen: {
    flex: 1,
    fontSize: 16,
    fontFamily: montserrat_li,
    color: 'black',
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
  imgTypeCard:{
    marginTop:10,
  },
  imgPaypal:{
    //flex:1,
  },
});

export default connect(null)(selectPayMethod);
