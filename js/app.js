console.log("Hola mundo");
if(navigator.serviceWorker){
    console.log("ok");
    navigator.serviceWorker.register('/sw.js');
    
}else{
    console.log("not ok");
}