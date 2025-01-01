let under = document.querySelectorAll(".box");
let btn = document.querySelector(".reset");
let ashi = document.querySelector(".msgall")
let ashu= document.querySelector("#msg");
let vir = document.querySelector("#msgbtn");

let startO = true;

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

under.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (startO) {
      box.innerText = "0";
      startO = false;
    } else {
      box.innerText = "X";
      startO = true;
    }
    box.disabled = true;

    checkwiner();
  });
});

const checkwiner = () =>{
  for (let ashu of win) {
    let val1 = under[ashu[0]].innerText;
    let val2 = under[ashu[1]].innerText;
    let val3 = under[ashu[2]].innerText;

    if(val1 !="" && val2 !="" && val3!= ""){
      if(val1 === val2 && val2=== val3){
        console.log('Winner');
        showwinner(val1);
      }
   } 
  }
}

const showwinner = (winner) =>{
  ashu.innerText  = `Congratulation Winner is ${winner}`;
  ashi.classList.remove("hide");
  under.forEach((box) => {
    box.disabled = true;
  });

  newbtn();

  draw();
}

const draw = (evt) =>{
  let draw = Array.from(under).every((box) => {
    return box.innerText !== "";
  });
  if(draw){
    ashu.innerText = "Game will Draw";
    ashi.classList.remove("hide");
  }
}

const newbtn = () =>{
  vir.addEventListener("click", () => {
    under.forEach((box) => {
      box.innerText = "";
      box.disabled = false;
    });
    ashi.classList.add("hide");
  });
}
