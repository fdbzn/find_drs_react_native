import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from 'react-native';
import {connect} from 'react-redux';
import DatePicker from 'react-native-datepicker';

import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import GenreDropDown from '../../sections/components/genreDropDown';
import API from '../../../utils/api';
import Validate from '../../../utils/validate';

class Register extends Component {
  state = {
    name: '',
    last_name: '',
    email: '',
    birthdate: '',
    sex: '',
    phone: '',
    password: '',
    password_confirm: '',
  };

  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <Header>
          <Close
            onPress={() => {
              navigation.goBack();
            }}
          />
        </Header>
      ),
    };
  };

  setSexValue = (dropdownVal) => {
    this.setState({sex: dropdownVal});
  };

  validate_register_form = () => {
    let validation = {
      success: false,
      error_desc: true,
    };

    if (Validate.isEmpty(this.state.name)) {
      validation.error_desc = 'Ingresa un nombre';
    } else if (Validate.isEmpty(this.state.last_name)) {
      validation.error_desc = 'Ingresa apellido ';
    } else if (Validate.isEmpty(this.state.email)) {
      validation.error_desc = 'Ingresa un e-mail';
    } else if (!Validate.isEMailAddr(this.state.email)) {
      validation.error_desc = 'Ingresa un e-mail válido';
    } else if (Validate.isEmpty(this.state.birthdate)) {
      validation.error_desc = 'Ingresa un tu fecha de nacimiento';
    } else if (Validate.isEmpty(this.state.sex)) {
      validation.error_desc = 'Ingresa un sexo';
    } else if (Validate.isEmpty(this.state.phone)) {
      validation.error_desc = 'Ingresa un teléfono';
    } else if (Validate.isEmpty(this.state.password)) {
      validation.error_desc = 'Ingresa un contraseña';
    } else if (Validate.isEmpty(this.state.password_confirm)) {
      validation.error_desc = 'Ingresa una contraseña de confirmación';
    } else if (
      !Validate.isEqual(this.state.password, this.state.password_confirm)
    ) {
      validation.error_desc = 'Las contraseñas no coinciden';
    } else {
      validation.success = true;
    }

    return validation;
  };

  handleRegisterUser = async () => {
    let validate_register = this.validate_register_form();
    if (validate_register.success === true) {
      // --- check login in server
      const createUser = await API.createUser(
        this.state.name,
        this.state.last_name,
        this.state.email,
        this.state.birthdate,
        this.state.sex,
        this.state.phone,
        this.state.password
      );

      if( createUser.success == true ){
        // --- hacer login
        const email = createUser.data.email;
        const password = this.state.password;
        const login = await API.login(email, password);
       
        if( login.success === true ){
          this.props.dispatch ({
            type: 'SET_USER',
            payload: {
              is_trial: false,
              token: login.data.token,
              username: 'userconlogin',
            },
          });
          this.props.navigation.navigate ('Loading');
        }else{
          alert(login.description)
        }
      }else{
        alert( createUser.description );
      }

    } else {
      alert(validate_register.error_desc);
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <Text style={styles.mainTitle}>Registro</Text>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType={'next'}
            onSubmitEditing={() => {
              this.lastName.focus();
            }}
            blurOnSubmit={false}
            onChangeText={(name) => this.setState({name})}
          />
          <Text style={styles.label}>Apellido</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType={'next'}
            ref={(input) => {
              this.lastName = input;
            }}
            onSubmitEditing={() => {
              this.email.focus();
            }}
            blurOnSubmit={false}
            onChangeText={(last_name) => this.setState({last_name})}
          />
          <Text style={styles.label}>Correo electrónico</Text>
          <TextInput
            style={styles.input}
            keyboardType={'email-address'}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            ref={(input) => {
              this.email = input;
            }}
            onChangeText={(email) => this.setState({email})}
          />
          <Text style={styles.label}>Fecha de nacimiento</Text>
          <DatePicker
            style={styles.input_date_picker}
            date={this.state.birthdate}
            mode="date"
            placeholder=" "
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            showIcon={false}
            customStyles={{
              dateInput: {
                //marginLeft: 36,
                borderWidth: 0,
              },
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => {
              this.setState({birthdate: date});
            }}
          />

          <View style={styles.rowForm}>
            <View style={styles.columnLeft}>
              <Text style={styles.label}>Sexo</Text>
              <GenreDropDown setValueInForm={this.setSexValue} />
            </View>
            <View style={styles.columnRight}>
              <Text style={styles.label}>Teléfono</Text>
              <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                underlineColorAndroid="transparent"
                returnKeyType={'next'}
                ref={(input) => {
                  this.phone = input;
                }}
                onSubmitEditing={() => {
                  this.password.focus();
                }}
                blurOnSubmit={false}
                onChangeText={(phone) => this.setState({phone})}
              />
            </View>
          </View>

          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            returnKeyType={'next'}
            ref={(input) => {
              this.password = input;
            }}
            onSubmitEditing={() => {
              this.password_confirm.focus();
            }}
            blurOnSubmit={false}
            onChangeText={(password) => this.setState({password})}
          />
          <Text style={styles.label}>Confirmar contraseña</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            returnKeyType={'next'}
            ref={(input) => {
              this.password_confirm = input;
            }}
            onChangeText={(password_confirm) =>
              this.setState({password_confirm})
            }
          />
        </ScrollView>
        <View style={styles.withPadding}>
          <TouchableOpacity
            onPress={this.handleRegisterUser}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>REGISTRATE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',

    //minHeight: 700, // --- evita error de minimizar demasiado la pantalla con keyboard
    backgroundColor: 'white',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    width: '100%',
  },
  mainTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 15,
    //marginTop: 15,
  },
  rowForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnLeft: {
    width: '35%',
    //backgroundColor:"blue",
  },
  columnRight: {
    width: '60%',
    //backgroundColor:"red",
  },
  label: {
    marginTop: 20,
    paddingHorizontal: 15,
    color: '#b1b1b1',
  },
  input: {
    color: 'black',
    fontSize: 17,
    paddingTop: 0,
    width: '100%',
    height: 35,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#666',
  },
  input_date_picker: {
    paddingTop: 0,
    width: '100%',
    height: 35,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#666',
  },

  withPadding: {
    width: '100%',
    paddingHorizontal: 10,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 5,
    // ios
    shadowOffset: {width: 0, height: 13},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    // android (Android +5.0)
    elevation: 3,
    backgroundColor: '#fee082',
  },

  buttonLabel: {
    flex: 0.5,
    color: 'black',
    padding: 10,
    fontSize: 13,
    textAlign: 'center',
  },
});

export default connect(null)(Register);
