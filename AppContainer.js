
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

class AppContainer extends Component{
     constructor(props){
        super(props); 
         this.state = {
             selectedTab:"feed"
         }
    }
     render(){
         return (
           <TabBarIOS style={styles.container}>
                <TabBarIOS.Item
                            title="Feed"
                            selected={this.state.selectedTab == "feed"}                                                                     onPress={() => this.setState({selectedTab:"feed"})}
                    >
                        <Text style={styles.welcome}>
                            Tab 1
                        </Text>
                    </TabBarIOS.Item>
            </TabBarIOS>
       );
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
      }    
});
module.exports = AppContainer;