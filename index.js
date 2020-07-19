if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration =>{
        console.log("registered");
        console.log(registration);
    }).catch(error =>{
        console.log("failed");
        console.log(error)
    });
}