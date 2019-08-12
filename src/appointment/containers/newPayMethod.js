import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {NavigationActions} from 'react-navigation';

import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import API from '../../../utils/api';

class newPayMethod extends Component {
  state = {
    name:'',
    card_number:'',
    expire:'',
    expMonth:'',
    expYear:'',
    cvc:'',
  }

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

  setYearMoth = ( expire )=>{
    let expire_final = expire;
    if(expire.length == 3 && expire.slice(2,5)!='/' ){
      expire_final = expire.slice(0,2) +'/'+ expire.slice(2,5) 
    }

    if(expire.length == 5){
      this.setState({ expMonth: expire.slice(0,2)})
      this.setState({ expYear: expire.slice(3,5)})
    }
    
    this.setState({ expire: expire_final})
  }

  handleRegisterMethod = async () => {
    console.log(this.state)
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'SelectPayMethod',
      })
    );
  };

  render() {
    return (
      <View
        style={styles.mainContainer}
      >
        <ScrollView style={styles.container}>
          <Text style={styles.mainTitle}>Nuevo Metodo de Pago</Text>
          <Text style={styles.label}>Nombre del tarjetahabiente</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType={'next'}
            onSubmitEditing={() => {
              this.card_number.focus(); 
            }}
            blurOnSubmit={false}
            onChangeText={name => this.setState({name})}
            maxLength = {100}
          />
          <Text style={styles.label}>Número de la tarjeta</Text>
          <TextInput
            style={styles.input}
            keyboardType={'numeric'}
            underlineColorAndroid="transparent"
            returnKeyType={'next'}
            ref={input => {
              this.card_number = input;
            }}
            onSubmitEditing={() => {
              this.expire.focus(); 
            }}
            blurOnSubmit={false}
            onChangeText={card_number => this.setState({card_number})}
            maxLength = {30}
          />
          <View style={styles.rowForm}>
            <View style={styles.columnLeft} >
            <Text style={styles.label}>MM/AA</Text>
              <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                underlineColorAndroid="transparent"
                returnKeyType={'next'}
                ref={input => {
                  this.expire = input;
                }}
                onSubmitEditing={() => {
                  this.cvc.focus();
                }}
                blurOnSubmit={false}
                onChangeText={expire=>{
                  this.setYearMoth(expire)
                }}
                value={this.state.expire}
                maxLength = {5}
              />
            </View>
            <View style={styles.columnRight} >
            <Text style={styles.label}>CVC</Text>
              <TextInput
                style={styles.input}
                keyboardType={'numeric'}
                underlineColorAndroid="transparent"
                ref={input => {
                  this.cvc = input;
                }}
                onChangeText={cvc => this.setState({cvc})}
                maxLength = {4}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.withPadding}>
          <TouchableOpacity
            onPress={this.handleRegisterMethod}
            style={styles.button}
          >
            <Text style={styles.buttonLabel}>GUARDAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width:'100%',
    flexDirection: 'column',
    alignItems:'center',
    
    //minHeight: 700, // --- evita error de minimizar demasiado la pantalla con keyboard
    backgroundColor: 'white',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    width: '100%',
    
  },
  mainTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 15,
    //marginTop: 15,
  },
  rowForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnLeft: {
    width: '48%',
    //backgroundColor:"blue",
  },
  columnRight: {
    width: '48%',
    //backgroundColor:"red",
  },
  label: {
    marginTop: 20,
    paddingHorizontal: 15,
    color: '#b1b1b1',
  },
  input: {
    paddingTop: 0,
    width: '100%',
    height: 35,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#666',
    color: 'black',
    fontSize: 17,
  },
  
  withPadding:{
    width:'100%',
    paddingHorizontal: 10,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 5,
    // ios
    shadowOffset: {width: 0, height: 13},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    // android (Android +5.0)
    elevation: 3,
    backgroundColor: '#fee082',
  },

  buttonLabel: {
    flex: 0.5,
    color: 'black',
    padding: 10,
    fontSize: 13,
    textAlign: 'center',
  },
});

export default connect(null)(newPayMethod);
