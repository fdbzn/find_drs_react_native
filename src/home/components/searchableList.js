import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {List, ListItem, SearchBar} from 'react-native-elements';

import {connect} from 'react-redux';
import Icon from '../../sections/components/icon';
import {NavigationActions} from 'react-navigation';

class searchableList extends Component {
  state = {};
  constructor (props) {
    super ();
    this.state = {
      loading: false,
      data: [],
      list_specialties: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidUpdate (previousProps, previousState) {
    // actualiza texto del boton
    if ( previousProps.list_specialties !== this.props.list_specialties ) {
      this.setState ({
        data: this.props.list_specialties,
        loading: false,
      });
      this.arrayholder = this.props.list_specialties;

      
    }
  }

  _handlePress = item => {
    this.props.dispatch ({
      type: 'SET_SELECTED_SPECIALTY',
      payload: {
        selected_specialty: item,
      },
    });
    this.props.dispatch (NavigationActions.back ());
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
          //marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    console.log (this.arrayholder);
    const newData = this.arrayholder.filter (item => {
      const itemData = `${item.name_specialty.toUpperCase ()}`;
      const textData = text.toUpperCase ();
      return itemData.indexOf (textData) > -1;
    });
    this.setState ({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Busca tu especialidad"
        //noIcon
        //searchIcon={{size:60}}
        lightTheme
        //round
        onChangeText={text => this.searchFilterFunction (text)}
        autoCorrect={false}
        containerStyle={{
          borderTopWidth: 0,
          backgroundColor: 'white',
        }}
        inputStyle={{
          backgroundColor: 'white',
          borderWidth: 1,
        }}
      />
    );
  };

  render () {
    if (this.state.loading) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <Fragment>
        <View style={styles.boxTitle}>
          <Text style={styles.txtTitle}>Especialidades</Text>
        </View>

        <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0}}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <ListItem
                //avatar={{uri: item.picture.thumbnail}}
                //roundAvatar
                title={item.name}
                //subtitle={item.email}
                containerStyle={{borderBottomWidth: 0}}
                leftIcon={<Icon icon="🏠" />}
                hideChevron
                onPress={() => {
                  this._handlePress (item);
                }}
              />
            )}
            keyExtractor={item => item._id.toString ()}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
        </List>

      </Fragment>
    );
  }
}

const styles = StyleSheet.create ({
  boxTitle: {
    flexDirection: 'row',
    height: 70,
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
  txtTitle: {
    fontSize: 18,
  },

  containerList: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: '100%',
    flexDirection: 'row',
  },
});

function mapStateToProps (state) {
  return {
    list_specialties: state.homeSearch.list_specialties,
  };
}

export default connect (mapStateToProps) (searchableList);
