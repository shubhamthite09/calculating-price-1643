let user = JSON.parse(localStorage.getItem("userInfo"));
var globleUser;
var globleExe;

fetch(`https://magnificent-dove-kilt.cyclic.app/exe`, {
    method: "GET",
    headers: { "Content-type": "Application/json",
    authorization: `Bearer ${user.token}`,
      },
  })
    .then((res) => res.json())
    .then((res) => {
        
        globleExe=res
    })
    .catch((err) => console.log(err));

fetch(`https://magnificent-dove-kilt.cyclic.app/work`, {
    method: "GET",
    headers: { "Content-type": "Application/json",
    authorization: `Bearer ${user.token}`,
      },
  })
    .then((res) => res.json())
    .then((res) => {
        
        globleUser=res
    })
    .catch((err) => console.log(err));

    let massaged = []

    setTimeout(()=>{
        console.log(globleExe);
        console.log(globleUser);
        for(let i=0;i<globleUser.length;i++){
            for(let j=0;j<globleExe.length;j++){
                if(globleUser[i].exe == globleExe[j]._id){
                    globleExe[j].del=globleUser[i]._id
                    globleExe[j].set=globleUser[i].set
                    massaged.push(globleExe[j])
                }
            }
        }
        console.log(massaged);
        render(massaged)
    },500)
    




let dom = document.getElementById("plane");

function render(data) {
  data.forEach((ele, ind) => {
    let div = document.createElement("div");
    div.className = "exeClass";
    let title = document.createElement("p");
    title.innerText = ele.topic;
    let img = document.createElement("img");
    img.src = ele.simg;
    let dis = document.createElement("p");
    dis.innerText = ele.sdis;
    let set = document.createElement("p");
    set.innerText = `Total set : ${ele.set}`;
    let add = document.createElement("button");
    add.innerText = "remove";
    add.addEventListener("click", () => {
      
      fetch(`https://magnificent-dove-kilt.cyclic.app/work/${ele.del}`, {
        method: "DELETE",
        headers: {
          "Content-type": "Application/json",
          authorization: `Bearer ${user.token}`,
        }
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          alert("removed");
        })
        .catch((err) => console.log(err));
    });
    div.append(title, img, dis,set, add);
    dom.append(div);
  });
}

document.getElementById("home").addEventListener("click",()=>{
    window.location.href="./index.html"
})
