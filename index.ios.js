/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './Login';
class LoginApp extends Component {
  constructor(props){
       super(props);
       this.state = {
           isLoggedIn:false
       }
   }
  render() {
     if(this.state.isLoggedIn){
       return (
           <View style={styles.container}>
                <Text style={styles.welcome}>
                </Text>
           </View>
       );  
     } else{
        return (
            <Login onLogin={this.onLogin}/>
        );      
      }
    
  }    
  onLogin(){
    console.log('successfully logged in, can show different view');    
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LoginApp', () => LoginApp);
