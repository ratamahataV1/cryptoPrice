var btc = document.getElementById("bitcoin");  
var eth = document.getElementById("ethereum");  
var doge = document.getElementById("dogecoin");  

var settings = {
    "async": true,
    "crossDomain": true,
    "url": " [ENTER YOUR API KEY HERE] ",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response) {
    // console.log(response);
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
});