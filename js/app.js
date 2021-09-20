let url = window.location.href;
let swDirectory = "/pwa-p1/sw.js"

if(navigator.serviceWorker){
    console.log("ok");
    if(url.includes('localhost')){
        swDirectory = '/sw.js'
    }
    navigator.serviceWorker.register(swDirectory);
    
}else{
    console.log("not ok");
}