//login here
const form = document.getElementById("login")
const buton = document.getElementById("log")
    buton.addEventListener("click",(e)=>{
        e.preventDefault()
        let obj = {
            email:form.email.value,
            password:form.password.value
        }
        fetch(`https://easy-red-wasp-veil.cyclic.app/user/log`,{
            method:'POST',
            headers:{'Content-type':'Application/json'},
            body:JSON.stringify(obj)
        }).then((res)=>res.json()).then((res)=>{
            console.log(res.token)
            localStorage.setItem("token",JSON.stringify(res.token))
            alert("login done")
        }).catch((err)=>console.log(err))
    })

//signup here
const dform = document.getElementById("signup")
const signbut = document.getElementById("sig")
signbut.addEventListener("click",(e)=>{
        e.preventDefault()
        if(dform.pswd.value != dform.pass.value){
            console.log("yes");
            alert("check your password ... ");
            return;
        }
        let obj = {
            name:dform.name.value,
            email:dform.email.value,
            password:dform.pswd.value
        }
        console.log(obj);
        fetch(`https://easy-red-wasp-veil.cyclic.app/user/reg`,{
            method:'POST',
            headers:{'Content-type':'Application/json'},
            body:JSON.stringify(obj)
        }).then((res)=>res.json()).then((res)=>{
            console.log(res);
        }).catch((err)=>console.log(err))
    })
