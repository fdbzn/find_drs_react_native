import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import InputAutoComplete from '../components/inputAutoComplete';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';

class SearchAddress extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Header>
          <Close
            onPress={()=> { navigation.goBack() }}
          />
        </Header>
      )
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <InputAutoComplete />
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {flex:1}
});

export default connect (null) (SearchAddress);