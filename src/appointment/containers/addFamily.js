import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import DatePicker from 'react-native-datepicker';

import Header from '../../sections/components/header';
import GenreDropDown from '../../welcome/components/genreDropDown';
import Close from '../../sections/components/close';
import API from '../../../utils/api';

class AddFamily extends Component {
  state = {
    name: '',
    last_name: '',
    birthdate: null,
    sex: '',
    phone: '',
    email: 'noemail@noemail.com',
  };

  handleRegisterFamily = async () => {
    // --- check login in server
    const createFamily = await API.createFamily(
      this.state.name,
      this.state.last_name,
      this.state.email,
      this.state.birthdate,
      this.state.sex,
      this.state.phone,
      this.props.token
    );

    if(createFamily.success == true){
      const my_relatives = await API.getMyRelatives( this.props.token )
      this.props.dispatch ({
      type: 'SET_RELATIVES',
      payload: {
        my_relatives: my_relatives.data,
        },
      });

      this.props.dispatch(
        NavigationActions.navigate({
          routeName: 'SelectFamily',
        })
      );
    }
    


  };

  setSexValue = dropdownVal => {
    this.setState({sex: dropdownVal});
  };

  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <Header>
          <Close
            onPress={() => {
              navigation.goBack();
            }}
            icon="<"
          />
        </Header>
      ),
    };
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior="padding"
        enabled
      >
        <ScrollView style={styles.container}>
          <Text style={styles.mainTitle}>Nuevo Familiar</Text>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType={'next'}
            onSubmitEditing={() => {
              this.lastName.focus();
            }}
            blurOnSubmit={false}
            onChangeText={name => this.setState({name})}
          />

          <Text style={styles.label}>Apellido</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType={'next'}
            ref={input => {
              this.lastName = input;
            }}
            onChangeText={last_name => this.setState({last_name})}
          />

          <Text style={styles.label}>Fecha de nacimiento</Text>
          <DatePicker
            style={styles.input}
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
            onDateChange={date => {
              this.setState({birthdate: date});
            }}
          />
          <View style={styles.rowForm}>
            <View style={styles.columnLeft}>
              <Text style={styles.label}>Sexo</Text>
              <GenreDropDown setValueInForm={this.setSexValue} />
            </View>
            <View style={styles.columnRight}>
              <Text style={styles.label}>Telefono</Text>
              <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                underlineColorAndroid="transparent"
                returnKeyType={'next'}
                ref={input => {
                  this.phone = input;
                }}
                onChangeText={phone => {
                  this.setState({phone})
                  this.setState({email:'noemail_'+phone+'@noemail.com'})
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={this.handleRegisterFamily}
            style={[styles.button]}
          >
            <Text style={styles.buttonLabel}>REGISTRAR</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_m = 'Montserrat-Medium';

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    flexDirection: 'column',
    minHeight: 100, // --- evita error de minimizar demasiado la pantalla con keyboard
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 100,
  },
  container: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    width: '100%',
    //backgroundColor: "blue",
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
    paddingTop: 0,
    width: '100%',
    height: 35,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#666',
    color: 'black',
    fontSize: 17,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    marginTop: 35,
    marginBottom: 30,
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

function mapStateToProps(state) {
  return {
    token: state.user.token,
  };
}

export default connect(mapStateToProps)(AddFamily);
