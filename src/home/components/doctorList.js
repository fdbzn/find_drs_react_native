import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View, FlatList, Text} from 'react-native';

import DoctorItem from '../components/doctorItem';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';


class doctorsList extends Component {
  
  state = {
    doctors_list:[]
  }
  

  renderEmtpy = () => <Empty text="No se encontraron resultados" />;
  itemSeparator = () => <Separator />;
  keyExtractor = item => item._id.toString ();
  goToDoctor = item => {
    alert("go to doctor");
  };

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
 
          //horizontal
          data={this.state.doctors_list}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
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
    doctors_list: state.homeSearch.doctors_list,
  };
}

export default connect (mapStateToProps) (doctorsList);
