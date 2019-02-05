import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View, Text} from 'react-native';

function doctorsItem (props) {
  return (
    <View style={styles.doctorItem}>

      <View style={styles.imgDocBox}>
        <Icon style={styles.imgDoc} name="rocket" />
      </View>

      <View style={styles.doctorDetail}>
        <Text>Dr. {props.name}</Text>
        <View>
          <Text>estrellas</Text>
          <Text>precio</Text>
        </View>
        <Text>Direccion</Text>
        <Text>Disponibilidad</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create ({
  doctorItem: {
    flexDirection:"row",
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    width: '90%',
    minHeight: 150,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    marginBottom: 10,
    borderRadius: 4,
    // ios
    shadowRadius: 4,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 13},
    shadowOpacity: 0.3,
    shadowRadius: 9,
    // android (Android +5.0)
    elevation: 7,
  },
  imgDocBox:{
    width:70,
    backgroundColor:"red",
    flexDirection:"row",
    justifyContent:"center",
  },
  imgDoc:{
    fontSize:50,
  },
  doctorDetail:{
    flex:1,
    marginLeft:15
  },
});

export default doctorsItem;
