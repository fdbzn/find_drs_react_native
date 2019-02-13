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
      <View>
        
        <SearchBar
          placeholder="Busca tu especialidad"
          //noIcon
          icon={{ name: 'search', color:'black', style:{marginTop:3, fontSize:22} }}
          
          lightTheme
          //round
          onChangeText={text => this.searchFilterFunction (text)}
          autoCorrect={false}
          containerStyle={{
            borderTopWidth: 0,
            borderBottomWidth: 0,
            backgroundColor: 'white',
            //marginTop:-10,
          }}
          inputStyle={{
            backgroundColor: '#EDEDED',
            borderWidth: 0,
            height:45,
            fontSize:12,
            paddingLeft:50,
            
            //---sin sombra xq borra icon
          }}
        />
        <Text style={styles.titleList}>Todas</Text>
      </View>
      
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
        <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0, marginTop:-10}}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (  
              <ListItem
                //avatar={{uri: item.picture.thumbnail}}
                //roundAvatar
                title={item.name}
                //subtitle={item.email}
                containerStyle={{borderBottomWidth: 0, borderTopWidth: 0}}
                //leftIcon={<Icon icon="🏠" />}
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

const montserrat_b = 'Montserrat-Bold';
const styles = StyleSheet.create ({
  boxTitle: {
    flexDirection: 'column',
    justifyContent:'center',
    height: 62,
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#E4E4E4ed',
  },
  txtTitle: {
    fontSize: 20,
    fontFamily:montserrat_b,
    marginLeft:20,
    color:'black',
  },
  titleList: {
    fontSize: 18,
    fontFamily:montserrat_b,
    marginLeft:10,
    marginTop:5,
    marginBottom:5,
    color:'black',
  },
});

function mapStateToProps (state) {
  return {
    list_specialties: state.homeSearch.list_specialties,
  };
}

export default connect (mapStateToProps) (searchableList);
