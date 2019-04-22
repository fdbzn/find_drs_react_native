import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {StyleSheet, View, FlatList, Text} from 'react-native';

import DoctorItem from '../components/doctorItem';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';


class doctorsList extends Component {
  handleLoadMore = () => {
    
  }

  goToDoctor = item => {
    
    this.props.dispatch (
      NavigationActions.navigate ({
        routeName: 'doctorProfile',
      })
    );
  };

  renderEmtpy = () => <Empty text="No se encontraron resultados" />;
  itemSeparator = () => <Separator />;
  keyExtractor = item => item._id.toString ();
  renderItem = ({item}) => {
    return (
      <DoctorItem
        {...item}
        onPress={()=> { this.goToDoctor(item) }}
      />
    )
  };

  render () {

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.containerList}
          contentContainerStyle={styles.listBox}

          data={this.props.doctors_list}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}

          onEndReachedThreshold={0.4}
          onEndReached={this.handleLoadMore}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    width: '100%',
  },
  containerList:{
    marginTop: 20,
    width:"100%",
    paddingHorizontal:20,
  },
  listBox: {
    //flexGrow: 1,
  },
});

function mapStateToProps (state) {
  return {
    navigation: state.navigation,
    doctors_list: state.homeSearch.doctors_list,
    spciealty_id : state.homeSearch.selected_specialty._id,
    lat : state.homeSearch.selected_address.location.lat,
    lng : state.homeSearch.selected_address.location.lng,
    type_search : state.homeSearch.type_search,
  };
}

export default connect (mapStateToProps) (doctorsList);
