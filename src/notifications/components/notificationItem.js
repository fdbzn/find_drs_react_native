import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

function notificationItem (props) {
 
    return (
      <TouchableOpacity
        onPress={props.onPress}
      >
        <View style={styles.cardItem}>
          <View style={styles.imgBox}>
            <Image
              style={styles.imgCard}
              source={require('../../../assets/notifications/notification.png')}
            />
          </View>

          <View style={styles.cardDetail}>
            <Text style={styles.name}>Tu cita esta proxima</Text>
            <Text style={styles.secondaryLabel}>Dr. Manuel Villa 2pm</Text>
            
          </View>
        </View>
      </TouchableOpacity>
    );
  
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_m = 'Montserrat-Medium';
const montserrat_li = 'Montserrat-Light';
const montserrat_sb = 'Montserrat-SemiBold';
const styles = StyleSheet.create({
  
  cardItem: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignSelf: 'center',
    width: '100%',
    minHeight: 50,
    borderBottomWidth: 2,
    borderColor: '#e9e9e9',
    marginBottom: 10,
    backgroundColor: 'white',
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
  
});

export default notificationItem;
