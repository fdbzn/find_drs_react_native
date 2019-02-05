import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar
} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

class Welcome extends Component {
  componentDidMount(){
    this.focus = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('#078a8c');
    });
  }

  handleGoLogin = () => {
    this.props.navigation.navigate ('Login');
  };

  handleGoStart = () => {
    this.props.dispatch (
      NavigationActions.navigate ({
        routeName: 'Conditions',
        params: {
          originScreen: 'welcome',
        },
      })
    );
  };

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require ('../../../assets//welcome/login_background.png')}
          style={styles.container}
        >
          <View style={styles.boxTop}>
            <Image
              source={require ('../../../assets/yiunic_logo.png')}
              style={styles.logo}
            />
            <Text style={styles.txtLogo}>yiunic</Text>
          </View>

          <View style={styles.boxBottom}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleGoLogin}
            >
              <Text style={styles.buttonLabel}>
                INICIAR SESIÓN
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this.handleGoStart}
            >
              <Text style={styles.buttonLabel}>
                EMPEZAR
              </Text>
            </TouchableOpacity>
          </View>

        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column', //--- apila los hijos
    alignItems: 'center', //--- centra en eje x
    justifyContent: 'flex-start', //-- los hijos inician desde arriba
    backgroundColor: 'white',
    width: '100%',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  boxTop: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  boxBottom: {
    flex: 1,
    paddingTop:"10%",
    width:"100%",
    paddingHorizontal:20,
  },
  logo: {
    //borderWidth: 0.5,
    // borderColor: '#d9bb17',
    width: 300,
    height: 80,
    resizeMode: 'contain',

    marginTop: '30%',
  },
  txtLogo: {
    fontSize: 33,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    width: "100%",
    height:48,
    borderRadius: 3,
    marginBottom: 20,
    flexDirection:"column",
    justifyContent:"center",


    // ios
    backgroundColor: 'white',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 13},
    shadowOpacity: 0.3,
    shadowRadius: 8,

    // android (Android +5.0)
    elevation: 3,
  },
  buttonLabel: {
    fontFamily: 'Montserrat-Medium',
    color: '#d9bb17',
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default connect (null) (Welcome);
