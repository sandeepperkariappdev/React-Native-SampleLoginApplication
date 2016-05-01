import buffer from "buffer";

class AuthService {
    login(cred,cb){
        
      var b = new buffer.Buffer(cred.username+':'+cred.password);
      var encodedAuth =  b.toString('base64');
      
      fetch('https://api.github.com/user',{
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
          return cb({success:true});
      }).catch((err) => { 
          console.log(err)
          return cb(err);
      });
    }
}

module.exports = new AuthService();