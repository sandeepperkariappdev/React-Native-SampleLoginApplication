
import React, {
  Component,
  Text,
  View, 
  ListView,
  TouchableHighlight
} from 'react-native';

const data ={
    item1:{
        "a":"apple",
        "b":"boy",
        "c":"cat",
        "d":"dog1",
        "e":"ele1",
        "f":"fish1",
        "g":"gun1"},
    item2:{
        "a":"apple2",
        "b":"boy2",
        "c":"cat2",
        "d":"dog2",
        "e":"ele2",
        "f":"fish2",
        "g":"gun2"
    },
    item3:{
        "a":"apple3",
        "b":"boy3",
        "c":"cat3",
        "d":"dog3",
        "e":"ele3",
        "f":"fish3",
        "g":"gun3"
    }
}
const item1= {
        "a":"apple",
        "b":"boy",
        "c":"cat",
        "d":"dog1",
        "e":"ele1",
        "f":"fish1",
        "g":"gun1"
}
class SearchResults extends Component{
     constructor(props){
        super(props); 
         let ds = new ListView.DataSource({
             rowHasChanged:(r1,r2) => r1 != r2
         });
         this.state = {
            dataSource:ds.cloneWithRows(["A","B","C"]),              
             searchQuery:props.searchQuery
         }
    }
    componentDidMount(){
        this.doSearch();
    }
    doSearch(){
        const url = "";
        
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(item1)
        })
       /* AuthService.getAuthInfo((err,authInfo) => {
            const url ="";
            fetch(url,{
                headers:authInfo.headers
            })
            .then((response) => response.json())
            .then((responseData) => {
                var feedItems = responseData.filter((ev) => {
                    ev.type == ""
                });
                
            })
        })
        <Image source={} style={}></Image>
        
        */
    }
 
    renderRow(rowData){
        return (
            <TouchableHighlight
                underlayColor="#ddd"
                >
            <View style={{
                    flex:1,
                    flexDirection:"row",
                    padding:20,
                    alignItems:"center",
                    borderColor:"red",
                    borderBottomWidth:1 }}>
                <Text style={{
                             height:36,
                             width:36                             
                            }}> Images
                </Text>                   
            </View>
            </TouchableHighlight>
        );
    }
     render(){
         return (
         <View style={{
             flex:1,
             justifyContent:"flex-start"
             }}>
                <ListView
                        dataSource={this.state.dataSource}
                        renderRow = {this.renderRow.bind(this)} />
             </View>
       );
     }
}

module.exports = SearchResults;