//document.getElementById("count-el").innerText = 7



let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(countEl);



let count = 0;
function increment(){
    count = count + 1;
    countEl.innerText = count;
    console.log(count);
}


function save(){
    
    let prevEnt = count ;
    saveEl.innerText += count + " - ";
    count = 0;
    countEl.textContent = 0;
    //console.log(count);
}
save();