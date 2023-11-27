// // var url ="https://www.jsonstore.io/8ba4fd855086288421f770482e372ccb5a05d906269a34da5884f39eed0418a";

// function getrandom(){
//     var random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
//     return random_string()
// }

// function geturl(){
//      var url = document.getElementById("urlinput").value;
//      var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
//      if(!protocol_ok){
//          newurl = "http://" +url;
//          return newurl;
//      }else{
//          return url;
//      }

//   function genhash(){
//     if (window.location.hash == ""){
//         window.location.hash = getrandom();
//     }
//   }

// function send_request(url) {
//     this.url = url;
//     $.ajax({
//         "url": endpoint + "/" + window.location.hash.substr(1),
//         "type": "POST",
//         "data": JSON.stringify(this.url),
//         "dataType": "json",
//         "contentType": "application/json; charset=utf-8"
//     })
//         }

// var hashh = window.location.hash.substring(1)

// if (window.location.hash != "") {
//     $.getJSON(endpoint + "/" + hashh, function (data) {
//         data = data["result"];
//     if (data != null) {
//             window.location.href = data;
//     }
// });

// const shortUrl = () => {
//   var longurl = geturl();
//     genhash();
//     send_request(longurl);
// simplecopy(window.location.href);

// }

// get DOM elements

const apiUrl = "https://api-ssl.bitly.com/v4/shorten";

const alertDOM = document.getElementById("alert");
const spinner = document.getElementById("spinner");
const longUrlEl = document.getElementById("longUrl");
const longUrlText = document.getElementById("longUrlText");
const shortUrlText = document.getElementById("shortUrlText");

async function shortUrl() {
  const longUrl = longUrlEl.value;

  if (longUrl.length <= 0 ) {
    shortUrlText.innerText = "Enter a valid long url";
    longUrlEl.focus();
    longUrlEl.select();
    return;
  }
  
  spinner.classList.remove("hidden");

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 6b973afd6e512c3ca479be87f313de91d0777ba6",
      },
      body: JSON.stringify({
        long_url: longUrl
      }),
    });

    const data = await res.json();

    const shortUrl = data.link;

    shortUrlText.innerHTML = `shortened url: <a href=${shortUrl}>${shortUrl}</a>`;

    simplecopy(shortUrl);

    alertDOM.innerText = "long url has been shortened and copied to clipboard";

    setTimeout(() => (alertDOM.innerText = ""), 5000);
    console.log(data);
  } catch (error) {
    shortUrlText.innerText = "something went wrong";
    // shortUrlText.innerHTML =`<button onclick="window.location.reload()" class="bg-teal-950 text-teal-50 p-2 rounded-md hover:bg-teal-700 transition-all duration-300">retry</button>`
  }

  spinner.classList.add("hidden");
}
