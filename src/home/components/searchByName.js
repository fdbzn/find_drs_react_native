import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SearchByLocation extends Component {
  constructor (props) {
    super (props);
    this.state = {
      docName: '',
      txtBtnSpecialty: 'Medico General.',
      txtBtnAddress: 'Selecciona tu ubicación',
    };
  }

  componentDidUpdate (previousProps, previousState) {
    // actualiza texto del boton
    if (
      previousProps.homeSearch.selected_specialty !==
      this.props.homeSearch.selected_specialty
    ) {
      this.setState ({
        txtBtnSpecialty: this.props.homeSearch.selected_specialty.name,
      });
    }
  }

  handleGoSelectSpecialty = () => {
    this.props.dispatch (
      NavigationActions.navigate ({
        routeName: 'Specialties',
      })
    );
  };

  handleGoResultDoctors = () => {
    // --- set specialty id if not select one
    if (typeof this.props.homeSearch.selected_specialty === 'undefined') {
      this.props.dispatch ({
        type: 'SET_SELECTED_SPECIALTY',
        payload: {
          selected_specialty: {_id: '5bff8c716669127b3424fa80'},
        },
      });
    }
    // --- set type of search
    this.props.dispatch ({
      type: 'SET_TYPE_SEARCH',
      payload: {
        type_search: 2,
      },
    });
    // --- set name to search
    this.props.dispatch ({
      type: 'SET_NAME_DOCTOR',
      payload: {
        doctor_name: this.state.docName,
      },
    });

    // --- go to results
    this.props.dispatch (
      NavigationActions.navigate ({
        routeName: 'ResultDoctors',
      })
    );
  };

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.txtBusca}>ENCUENTRA UN DOCTOR</Text>

        <Text style={styles.label}>Especialidad</Text>
        <TouchableOpacity
          style={styles.buttonInputAddress}
          onPress={this.handleGoSelectSpecialty}
        >
          <View style={styles.inputBlock}>
            <Text style={styles.buttonLabel}>{this.state.txtBtnSpecialty}</Text>
            <Icon style={styles.iconSearch} name="caret-down" />
          </View>
        </TouchableOpacity>

        <Text style={styles.label}>Nombre del doctor</Text>
        <View style={styles.inputBlock}>
          <TextInput
            placeholder="Escribe el nombre del doctor"
            placeholderTextColor="black"
            autoCapitalize="none"
            style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={docName => this.setState ({docName})}
          />
        </View>

        <TouchableOpacity
          style={styles.btnSearch}
          onPress={this.handleGoResultDoctors}
        >
          <Text style={styles.labelSearch}>BUSCAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_m = 'Montserrat-Medium';
const montserrat_r = 'Montserrat-Regular';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: '5%',
  },
  txtBusca: {
    fontSize: 18,
    color: 'black',
    marginBottom: 33,
    paddingLeft: 16,
    fontFamily: montserrat_b,
  },
  btnSearch: {
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
    backgroundColor: '#fee082',
  },
  label: {
    //marginTop: 20,
    paddingHorizontal: 15,
    color: '#b1b1b1',
    fontSize: 12,
    fontFamily: montserrat_r,
  },
  buttonInputAddress: {
    width: '100%',
    //marginBottom: 45,
  },
  inputBlock: {
    height: 39,
    borderBottomWidth: 2,
    borderBottomColor: '#707070',
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 45,
  },
  buttonLabel: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: montserrat_r,
    color: 'black',
    paddingLeft: 15,
    flex: 1,
  },
  iconSearch: {
    alignSelf: 'flex-end',
    color: 'black',
    fontSize: 22,
    marginBottom: 10,
    paddingRight: 10,
  },
  labelSearch: {
    flex: 0.5,
    color: 'black',
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: montserrat_m,
  },

  input: {
    paddingLeft: 15,
    fontSize: 16,
    fontFamily: montserrat_r,
    flex: 1,
  },
});

function mapStateToProps (state) {
  return {
    navigation: state.navigation,
    homeSearch: state.homeSearch,
  };
}

export default connect (mapStateToProps) (SearchByLocation);
