//console.log("SW: Holiwis, is late... ):");

self.addEventListener('install', (event)=>{
    console.log('SW: Instalado');
});

self.addEventListener('activate', (event)=>{
    console.log('SW: Activado y controlando APP');
});

self.addEventListener('fetch', (event)=>{
    if(event.request.url.includes(".png")){
        console.log(event.request.url);
        console.log("Es una imagen");

        let newResp = fetch('/img/sheep.png');
        event.respondWith(newResp);
    }

    if(event.request.url.includes(".gif")){
        console.log(event.request.url);
        console.log("Es una imagen");

        let newResp = fetch('/img/sheep.png');
        event.respondWith(newResp);
    }

    if(event.request.url.includes("page.css")){
        console.log(event.request.url);
        console.log("Es un css");

        let newResp = new Response(`body{
            background-color: #202124 !important;
            color: #EEEEEE;
        }`,{headers:{'Content-Type':'text/css'}});
        event.respondWith(newResp);
    }

    /*if(event.request.url.includes("reqres.in")){
        console.log(event.request.url);
        console.log("Viende de la API");

        let newResp = new Response(`{txt:'Your response has been intercetped'}`,{type:"cors",headers:{'Content-Type':'application/json'}});
        event.respondWith(newResp);
    }*/
    

    console.log(event)
})