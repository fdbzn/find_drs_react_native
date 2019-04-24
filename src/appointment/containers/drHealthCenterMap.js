import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';

class drHealthCenterMap extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <Header>
          <Close
            onPress={() => {
              navigation.goBack();
            }}
            icon="<"
          />
        </Header>
      ),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text >map</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //paddingHorizontal:20,
    paddingTop: '5%',
  },
  
});

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(drHealthCenterMap);
