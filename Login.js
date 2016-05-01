'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';
import authService from './AuthService';


class Login extends Component{
     constructor(props){
        super(props);
        this.state = {
            showProgress:false
        }        
    }
     render(){
         var errorCtrl = <View />;
      
      if(!this.state.success && this.state.badCredentials){
            errorCtrl = <Text style={styles.error}>
                    Username and password combination did not work.
                </Text>
      }
      if(!this.state.success && this.state.unknownError){
            errorCtrl = <Text style={styles.error}>
                    We experienced an unexpected issue.
                </Text>
      }
        return (
            <View style={styles.container}>
            <Text>
                Hi There
            </Text>            
        <TextInput onChangeText={ (text)=> this.setState({username:text})}
            style={styles.input}
            placeholder="UserName"/>
        <TextInput onChangeText={ (text)=> this.setState({password:text})}
            style={styles.input}
            placeholder="Password" secureTextEntry="true"/>
        <TouchableHighlight 
            onPress={this.onLoginPressed.bind(this)}
            style={styles.button}>
                <Text style={styles.buttonText}>
                    Log In
                </Text>
        </TouchableHighlight>
                    {errorCtrl}
                    <ActivityIndicatorIOS
                        animating={this.state.showProgress}
                        size="large" 
                        style={styles.loader}/>
        </View>
        );
    }    
     onLoginPressed(){
      console.log('Attempting to log in with username'+this.state.username);
      this.setState({showProgress:true});
      authService.login({
          username:this.state.username,
          password:this.state.password
      }, (results) => {      
          this.setState(Object.assign({
              showProgress:false
          },results));
          if(results.success && this.props.onLogin){
              this.props.onLogin();
          }
      });      
  }
}
const styles = React.StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
          padding:10
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
      logo:{
          width:66,
          height:55
       },
    input:{
        height:50,
        marginTop:10,
        padding:4,
        fontSize:18,
        borderWidth:1,
        borderColor:'#48bbec'
    },
    button:{
        height:50,
        backgroundColor:'#48BBEC',
        alignSelf:'stretch',
        marginTop:10,
        justifyContent:'center'        
    },
    buttonText:{
        fontSize:22,
        color:'#FFF',
        alignSelf:'center'
    },
    loader:{
        marginTop:20
    },
    error:{
    color:'red',
    padding:20
}
    
});
module.exports = Login;
              
               
                