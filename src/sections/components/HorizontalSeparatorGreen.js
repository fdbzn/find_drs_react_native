import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

function HorizontalSeparatorGreen(props) {
  return (
    <View style={styles.separator}>
      <View style={styles.circule_separator}></View>
      <View style={styles.line_separator}></View>
    </View>
  );
}

const styles = {
  separator: {
    flex: 1,
    height:15,
    flexDirection:"row",
    justifyContent:"flex-start"
  },
  line_separator: {
    flex: 4,
    backgroundColor:'#4DB6AC',
    height:1.5,
    marginTop:4.5
  },
  circule_separator:{
    width:10,
    height:10,
    borderRadius: 6, 
    backgroundColor: '#4DB6AC'
  },
};

export default HorizontalSeparatorGreen;
