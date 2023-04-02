fetch(`http://localhost:8900/exe/`, {
  method: "GET",
  headers: { "Content-type": "Application/json" },
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    render(res);
  })
  .catch((err) => console.log(err));

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
    let imput = document.createElement("input");
    imput.placeholder = "set";
    let add = document.createElement("button");
    add.innerText = "add";
    add.addEventListener("click", () => {
      let user = JSON.parse(localStorage.getItem("userInfo"));
      console.log(user)
      let obj = {
        name: user.name,
        exe: ele._id,
        set: imput.value,
      };
      console.log(obj);
      console.log(ele._id);
      fetch(`http://localhost:8900/work/`, {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(obj),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          alert("added");
        })
        .catch((err) => console.log(err));
    });
    div.append(title, img, dis, imput, add);
    dom.append(div);
  });
}
document.getElementById("home").addEventListener("click",()=>{
  window.location.href="./index.html"
})