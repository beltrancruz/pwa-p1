let url = window.location.href;
let swDirectory = "/pwa-p1/sw.js"
//https://beltrancruz.github.io/pwa-p1/
if(navigator.serviceWorker){
    console.log("ok");
    if(url.includes('localhost')){
        swDirectory = '/sw.js'
    }
    navigator.serviceWorker.register(swDirectory);
    
}else{
    console.log("not ok");
}

function doSomething(){
    fetch('https://www.google.com/logos/doodles/2021/googles-23rd-birthday-6753651837109087.2-ladc.gif').then((response) => {
      //var imageURL = window.URL.createObjectURL(response);

      var binaryData = [];
      binaryData.push(response);
      var imageURL = window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))

      document.getElementById("res").src = imageURL;
    }, (Error) => {
      console.log(Error);
    });
    /*
    //console.log("Something...!")
    fetch("https://reqres.in/api/users/1")
    .then(response => {console.log(response); return response.json();})
    .then(data=>{
        console.log(data);
        //console.log(txt)
        //console.log(txt.data)
        //document.getElementById("res").innerHTML = JSON.stringify(txt) 
    })
    */
}