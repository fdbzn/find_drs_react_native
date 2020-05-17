import React, {Component} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {LoginManager} from 'react-native-fbsdk';
import {NavigationActions} from 'react-navigation';

import API from '../../../utils/api';
import Validate from '../../../utils/validate';

class FormLogin extends Component {
  state = {
    email: '',
    password: '',
  };

  handleGoForgotPass = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'ForgotPass',
      })
    );
  };

  handleGoCreateUser = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Register',
      })
    );
  };

  validate_login_form = () => {
    let validation = {
      success: false,
      error_desc: true,
    };
    const email = this.state.email;
    const password = this.state.password;

    if (!Validate.isEMailAddr(email)) {
      validation.error_desc = 'Ingresa un email válido';
    } else if (Validate.isEmpty(password)) {
      validation.error_desc = 'Ingresa un password';
    } else {
      validation.success = true;
    }

    return validation;
  };

  handleLogin = async () => {
    // --- check login in server
    const login = await API.login(this.state.email, this.state.password);
    validation_form = this.validate_login_form();

    if (validation_form.success === true) {
      if (login.success === true) {
        this.props.dispatch({
          type: 'SET_USER',
          payload: {
            is_trial: false,
            token: login.data.token,
            username: 'userconlogin',
          },
        });
        this.props.dispatch(
          NavigationActions.navigate({
            routeName: 'Loading',
          })
        );
      } else {
        alert(login.description);
      }
    } else {
      alert(validation_form.error_desc);
    }
  };

  handleFacebookLogin = () => {
    var self = this;

    LoginManager.logInWithReadPermissions(['email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelado');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString()
          );
          self.props.dispatch({
            type: 'SET_USER',
            payload: {
              token: 'MY_SERVER_TOKEN',
              username: 'userconFBlogin',
            },
          });
          this.props.dispatch(
            NavigationActions.navigate({
              routeName: 'Loading',
            })
          );

          // --- verificar si existe en la base de datos
          // --- si esta en la base, inicia sesion e ingresa a home
          // --- si no esta en la base, registra e inicia session
        }
      },
      function (error) {
        alert('Login fail with error: ' + error);
      }
    );
  };

  render() {
    return (
      <ScrollView style={styles.container_login}>
        <Text style={styles.label}>Correo</Text>
        <TextInput
          style={styles.input}
          //placeholder="Nombre de usuario"
          //placeholderTextColor="gray"
          keyboardType={'email-address'}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          onChangeText={(email) => this.setState({email})}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            this.secondTextInput.focus();
          }}
          blurOnSubmit={false}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          //placeholder="Contraseña"
          //placeholderTextColor="gray"
          autoCapitalize="none"
          style={styles.input}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          ref={(input) => {
            this.secondTextInput = input;
          }}
          onChangeText={(password) => this.setState({password})}
        />
        <TouchableOpacity
          style={styles.btnForget}
          onPress={this.handleGoForgotPass}
        >
          <Text style={styles.link_forget}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleLogin}
          style={[styles.button, styles.buttonIniciar]}
        >
          <Text style={styles.buttonLabel}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleGoCreateUser}
          style={[styles.button, styles.buttonCreate]}
        >
          <Text style={styles.buttonLabel}>CREAR CUENTA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleFacebookLogin}
          style={styles.buttonFB}
        >
          <Image source={require('../../../assets/welcome/fb_login.png')} />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const montserrat_m = 'Montserrat-Medium';
const montserrat_r = 'Montserrat-Regular';
const montserrat_b = 'Montserrat-Bold';
const styles = StyleSheet.create({
  container_login: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginTop: 20,
  },
  label: {
    marginTop: 20,
    paddingHorizontal: 15,
    color: '#b1b1b1',
    fontSize: 12,
    fontFamily: montserrat_r,
  },

  input: {
    paddingTop: 0,
    width: '100%',
    height: 35,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#666',
    color: 'black',
    fontSize: 16,
  },

  btnForget: {
    //backgroundColor:"#ccc",
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 60,
  },

  link_forget: {
    textAlign: 'right',
    alignSelf: 'flex-end',
    color: '#cfb562',
    borderBottomWidth: 1,
    borderBottomColor: '#cfb562',
    fontSize: 12,
    fontFamily: montserrat_r,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 48,
    marginBottom: 20,
    borderRadius: 3,

    // ios
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    // android (Android +5.0)
    elevation: 3,
  },
  buttonIniciar: {
    backgroundColor: '#fee082',
  },
  buttonCreate: {
    backgroundColor: '#17bfa5',
  },
  buttonLabel: {
    flex: 0.5,
    color: 'black',
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: montserrat_m,
  },
  buttonLabelFB: {
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    fontFamily: montserrat_m,
  },

  buttonFB: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#445f95',
    //width: '70%',
    width: '70%',
    height: 36,
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 3,

    // ios
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    // android (Android +5.0)
    elevation: 3,
  },
});

export default connect(null)(FormLogin);
