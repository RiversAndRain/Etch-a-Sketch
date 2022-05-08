
//create each div
function createGrid(rows, columns) {
for(let i = 0; i < (rows * columns); i++) {
    let div = document.createElement('div');
    div.classList.add("grid");
    div.style.backGroundColor = "red";
    //div.className = "grid";    
    //div.innerText = "TEST";
    const container = document.getElementById("container");
    document.getElementById("container").appendChild(div);
  }
  hoverColor();
}


//add mouseover event
function hoverColor() {
let gridItems = document.querySelectorAll(".grid");
gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "red";
    });
});
}

//call grid creation function
createGrid(16, 16);
