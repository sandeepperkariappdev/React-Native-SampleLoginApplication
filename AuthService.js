import buffer from "buffer";
import Reactnative from "react-native";
import _ from "lodash";
import nativeModules from "NativeModules";

const encoding = nativeModules.Encoding;
const AsyncStorage = Reactnative.AsyncStorage;
const authKey = "auth";
const userkey = "user";

class AuthService {
    
    getAuthInfo(cb){
        /*AsyncStorage.multiGet([authKey,userkey],(err,val) => {
            if(err){
                return(cb(err));
            }
            
            if(!val){
                return cb();
            }
            
            var zippedObj = _.zipObject(val);
            
            if(!zippedObj[authKey]){
                return cb();
            }
            
            const authInfo = {
                headers:{
                    Authhorization:'Basic'+ zippedObj[authKey]                   
                },
                user:JSON.parse(zippedObj[userkey])                
            }
            
            return cb(null,authInfo);
        });*/
        return cb(null,"authInfo");
    }
    
    login(cred,cb){        
        let authStr= cred.username+':'+cred.password;
        encoding.base64Encode(authStr,(encodedAuthFromObjC) => {
            console.log(encodedAuthFromObjC);
            cb(encodedAuthFromObjC)
        });
        let b = new buffer.Buffer(cred.username+':'+cred.password);
        let encodedAuth =  b.toString('base64');
      
     /* fetch('https://api.github.com/user',{
          headers:{
              'Authhorization':'Basic'+ encodedAuth
          }
      }).then((response) => {
          console.log('response status'+response.status);
            if(response.status >= 200 && response.status < 300){
                return response;
            }              
          throw {
            badCredentials:response.status == 401,
            unknownError: response.status != 401  
          };
      }).then((response) => {
          return response.json();
      }).then((results) => {
          AsyncStorage.multiSet([
              [authKey,encodedAuth],
              [userkey,JSON.stringify(results)]
          ], (err) => {
              if(err){
                  throw err;
              }
          });
          return cb({success:true});
      }).catch((err) => { 
          console.log(err)
          return cb(err);
      });*/
    }
}

module.exports = new AuthService();