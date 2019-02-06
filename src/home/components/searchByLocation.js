import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class SearchByLocation extends Component {
  constructor (props) {
    super (props);
    this.state = {
      txtBtnSpecialty: 'Medico Gral.',
      txtBtnAddress: 'Ingresa una dirección',
    };
  }

  componentDidUpdate (previousProps, previousState) {
    // actualiza texto del boton
    if (
      previousProps.homeSearch.selected_address !==
      this.props.homeSearch.selected_address
    ) {
      if (this.props.homeSearch.selected_address.geolocation) {
        this.setState ({
          txtBtnAddress: 'Usar mi dirección actual',
        });
      } else {
        this.setState ({
          txtBtnAddress: this.props.homeSearch.selected_address
            .formatted_address,
        });
      }
    }
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
  handleGoSearchAddress = () => {
    this.props.dispatch (
      NavigationActions.navigate ({
        routeName: 'SearchAddress',
      })
    );
  };

  handleGoResultDoctors = () => {
    this.props.dispatch (
      NavigationActions.navigate ({
        routeName: 'ResultDoctors',
      })
    );
  };

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.txtBusca}>
          ENCUENTRA UN DOCTOR
        </Text>

        <Text style={styles.label}>Especialidad</Text>
        <View style={styles.inputBlock}>
          <TouchableOpacity
            style={styles.buttonInputAddress}
            onPress={this.handleGoSelectSpecialty}
          >
            <Text style={styles.buttonLabel}>
              {this.state.txtBtnSpecialty}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Ubicación</Text>
        <View style={styles.inputBlock}>
          <TouchableOpacity
            style={styles.buttonInputAddress}
            onPress={this.handleGoSearchAddress}
          >
            <Text style={styles.buttonLabel} numberOfLines={1}>
              {this.state.txtBtnAddress}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.btnSearch}
          onPress={this.handleGoResultDoctors}
        >
          <Text style={styles.labelSearch}>
            Buscar
          </Text>
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
    paddingHorizontal: 16,
    paddingTop: '5%',
  },
  txtBusca: {
    fontSize: 23,
    color: 'black',
    marginBottom: 20,
    fontFamily: montserrat_b,
  },
  buttonInputAddress: {
    
    width: '100%',
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
  buttonLabel: {
    textAlign: 'left',
    fontSize: 20,
    color: '#7c7c7c',
  },
  label: {
    //marginTop: 20,
    paddingHorizontal: 15,
    color: '#b1b1b1',
    fontSize:12,
    fontFamily:montserrat_r,
  },
  inputBlock:{
    marginBottom:40,
    borderBottomWidth: 2,
    paddingLeft: 15,
    borderBottomColor: '#707070',
    flexDirection:"column",
    justifyContent:"flex-end",
  },

  labelSearch: {
    flex: 0.5,
    color: 'black',
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: montserrat_m,
  },
});

function mapStateToProps (state) {
  return {
    navigation: state.navigation,
    homeSearch: state.homeSearch,
  };
}

export default connect (mapStateToProps) (SearchByLocation);
