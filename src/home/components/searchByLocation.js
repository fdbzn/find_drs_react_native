import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


class SearchByLocation extends Component {
  constructor (props) {
    super (props);
    this.state = {
      txtBtnSpecialty:'Medico Gral.',
      txtBtnAddress: 'Ingresa una dirección',
    };
  }

  componentDidUpdate (previousProps, previousState) {
    // actualiza texto del boton
    if (previousProps.homeSearch.selected_address !== this.props.homeSearch.selected_address) {
  
      if(this.props.homeSearch.selected_address.geolocation){
        this.setState ({
          txtBtnAddress: "Usar mi dirección actual",
        });
      }else{
        this.setState ({
          txtBtnAddress: this.props.homeSearch.selected_address.formatted_address,
        });
      }
    }
    if (previousProps.homeSearch.selected_specialty !== this.props.homeSearch.selected_specialty) {
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

  handleGoResultDoctors = () =>{
    this.props.dispatch (
      NavigationActions.navigate ({
        routeName: 'ResultDoctors',
      })
    );
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.txtBusca}>
          ENCUENTRA UN DOCTOR
        </Text>
        <TouchableOpacity
          style={styles.buttonInputAddress}
          onPress={this.handleGoSelectSpecialty}
        >
          <Text style={styles.buttonLabel}>
            {this.state.txtBtnSpecialty}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonInputAddress}
          onPress={this.handleGoSearchAddress}
        >
          <Text style={styles.buttonLabel} numberOfLines={1}>
            {this.state.txtBtnAddress}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnSearch}
          onPress={this.handleGoResultDoctors}
        >
          <Text style={styles.labelSearch} >
            Buscar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: '5%',
  },
  txtBusca: {
    fontSize: 20,
    color: 'black',
    //marginTop: 15,
    marginBottom: 20,
  },
  buttonInputAddress: {
    marginBottom: 30,
    width: '100%',
  },
  btnSearch: {
    width: '100%',
    borderRadius: 5,

    backgroundColor: '#d9bb17',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 13},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    // android (Android +5.0)
    elevation: 3,
    
  },
  buttonLabel: {
    textAlign: 'left',
    paddingRight: 15,
    paddingLeft: 5,
    fontSize: 20,
    borderBottomWidth: 1,
    color: '#7c7c7c',
    borderBottomColor: '#d9bb17',
  },
  labelSearch: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

function mapStateToProps (state) {
  console.log ('searchByLocation.js mstp::', state);
  return {
    navigation: state.navigation,
    homeSearch: state.homeSearch,
  };
}

export default connect (mapStateToProps) (SearchByLocation);