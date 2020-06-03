import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

function profileMenu(props) {
  return (
    <View style={styles.cardItem}>

      <TouchableOpacity  onPress={props.onPressChangePassword} style={styles.cardDetail}>
        <View style={styles.oneDetailBox}>
          <View style={styles.imgBox}>
            <Image
              style={styles.imgCard}
              source={require('../../../assets/profile/change_password.png')}
            />
          </View>
          <Text style={styles.labelBlack}>Cambiar contraseña </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity  onPress={props.onPressAppointments} style={styles.cardDetail}>
        <View style={styles.oneDetailBox}>
          <View style={styles.imgBox}>
            <Image
              style={styles.imgCard}
              source={require('../../../assets/profile/my_dates.png')}
            />
          </View>
          <Text style={styles.labelBlack}>Mis citas</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity  onPress={props.onPressSelectPayMethod}style={styles.cardDetail}>
        <View style={styles.oneDetailBox}>
          <View style={styles.imgBox}>
            <Image
              style={styles.imgCard}
              source={require('../../../assets/profile/credit_card.png')}
            />
          </View>
          <Text style={styles.labelBlack}>Métodos de pago </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={props.onPressLogout} style={styles.cardDetail}>
        <View style={styles.oneDetailBox}>
          <View style={styles.imgBox}>
            <Image
              style={styles.imgCard}
              source={require('../../../assets/profile/close.png')}
            />
          </View>
          <Text style={styles.labelBlack}>Cerrar sesión</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const montserrat_r = 'Montserrat-Regular';
const styles = StyleSheet.create({
  cardItem: {
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
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

  cardDetail: {
    marginTop: 5,
    marginBottom: 30,
    flexDirection: 'column',
  },
  oneDetailBox: {
    flexDirection: 'row',
  },
  imgBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight:15,
  },
  imgCard: {
    width: 22,
    height: 22,
  },
  labelBlack: {
    fontSize: 16,
    fontFamily: montserrat_r,
    color: 'black',
  },
});

export default profileMenu;
