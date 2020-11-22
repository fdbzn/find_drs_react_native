import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

function cardProfile(props) {
  return (
    
      <View style={styles.cardItem}>
        <TouchableOpacity onPress={props.onPressEdit} style={styles.btnEdit}>
          <Image
            style={styles.imgProfile}
            source={require('../../../assets/appointment/edit.png')}
          />
        </TouchableOpacity>
       

        <View style={styles.imgBox}>
          <Image
            style={styles.imgCard}
            source={require('../../../assets/profile/profile_small.png')}
          />
        </View>

        <View style={styles.cardDetail}>
          <Text ellipsizeMode="tail"
              numberOfLines={1} style={styles.name}>
            {props.name} {props.lastName} 
          </Text>
          <View style={styles.oneDetailBox}>
            <Text style={styles.labelBlack}>Cel. </Text>
            <Text style={styles.labelGreen}>{props.phone}</Text>
          </View>
          

          <View style={styles.oneDetailBox}>
            <Text style={styles.labelBlack}>Correo: </Text>
            <Text
              style={styles.labelGreen}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {props.email}
            </Text>
          </View>
         
        </View>
      </View>

  );
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_m = 'Montserrat-Medium';
const montserrat_sb = 'Montserrat-SemiBold';
const styles = StyleSheet.create({
  cardItem: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 25,
    borderRadius: 4,
    backgroundColor: 'white',
  },

  imgProfile: {
    width: 52,
    height: 52,
  },
  btnEdit: {
    zIndex: 1,
    position: 'absolute',
    bottom: 15,
    right: 5,
    width: 46,
    height: 46,
  },
  imgBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imgCard: {
    width: 56,
    height: 56,
    borderRadius: 23,
  },
  cardDetail: {
    marginTop:5,
    flexDirection:"column",
    
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

export default cardProfile;
