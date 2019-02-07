import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

class Notifications extends Component {
 
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Notificaciones</Text>
        
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})



export default connect()(Notifications)
