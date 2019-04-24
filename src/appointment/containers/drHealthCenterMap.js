import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import MapView from 'react-native-maps';

class drHealthCenterMap extends Component {
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
        <Text>map</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //paddingHorizontal:20,
    paddingTop: '5%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width:100,
    height:100,
  },
});

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(drHealthCenterMap);
