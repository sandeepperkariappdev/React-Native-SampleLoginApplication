
import React, {
  Component,
  Text,
  View, 
  ListView
} from 'react-native';
import AuthService from "./AuthService";
import moment from "moment";
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
class PushPayload extends Component{
     constructor(props){
        super(props); 
         let ds = new ListView.DataSource({
             rowHasChanged:(r1,r2) => r1 != r2
         });
         this.state = {
            dataSource:ds
         }
    }
    
    renderRow(rowdata){
        return(
            <View style={{
                            flex:1,
                            justifyContent:"center",
                            borderColor:"#D7D7D7",
                            borderBottomWidth:1,
                            borderTopWidth:1,
                            padding:10
                        }}>
                    <Text>Item</Text>
            </View>
        );
    }
     render(){
         return (
         <View style={{
             flex:1,
             paddingTop:80,
             justifyingContent:"flex-start",
             alignItems:"center"
             }}>
                <Text>Hello there</Text>
             <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)} />
             </View>
       );
     }
}

module.exports = PushPayload;