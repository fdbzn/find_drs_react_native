import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import MapView, {Marker} from 'react-native-maps';

class drHealthCenterMap extends Component {
  state = {
    markers: [{
      title: 'hello',
      coordinates: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    }]
  }

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
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        {this.state.markers.map(marker => (
          <Marker 
            coordinate={marker.coordinates}
            title={marker.title}
          />
        ))}
        </MapView>
        <View style={styles.boxToGoogle}>
          <Text>Torres Bordet 333, Cuahutémoc, Sta María la Ribera</Text>
          <TouchableOpacity
              style={styles.button}
            >
              <Text style={styles.buttonLabel}>¿Como llegar?</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const montserrat_m = 'Montserrat-Medium';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //paddingTop: '5%',
  },
  map: {
    width:'100%',
    flex:1,
  },
  boxToGoogle:{
    flexDirection:'column',
    width:'100%',
    height:100,
    paddingHorizontal:20,
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
    backgroundColor: '#17bfa5'
  },
  buttonLabel: {
    flex: 1,
    color: 'black',
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
    fontFamily:montserrat_m,
  },
});

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(drHealthCenterMap);
