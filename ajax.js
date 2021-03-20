(()=>{
    const xhr=new XMLHttpRequest(),
    $xhr=document.getElementById("xhr"),
    $frangment=document.createDocumentFragment();

    xhr.addEventListener("readystatechange",(e)=>{
        if(xhr.readyState!==4)return;
        //console.log(xhr);
        if(xhr.status>=200 && xhr.status < 300){
            //console.log("exito");
            //console.log(xhr.responseText);
            //$xhr.innerHTML=xhr.responseText;
            let json=JSON.parse(xhr.responseText);
            //console.log(json);

            json.forEach(el => {
                const $li=document.createElement("li");
                $li.innerHTML=`${el.name}** ${el.email} ** ${el.phone}`;
                $frangment.appendChild($li);

            });
            $xhr.appendChild($frangment);
        }else{
            //console.log("error");
            let message=xhr.statusText || "ocurrio un eror";
            $xhr.innerHTML=`error ${xhr.status}:${message}`;
        }

        //console.log("este mensaje cargara de cualquier forma");
        

    });

    xhr.open("GET","https://jsonplaceholder.typicode.com/users");

    xhr.send();

})();

(()=>{
    const $fetch=document.getElementById("fetch"), 
    $frangment=document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.ok?res.json():Promise.reject(res))

    .then((json)=>{
        //console.log(json);

        json.forEach(el => {
            const $li=document.createElement("li");
            $li.innerHTML=`${el.name}** ${el.email} ** ${el.phone}`;
            $frangment.appendChild($li);

        });
        $fetch.appendChild($frangment);
    })

    .catch((err)=>{
        //console.log(err);
        let message=err.statusText || "ocurrio un eror";
        $fetch.innerHTML=`error ${err.status}:${message}`; 
    })


    .finally(()=>{
        //console.log("esto se ejecutara independientemente del resultado de fetch")
    });
})(); 


(()=>{
    const $fetchAsync=document.getElementById("fetch-Async"),
    $frangment=document.createDocumentFragment();

    async function getData(){
        try {
          let res=await fetch("https://jsonplaceholder.typicode.com/users"),
          json=await res.json();

          //console.log(res,json);

            //manipulación del error /throw manipula el flujo hacia el catch
          if(!res.ok)throw {status:res.status,statusText:res.statusText}

          json.forEach(el => {
            const $li=document.createElement("li");
            $li.innerHTML=`${el.name}** ${el.email} ** ${el.phone}`;
            $frangment.appendChild($li);

        });
        $fetchAsync.appendChild($frangment);

        } catch (err) {
            //console.log(err);
            let message=err.statusText || "ocurrio un eror";
        $fetchAsync.innerHTML=`error ${err.status}:${message}`; 
            
        }finally{

        }
       
    }
    getData();
})();

(()=>{
    const $axios=document.getElementById("axios"),
    $frangment=document.createDocumentFragment();

    axios
    .get("https://jsonplaceholder.typicode.com/users")
    
    .then(res =>{
        //console.log(res)
        let json=res.data;

        json.forEach(el => {
            const $li=document.createElement("li");
            $li.innerHTML=`${el.name}** ${el.email} ** ${el.phone}`;
            $frangment.appendChild($li);

        });
        $axios.appendChild($frangment);
    })
        
    .catch(err=>{
        //console.log(err.response)
        let message=err.response.statusText || "ocurrio un eror";
        $axios.innerHTML=`error ${err.response.status}:${message}`; 
    })
        
    .finally(()=>{
        //console.log("este finally se ejecutara independientemente del resultado axios")
    });
})();


(()=>{
    const $axiosAsync=document.getElementById("axios-Async"),
    $frangment=document.createDocumentFragment();

    async function getData(){
        try {
            let res= await axios.get("https://jsonplaceholder.typicode.com/users"),
            json= await res.data;

            //console.log(res.data);

            json.forEach(el => {
                const $li=document.createElement("li");
                $li.innerHTML=`${el.name}** ${el.email} ** ${el.phone}`;
                $frangment.appendChild($li);
    
            });
            $axiosAsync.appendChild($frangment);

            
        } catch (err) {
            //console.log(err.response);
            let message= err.response.statusText || "ocurrio un eror";
            $axiosAsync.innerHTML=`error ${err.response.status}:${message}`; 
            
        }finally{
            
        }
    }

    getData();
  
})();

