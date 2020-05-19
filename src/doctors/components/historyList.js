import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {StyleSheet, View, FlatList} from 'react-native';

import DoctorItem from '../components/doctorItem';
import Empty from '../../sections/components/empty';
import Separator from '../../sections/components/horizontal-separator';


class HistoryList extends Component {
  handleLoadMore = () => {
    
  }

  goToDoctor = item => {
    this.props.dispatch({
      type: 'SET_SELECTED_DR',
      payload: {
        selected_dr : item
      }
    })
    

    
    this.props.dispatch (
      NavigationActions.navigate ({
        routeName: 'DoctorProfile',
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

          data={this.props.history_doctors}
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
    history_doctors: state.doctors.history_doctors,
  };
}

export default connect (mapStateToProps) (HistoryList);
