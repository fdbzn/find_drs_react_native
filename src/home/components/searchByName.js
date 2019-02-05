import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
  } from 'react-native';
import { connect } from 'react-redux';

class SearchByName extends Component {
  
  render() {
    return (
      <View style={styles.scene}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        backgroundColor:"white",
    },
});


export default connect(null)(SearchByName);
