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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Datos de pago</Text>
        <TouchableOpacity
          onPress={this.handlenGoToPay}
          style={[styles.button, styles.buttonYellow]}
        >
          <Text style={styles.buttonLabel}>AGREGAR NUEVO</Text>
        </TouchableOpacity>

        <View style={styles.cardItem}>
          <TouchableOpacity onPress={this.handleEdit} style={styles.btnEdit}>
            <Image source={require('../../../assets/appointment/edit.png')} />
          </TouchableOpacity>
          <View style={styles.imgBox}>
            <Image
              style={styles.imgCard}
              source={{
                uri:
                  'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
              }}
            />
          </View>

          <View style={styles.cardDetail}>
            <Text style={styles.name}>Mauricio francisco Guerra Gonzalez</Text>
            <Text style={styles.secondaryLabel}>Edad: 29 años</Text>
            <Text style={styles.secondaryLabel}>Sexo: Masculino</Text>
            <View style={styles.oneDetailBox}>
              <Text style={styles.labelBlack}>Cel. </Text>
              <Text style={styles.labelGreen}>5536882908</Text>
            </View>
            <View style={styles.oneDetailBox}>
              <Text style={styles.labelBlack}>Correo: </Text>
              <Text
                style={styles.labelGreen}
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                daniel.bazan@gmail.com
              </Text>
            </View>
          </View>
        </View>
        

        <TouchableOpacity
          onPress={this.handlenGoToPay}
          style={[styles.button, styles.buttonYellow]}
        >
          <Text style={styles.buttonLabel}>PAGAR CON PAYPAL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handlenGoToPay}
          style={[styles.button, styles.buttonYellow]}
        >
          <Text style={styles.buttonLabel}>CONFIRMAR CITA</Text>
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
    justifyContent:'center'
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

  cardItem: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    width: '100%',
    minHeight: 150,
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
  btnEdit: {
    zIndex: 1,
    position: 'absolute',
    top: 10,
    right: 10,
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
    fontFamily: montserrat_sb,
    color: '#00BFA5',
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
  buttonLabel: {
    flex: 0.5,
    color: 'black',
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: montserrat_m,
  },
});

export default connect(null)(selectPayMethod);
