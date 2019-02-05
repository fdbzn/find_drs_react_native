import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function Close(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.container}
    >
      <Text style={styles.button}>
        <Icon style={styles.iconClose} name="chevron-left" />
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'red',
    width: 25,
    height: 40,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconClose:{
    fontSize:30,
    color:"black",
  },
})

export default Close
