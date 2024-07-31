let reach=new Promise((resolve,reject)=>{
    const reached=false
    if(reached)
        setTimeout(resolve,3000,"Reached!!")
    else
     reject("Not reached")
})

async function asyncstatus(){
    try{
    console.log("wait checking data");

    res=await reach
    console.log(res);
    console.log("thank you for visiting.");
    }
    catch(err){
        console.log(err);
    }
}
asyncstatus()