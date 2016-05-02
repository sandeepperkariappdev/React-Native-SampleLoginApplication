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
  View,
  ActivityIndicatorIOS
} from 'react-native';
import Login from './Login';
import AppContainer from './AppContainer';
import authService from './AuthService';
class LoginApp extends Component {
    componentDidMount(){
        
        authService.login({
            username:"sandeep",
            password:"perkari"
        },(res)=> console.log(res))
        authService.getAuthInfo((err, authInfo) => {
            this.setState({
                isCheckingAuth:false,
                isLoggedIn:true
            })
        });
    }
  constructor(props){
       super(props);
       this.state = {
           isLoggedIn:false,
           isCheckingAuth:true
       }
   }
  render() {
      if(this.state.isCheckingAuth){
          return (
              <View style={styles.container}>
                    <ActivityIndicatorIOS 
                            animating={true}
                                size="large"
                                style={styles.loader} />
              </View>
          );
      }
     if(this.state.isLoggedIn){
       return (
           <AppContainer  />
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
