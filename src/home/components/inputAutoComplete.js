import React, {Fragment, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
} from 'react-native';
import LocationServicesDialogBox
  from 'react-native-android-location-services-dialog-box';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {GoogleAutoComplete} from 'react-native-google-autocomplete';
import LocationItem from './locationItem';

class InputAutoComplete extends Component {
  setGeoPosition = () => {
    navigator.geolocation.getCurrentPosition (
      position => {
        const geoLatitude = position.coords.latitude;
        const geoLongitude = position.coords.longitude;
        const geoAccuracy = position.coords.accuracy;

        // --- definiendo deltas y state ---
        this.calcDelta (geoLatitude, geoLongitude, geoAccuracy);
        this.props.dispatch (NavigationActions.back ());
      },
      error => {
        if (error.code === 2) {
          if (Platform.OS === 'android') {
            LocationServicesDialogBox.checkLocationServicesIsEnabled ({
              message: '<h2>Use Location?</h2> \
                                        This app wants to change your device settings:<br/><br/>\
                                        Use GPS for location<br/><br/>',
              ok: 'YES',
              cancel: 'NO',
            }).then (() => {
              locationTracking (dispatch, getState, geolocationSettings);
            });
          }
        }
      },
      {
        enableHighAccuracy: false,
        timeout: 20000,
        //maximumAge: 1000
      }
    );
  };

  calcDelta = (lat, lon, accuracy) => {
    const oneDegreeOfLongitudeInMeters = 111.32;
    const circumference = 40075 / 360;

    const latitudeDelta = accuracy * (1 / (Math.cos (lat) * circumference));
    const longitudeDelta = accuracy / oneDegreeOfLongitudeInMeters;

    this.props.dispatch ({
      type: 'SET_SELECTED_ADDRESS',
      payload: {
        selected_address: {
          geolocation: true,
          location: {
            lat: lat,
            lng: lon,
          },
        },
      },
    });
  };

  render () {
    return (
      <View style={styles.container}>

        <GoogleAutoComplete
          language="es"
          apiKey={'AIzaSyCvcw_T-pqS6QIPCuh8aO_KNIZ860Gou4w'}
          debounce={500}
          minLength={3}
        >
          {({
            // tiene a disposicion valores y funciones al ejecutarse
            handleTextChange,
            locationResults,
            fetchDetails,
            isSearching,
            inputValue,
            clearSearchs,
          }) => (
            <Fragment>

              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.textInput}
                  underlineColorAndroid="transparent"
                  placeholder="Buscar doctor cerca de..."
                  autoFocus={true}
                  inputColorPlaceholder="#777"
                  onChangeText={handleTextChange}
                  value={inputValue}
                />

              </View>
              <TouchableOpacity
                style={styles.boxMyLocation}
                onPress={this.setGeoPosition}
              >
                <Text style={styles.btnMyLocation}>
                  Usar mi ubicación
                </Text>
              </TouchableOpacity>
              {isSearching && <ActivityIndicator size="large" color="red" />}
              {console.log ('locationResult', locationResults)}
              <ScrollView style={styles.containerResults}>
                {locationResults.map (el => (
                  <LocationItem
                    {...el}
                    key={el.id}
                    fetchDetails={fetchDetails}
                    clearSearchs={clearSearchs}
                  />
                ))}
              </ScrollView>
            </Fragment>
          )}
        </GoogleAutoComplete>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  txtBusca: {
    fontSize: 20,
    color: '#777',
    //marginTop: 15,
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    width: '100%',
    fontSize: 23,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: 'black',
  },
  boxMyLocation: {
    width: '100%',
    backgroundColor: '#f1f1f1',
    paddingTop: 10,
    paddingLeft: 20,
    height: 45,
  },
  btnMyLocation: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  inputWrapper: {
    flexDirection: 'column',
    width: '100%',

    // ios
    backgroundColor: 'white',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 13},
    shadowOpacity: 0.3,
    shadowRadius: 8,

    // android (Android +5.0)
    elevation: 3,
  },
  containerResults: {
    paddingHorizontal:10,
  },
});

export default connect (null) (InputAutoComplete);
