import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

function intervalItem(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.appointmentBtn}>12:00</Text>
    </TouchableOpacity>
  );
}


const montserrat_m = 'Montserrat-Medium';
const styles = StyleSheet.create({
    appointmentBtn: {
        backgroundColor: '#FFE082',
        width: 90,
        
        textAlign: 'center',
        fontFamily: montserrat_m,
        fontSize: 16,
        //paddingHorizontal:10,
        paddingVertical: 10,
        borderRadius: 40,
        marginBottom: 15,
        marginRight: 15,

        shadowRadius: 4,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.3,
        elevation: 3,
    },
});

export default intervalItem;
