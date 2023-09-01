console.log("first statement");
function getfullname(cb){
    setTimeout(() => {
        
cb()
    }, 3000);
}
console.log("second statement")
function fullname(){
    console.log("Abdullah Jawed")
}
getfullname(fullname)



function prom(complete){
    return new Promise(function(resolve, reject){
        if (complete){
            resolve("promise successful");
        }
        else{
            reject("promise rejected")
        }    
        
    })
}
prom(false).catch((response) => {console.log(response)})
