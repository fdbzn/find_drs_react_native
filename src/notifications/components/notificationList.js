import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, FlatList} from 'react-native';

import NotificationItem from '../components/notificationItem';
import Empty from '../../sections/components/empty';
import Separator from '../../sections/components/horizontal-separator';

class notificationList extends Component {
  renderEmtpy = () => <Empty text="No se encontraron resultados" />;
  itemSeparator = () => <Separator />;
  keyExtractor = (item) => item._id.toString();
  renderItem = ({item}) => {
    return (
      <NotificationItem
        {...item}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.containerList}
          data={this.props.notification_list}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
         
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
  containerList: {
    width: '100%',
    marginBottom: 10,
  },
});

function mapStateToProps(state) {
  return {
    notification_list: state.notifications.notification_list,
  };
}

export default connect(mapStateToProps)(notificationList);
