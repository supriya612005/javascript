islocationfound = (loc,time) =>{
    if(loc==="vellore"&&time<=2000) return true
    else return false
}

function  location(){
    time=2000
    loc="Vellore"
    return new Promise((locfound,locNotfound)=>{
        setTimeout(()=>{
            if(islocationfound(loc,time)){
                locfound("Location found")
            }
            else{
                locNotfound("Not found")
            }
        },2000);
    })
}
location()
.then((val) => {
    console.log(val);
    
}).catch((val) => {
    console.log(val);
});