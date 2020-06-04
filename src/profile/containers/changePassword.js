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

class changePassword extends Component {
  state = {
    password : '',
    new_password : ''
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

  validate_edit_form = () => {
    let validation = {
      success: false,
      error_desc: true,
    };

    if (Validate.isEmpty(this.state.password)) {
      validation.error_desc = 'Ingresa la contraseña anterior';
    } else if (Validate.isEmpty(this.state.new_password)) {
      validation.error_desc = 'Ingresa la nueva contraseña';
    } else {
      validation.success = true;
    }

    return validation;
  };

  handleEditUser = async () => {
    let validate_edit = this.validate_edit_form();
    if (validate_edit.success === true) {
        this.props.navigation.navigate ('Profile');
     
    } else {
      alert(validate_edit.error_desc);
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <Text style={styles.mainTitle}>Cambiar contraseña</Text>
          <Text style={styles.label}>Contraseña antigua</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            returnKeyType={'next'}
            ref={(input) => {
              this.password = input;
            }}
            onSubmitEditing={() => {
              this.new_password.focus();
            }}
            blurOnSubmit={false}
            onChangeText={(password) => this.setState({password})}
          />
          <Text style={styles.label}>Contraseña nueva</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            returnKeyType={'next'}
            ref={(input) => {
              this.new_password = input;
            }}
            onChangeText={(new_password) =>
              this.setState({new_password})
            }
          />

          
        </ScrollView>
        <View style={styles.withPadding}>
          <TouchableOpacity
            onPress={this.handleEditUser}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>GUARDAR</Text>
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

export default connect(null)(changePassword);
