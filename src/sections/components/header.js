import React, {Fragment} from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function Header(props) {
  return (
    <View>
      <SafeAreaView style={styles.statusBar}>
        <View style={styles.container}>
          
          <View style={styles.leftBtn}>{props.children}</View>
          <Image
            source={require('../../../assets/yiunic_logo.png')}
            style={styles.logo}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  statusBar: {
    //backgroundColor: 'red',
    paddingBottom:30,
    height:72,
  },
  container: {
    height:65,
    backgroundColor: '#fee082',
    // ios
    shadowOffset: {width: 0, height: 13},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    // android (Android +5.0)
    elevation: 8,
    
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent:"center",
  },
  logo: {
    width: 80,
    height: 35,
    resizeMode: 'contain',
  },
  leftBtn: {
    top:10,
    left:10,
    width: 50,
    height: 45,
    flexDirection:"column",
    justifyContent:"center",
    position:"absolute",
    
  }
})

export default Header;
