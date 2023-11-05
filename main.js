// var url ="https://www.jsonstore.io/8ba4fd855086288421f770482e372ccb5a05d906269a34da5884f39eed0418a";

function getrandom(){
    var random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
    return random_string()
}

function geturl(){
     var url = document.getElementById(“urlinput”).value;
     var protocol_ok = url.startsWith(“http://”) || url.startsWith(“https://”) || url.startsWith(“ftp://”);
     if(!protocol_ok){
         newurl = “http://”+url;
         return newurl;
     }else{
         return url;
     }

  function genhash(){
    if (window.location.hash == “”){
        window.location.hash = getrandom();
    }
  }
const shortUrl = () => {
  console.log("clickerrr");
};
