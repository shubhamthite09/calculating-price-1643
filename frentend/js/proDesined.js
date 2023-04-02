let user = JSON.parse(localStorage.getItem("userInfo"));

let alldivs = document.querySelectorAll(".div");
console.log(alldivs);
alldivs.forEach((ele,ind)=> {
    console.log(ele);
    ele.addEventListener("click",()=>{
        console.log("yes");
        fetch(`https://magnificent-dove-kilt.cyclic.app/work/pro`, {
        method: "GET",
        headers: { 
            "Content-type": "Application/json",
            authorization: `Bearer ${user.token}`
        }
      })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            alert("pro desined is uploded ... ");
        })
        .catch((err) => console.log(err));
    })
});


document.getElementById("home").addEventListener("click",()=>{
    window.location.href="./index.html"
})
