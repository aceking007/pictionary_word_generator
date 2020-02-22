function wordMeaning() {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open("GET", "https://owlbot.info/api/v4/dictionary/vitrine");
  xhr.setRequestHeader('Authorization',' Token 325e36c300652517c62ea6b903542706f5f08414');
  xhr.send();
}

function Owlbot(token) {
    if (!token) {
      throw "Token is not provided. if you don't have a token, you can get one at https://owlbot.info.";
    }
    return {
        client: axios.create({
            baseURL: 'https://owlbot.info',
            timeout: 5000,
            headers: {'Authorization': 'Token '+token}
        }),
        data: null,
        define: async function(word) {
            if(!word){
                throw 'Word is not provided.';
            }
            var self = this;
            await this.client.get('/api/v4/dictionary/'+word).then(function (response) {
                self.data = response.data;
            }).catch(function(error){
                throw error;
            });
            return self.data;
        }
    }
}

function meani(){
  var client = Owlbot("325e36c300652517c62ea6b903542706f5f08414");
  client.define(currentWord).then(function(result){
     console.log(result);
  });
}
