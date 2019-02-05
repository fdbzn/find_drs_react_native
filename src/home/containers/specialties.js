import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import SearchableList from '../components/searchableList';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import API from '../../../utils/api';

class Specialties extends Component {
  async componentDidMount () {
    const specialties = await API.getSpecialties("popular", 3);
    
    this.props.dispatch ({
      type: 'SET_LIST_SPECIALTIES',
      payload: {
        list_specialties : specialties.data,
      },
    });
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <Header>
          <Close
            onPress={() => {
              navigation.goBack ();
            }}
            icon="x"
          />
        </Header>
      ),
    };
  };

  render () {
    return (
      <View style={styles.container}>
        <SearchableList />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});


export default connect (null) (Specialties);
