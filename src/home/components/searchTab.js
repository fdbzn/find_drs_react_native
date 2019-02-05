import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Text, Animated} from 'react-native';
import {connect} from 'react-redux';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

import SearchByLocation from './searchByLocation';
import SearchByName from './searchByName';

const FirstRoute = () => <SearchByLocation />;
const SecondRoute = () => <SearchByName />;
class SearchTab extends Component {
  state = {
    index: 0,
    color: 'blue',
    routes: [
      {key: 'first', title: 'Especialidad'},
      {key: 'second', title: 'Nombre de Médico'},
    ],
  };

  _handleIndexChange = index => this.setState ({index});

  _renderTabBar = props => (
    <TabBar
      {...props}
      onTabPress={tab => {
        console.log (tab);
      }}
      style={styles.header}
      //indicatorStyle={{backgroundColor: '#17bfa5'}}
      labelStyle={{color: '#17bfa5'}}
      renderIndicator={props => {
        const {width, position} = props;
        const translateX = Animated.multiply (position, width);

        return (
          <Animated.Image
            source={require ('../../../assets/backgronund.png')}
            style={[styles.indicator, {width, transform: [{translateX}]}]}
          />
        );
      }}
    />
  );

  _renderScene = SceneMap ({
    first: FirstRoute,
    second: SecondRoute,
  });

  render () {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={{
          width: Dimensions.get ('window').width,
          height: 100,
        }}
      />
    );
  }
}

const styles = StyleSheet.create ({
  indicator: {
    color: 'red',
    backgroundColor: '#17bfa5',
    width: 1,
    height: 1,
    position:"absolute",
    bottom:0,
  },
  header: {
    backgroundColor: 'white',
    // ios
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    // android (Android +5.0)
    elevation: 0,
  },
});

export default connect (null) (SearchTab);
