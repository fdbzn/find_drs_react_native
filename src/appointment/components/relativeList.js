import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {StyleSheet, View, FlatList, Text} from 'react-native';

import CardItemProfile from './cardItemProfile';
import Empty from '../../sections/components/empty';
import Separator from '../../sections/components/horizontal-separator';


class RelativeList extends Component {
  editProfile = item => {
    this.props.dispatch ({
      type: 'SET_EDIT_RELATIVE',
      payload: {
        edit_profile: item,
      },
    });

    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'EditRelative',
      })
    );
  };

  removeProfile = item => {
    this.props.dispatch ({
      type: 'SET_REMOVE_RELATIVE',
      payload: {
        remove_profile: item,
      },
    });

    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'RemoveRelative',
      })
    );
  };

  selectProfile = item_relative => {
    // --- guarda el id del paciente
    this.props.dispatch({
      type: 'SET_USER_PATIENT',
      payload: {
        patient: item_relative
      }
    }); 

    this.props.dispatch(
        NavigationActions.navigate({
            routeName: 'SelectPayMethod',
        })
    );
  };

  renderEmtpy = () => <Empty text="No se encontraron resultados" />;
  itemSeparator = () => <Separator />;
  keyExtractor = item => item._id.toString ();
  renderItem = ({item}) => {
    return (
      <CardItemProfile
        {...item}
        onPress={()=> { this.selectProfile(item) }}
        onPressEdit={()=> { this.editProfile(item) }}
        onPressRemove={()=> { this.removeProfile(item) }}
        showBtnRemove={true}
      />
    )
  };

  render () {

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.containerList}
          contentContainerStyle={styles.listBox}

          data={this.props.my_relatives}
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
    paddingHorizontal: 20,
    marginBottom:10,
  },
});

function mapStateToProps (state) {
  return {
    my_relatives : state.appointment.my_relatives,
  };
}

export default connect (mapStateToProps) (RelativeList);
