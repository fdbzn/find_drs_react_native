import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import moment from 'moment';

function cardItemProfile(props) {
  const relative_age = moment().diff(props.birthDate, 'years');
  let btnRemove;
  if (props.showBtnRemove) {
    btnRemove = (
      <TouchableOpacity onPress={props.onPressRemove} style={styles.btnRemove}>
        <Image
          style={styles.imgProfile}
          source={require('../../../assets/appointment/delete.png')}
        />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={props.onPress} >
      <View style={styles.cardItem}>
        <TouchableOpacity onPress={props.onPressEdit} style={styles.btnEdit}>
          <Image
            style={styles.imgProfile}
            source={require('../../../assets/appointment/edit.png')}
          />
        </TouchableOpacity>
        {btnRemove}

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
          <Text style={styles.name}>
            {props.name} {props.lastName}
          </Text>
          <Text style={styles.secondaryLabel}>Edad: {relative_age} años</Text>
          <Text style={styles.secondaryLabel}>Sexo: {props.gender}</Text>
          <View style={styles.oneDetailBox}>
            <Text style={styles.labelBlack}>Telefono. </Text>
            <Text style={styles.labelGreen}>{props.phone}</Text>
          </View>
          {/*

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
          */}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_m = 'Montserrat-Medium';
const montserrat_sb = 'Montserrat-SemiBold';
const styles = StyleSheet.create({
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

  imgProfile: {
    width: 42,
    height: 42,
  },
  btnEdit: {
    zIndex: 1,
    position: 'absolute',
    top: 15,
    right: 5,
    width: 46,
    height: 46,
  },
  btnRemove: {
    zIndex: 1,
    position: 'absolute',
    top: 15,
    right: 50,
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
});

export default cardItemProfile;
