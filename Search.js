'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,  
  TextInput,
  TouchableHighlight
} from 'react-native';
import authService from './AuthService';
import SearchResults from './SearchResults';


class Search extends Component{
     constructor(props){
        super(props);
        this.state = {
            showProgress:false
        }        
    }
     render(){
       
        return (
            <View style={styles.container}>                      
        <TextInput onChangeText={ (text)=> this.setState({searchQuery:text})}
            style={styles.input}
            placeholder="Search Query"/>       
        <TouchableHighlight 
            onPress={this.onSearchPressed.bind(this)}
            style={styles.button}>
                <Text style={styles.buttonText}>
                   Search 
                </Text>
        </TouchableHighlight>                   
        </View>
        );
    }    
     onSearchPressed(){
      //console.log('Attempting to log in with searchQuery'+this.state.searchQuery);
        this.props.navigator.push({
            component:SearchResults,
            title:"Results",
            passProps:{
                searchQuery: this.state.searchQuery
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
module.exports = Search;
              
               
                