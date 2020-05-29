import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../../sections/components/header';

class Profile extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <Header></Header>
      ),
    };
  };
  
  handleLogout = () => {
    this.props.dispatch({
      type: 'REMOVE_USER',
    })
    this.props.navigation.navigate('Loading');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Perfil</Text>

      </View>
    )
  }
}


const montserrat_b = 'Montserrat-Bold';
const montserrat_m = 'Montserrat-Medium';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    //justifyContent: 'center',
    //alignItems: 'center',
    paddingHorizontal:20,
  },
  txtTitle: {
    fontSize: 18,
    color: 'black',
    marginTop: 22,
    marginBottom: 33,
    paddingLeft: 20,
    fontFamily: montserrat_b,
  },

  withPadding: {
    paddingHorizontal: 20,
  },

})

function mapStateToProps(state) {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps)(Profile)
