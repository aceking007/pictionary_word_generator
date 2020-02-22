function wordMeaning() {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      // console.log(JSON.parse(this.responseText));
      parseMeaning(this.responseText);
    }
  });

  xhr.open("GET", "https://api.dictionaryapi.dev/api/v1/entries/en/" + currentWord);
  xhr.send();
}

function parseMeaning(meaning){
  var listMeaning = [];
  var data = JSON.parse(meaning);
  try {
    for (var wordType in data['0'].meaning){
      // console.log(data['0'].meaning[wordType]['0'].definition);
      listMeaning.push(data['0'].meaning[wordType]['0'].definition);
    }
  }
  catch(err){
    listMeaning.push("Sorry, Meaning not found! Try googling!")
  }
  displayMeaning(listMeaning);
}

function displayMeaning(listMeanings){
  var container = document.getElementById('mean');
  container.innerHTML = '';
  var div = document.createElement("div");
  for (var meaning in listMeanings){
    div.innerHTML += listMeanings[meaning] + '<br><br>';
  }
  container.appendChild(div);
}


//
// function Owlbot(token) {
//     if (!token) {
//       throw "Token is not provided. if you don't have a token, you can get one at https://owlbot.info.";
//     }
//     return {
//         client: axios.create({
//             baseURL: 'https://owlbot.info',
//             timeout: 5000,
//             headers: {'Authorization': 'Token '+token}
//         }),
//         data: null,
//         define: async function(word) {
//             if(!word){
//                 throw 'Word is not provided.';
//             }
//             var self = this;
//             await this.client.get('/api/v4/dictionary/'+word).then(function (response) {
//                 self.data = response.data;
//             }).catch(function(error){
//                 throw error;
//             });
//             return self.data;
//         }
//     }
// }
//
// function meani(){
//   var client = Owlbot("325e36c300652517c62ea6b903542706f5f08414");
//   client.define(currentWord).then(function(result){
//      console.log(result);
//   });
// }
