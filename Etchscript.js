

const container = document.querySelector('.container');
//create array with each div to be created
const divGrid = []; 
for (let i = 1; i <= 256; i++) {
    divGrid.push(i);
}
//create each div
;
for(let i = 0; i < divGrid.length; i++) {
    const div = document.createElement('div');
    div.className = "grid";
    

    const container = document.getElementById("container");
    document.getElementById("container").appendChild(div);
    div.innerText = "TEST";
    
}