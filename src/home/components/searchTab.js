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
      {key: 'first', title: 'ESPECIALIDAD'},
      {key: 'second', title: 'NOMBRE DEL DOCTOR'},
    ],
  };

  _handleIndexChange = index => this.setState ({index});
  

  renderLabel (props) {
    let index = 0;
    return ({route}) => {
      const focused = index === props.navigationState.index;
      index += 1;
      return (
        <View>
          <Text
            style={[
              styles.labelTabTiew,
              styles.labelStyle,
              focused ? styles.labelSelectedStyle : null,
            ]}
          >
            {route.title}
          </Text>
        </View>
      );
    };
  }

  renderIndicator = props => {
    const {width, position} = props;
    const translateX = Animated.multiply (position, width);

    return (
      <Animated.Image
        source={require ('../../../assets/backgronund.png')}
        style={[styles.indicator, {width, transform: [{translateX}]}]}
      />
    );
  }

  // --- aqui pestañas superiores
  _renderTabBar = props => (
    <TabBar
      {...props}
      onTabPress={tab => {
        console.log (tab);
      }}
      style={styles.header}
      //indicatorStyle={{backgroundColor: '#17bfa5'}}
      //labelStyle={styles.labeTabTop}
      renderLabel={this.renderLabel (props)}
      renderIndicator={this.renderIndicator}
    />
  );

  _renderScene = SceneMap ({
    first: FirstRoute,
    second: SecondRoute,
  });

  render () {
    // --- aqui el view completo de la pagina
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

const montserrat_m = 'Montserrat-Medium';
const styles = StyleSheet.create ({
  
  labelTabTiew: {
    fontFamily: montserrat_m,
    fontSize: 13,
  },
  labelStyle: {
    color: '#707070',
  },
  labelSelectedStyle: {
    color: '#00BFA5',
  },

  indicator: {
    backgroundColor: '#17bfa5',
    width: 1,
    height: 2,
    position: 'absolute',
    bottom: 0,
  },
  header: {
    backgroundColor: 'white',
    height:45,
    justifyContent:"center",

    // ios
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    // android (Android +5.0)
    elevation: 0,
  },
});

export default connect (null) (SearchTab);
