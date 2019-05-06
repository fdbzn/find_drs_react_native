import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';


class selectFamily extends Component {
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
        <Text style={styles.txtTitle}>Selecciona un familiar</Text>
        
      </View>
    );
  }
}

const montserrat_b = 'Montserrat-Bold';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  txtTitle: {
    fontSize: 18,
    color: 'black',
    //marginTop: 80,
    marginBottom: 33,
    paddingLeft: 16,
    fontFamily: montserrat_b,
  },
});

export default connect(null)(selectFamily);
