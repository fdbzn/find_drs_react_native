import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {StyleSheet, View, FlatList, Text} from 'react-native';

import CardItemProfile from './cardItemProfile';
import Empty from '../../sections/components/empty';
import Separator from '../../sections/components/horizontal-separator';


class RelativeList extends Component {
  goToDoctor = item => {
    
  };

  renderEmtpy = () => <Empty text="No se encontraron resultados" />;
  itemSeparator = () => <Separator />;
  keyExtractor = item => item._id.toString ();
  renderItem = ({item}) => {
    return (
      <CardItemProfile
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
  listBox: {
    //flexGrow: 1,
  },
});

function mapStateToProps (state) {
  return {
    my_relatives : state.appointment.my_relatives,
  };
}

export default connect (mapStateToProps) (RelativeList);
