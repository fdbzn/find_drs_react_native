import React, {Fragment} from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function Header(props) {
  return (
    
    <SafeAreaView style={styles.statusBar}>
      <View style={styles.container}>
        
        <View style={styles.leftBtn}>{props.children}</View>
        <Image
          source={require('../../../assets/sections/logo_yiunic.png')}
          style={styles.logo}
        />
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#FFE082',
    // ios
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    // android (Android +5.0)
    elevation: 8,
  },
  container: {
    height:64,
    backgroundColor: '#FFE082',
    //paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent:"center",
    alignItems: 'center',
  },
  logo: {
    width: 38,
    height: 49,
    //resizeMode: 'contain',
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
