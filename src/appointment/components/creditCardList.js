import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, FlatList} from 'react-native';

import CreditCardItem from '../components/creditCardItem'
import Empty from '../../sections/components/empty';
import Separator from '../../sections/components/horizontal-separator';

class creditCardList extends Component {
    state = {
        id_selected: 0 
    };
    onPressAction = (item) => {
        this.setState({
            id_selected: item.id
        });
        
    }
      

  renderEmtpy = () => <Empty text="No se encontraron resultados" />;
  itemSeparator = () => <Separator />;
  keyExtractor = item => item.id.toString ();
  renderItem = ({item}) => {
    return (
      <CreditCardItem
        {...item}
        id_selected = {this.state.id_selected}
        onPress={()=> { this.onPressAction(item) }}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.containerList}
          data={this.props.credit_cards}
          
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}

          extraData={this.state}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
      },
      containerList:{
        width:"100%",
        marginBottom:10,
      },
});

function mapStateToProps(state) {
  return {
    credit_cards: state.appointment.credit_cards,
  };
}

export default connect(mapStateToProps)(creditCardList);
