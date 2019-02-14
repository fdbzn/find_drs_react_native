import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {List, ListItem, SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

class searchableList extends Component {
  state = {};
  constructor (props) {
    super ();
    this.state = {
      loading: true,
      data: [],
      list_specialties: [],
      popular_specialties: [],
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
          marginLeft:45,
          //backgroundColor: '#CED0CE',
          backgroundColor: '#95989A',
        }}
      />
    );
  };

  renderItem = ({item}) => {
    return (
      <ListItem
        //avatar={{uri: item.picture.thumbnail}}
        //roundAvatar
        title={item.name}
        titleStyle={styles.titleItem}
        //subtitle={item.email}
        containerStyle={styles.containerItem}
        leftIcon={<Icon style={styles.iconSpecialty} name="stethoscope" />}
        hideChevron
        onPress={() => {
          this._handlePress (item);
        }}
      />
    )
  }

  keyExtractor = item => item._id.toString ();

  searchFilterFunction = text => {
    console.log (this.arrayholder);
    const newData = this.arrayholder.filter (item => {
      const itemData = `${item.name.toUpperCase ()}`;
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
        <Text style={styles.titleList}>Más buscadas</Text>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.popular_specialties}
          //ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderItem}
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
                titleStyle={styles.titleItem}
                //subtitle={item.email}
                containerStyle={styles.containerItem}
                leftIcon={<Icon style={styles.iconSpecialty} name="stethoscope" />}
                hideChevron
                onPress={() => {
                  this._handlePress (item);
                }}
              />
            )}
            keyExtractor={this.keyExtractor}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
        </List>
      </Fragment>
    );
  }
}

const montserrat_b = 'Montserrat-Bold';
const montserrat_l = 'Montserrat-Light';
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
  containerItem:{
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },

  iconSpecialty:{
    fontSize:21,
    color:'#EFB04B',
    marginRight:35,
  },

  titleItem:{
    fontSize:16,
    color:'#606060',
    fontFamily:montserrat_l,

  },
});

function mapStateToProps (state) {
  return {
    list_specialties: state.homeSearch.list_specialties,
    popular_specialties: state.homeSearch.popular_specialties,
  };
}

export default connect (mapStateToProps) (searchableList);
