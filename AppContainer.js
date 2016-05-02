
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
      NavigatorIOS
} from 'react-native';
import Feed from "./Feed";
import Search from "./Search";
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
                            selected={this.state.selectedTab == "feed"}                                                                     onPress={() => this.setState({selectedTab:"feed"})}>
                        <NavigatorIOS
                                    style={{
                                           flex:1
                                          }}
                                    initialRoute={{
                                            component:Feed,
                                            title:"Feed"
                                           }}></NavigatorIOS>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                            title="Search"
                            selected={this.state.selectedTab == "search"}                                       onPress={() => this.setState({selectedTab:"search"})}>
                        <NavigatorIOS
                                    style={{
                                           flex:1
                                          }}
                                    initialRoute={{
                                            component:Search,
                                            title:"Search"
                                           }}></NavigatorIOS>
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