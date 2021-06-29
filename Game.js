const box1 = document.querySelector(".select1")
const box2 = document.querySelector(".select2")
const box3 = document.querySelector(".select3")
const box4 = document.querySelector(".select4")
const p = document.querySelector('h3');
const counter = document.querySelector(".strokes");
const resetStrokes = document.querySelector(".reset-strokes");
const reload = document.querySelector(".reload");


const colors = ["blue", "green", "yellow", "black"]
let added1 = "added1";
let added2 = "added2";
let added3 = "aaded3";
let added4 = "added4";
let strokes = 0;


counter.innerText = `Previous Strokes : ${window.localStorage.strokes}`;

function changeColor1(){
    
    
    box1.classList.remove(added1);
    var className = Math.round(Math.random()*3);
    box1.classList.add(colors[className]);

    console.log(`${colors[className]}`)
    added1 = colors[className];
    if (added1===added2 && added1===added3 && added1===added4) {
        p.innerText = 'YOU WIN SILLY! What type of game you are playing go get PS5.';
    
    }
    box1.classList.add("animate__headShake");
    counter.classList.add("animate__flipInX");
    setTimeout(()=>{
        box1.classList.remove("animate__headShake");
        
    }, 200);

    setTimeout(()=>{
        counter.classList.remove("animate__flipInX");
    }, 500);
    
        
    

    strokes += 1;
    counter.innerText = `Strokes : ${strokes}`;
    window.localStorage.setItem('strokes', strokes);




    return;
}

function changeColor2(){
    
    box2.classList.remove(added2);
    var className = Math.round(Math.random()*3);
    box2.classList.add(colors[className]);

    console.log(`${colors[className]}`)
    added2 = colors[className];
    if (added1===added2 && added1===added3 && added1===added4) {
        p.innerText = 'YOU WIN SILLY! What type of game you are playing go get PS5.';
    
    }
    box2.classList.add("animate__headShake");
    counter.classList.add("animate__flipInX");
    setTimeout(()=>{
        box2.classList.remove("animate__headShake");
    }, 200);

    setTimeout(()=>{
        counter.classList.remove("animate__flipInX");
    }, 500);

    strokes += 1;
    counter.innerText = `Strokes : ${strokes}`;
    window.localStorage.setItem('strokes', strokes);




    return;
}

function changeColor3(){
    
    box3.classList.remove(added3);
    var className = Math.round(Math.random()*3);
    box3.classList.add(colors[className]);

    console.log(`${colors[className]}`)
    added3 = colors[className];
    if (added1===added2 && added1===added3 && added1===added4) {
        p.innerText = 'YOU WIN SILLY! What type of game you are playing go get PS5.';
    
    }
    box3.classList.add("animate__headShake");
    counter.classList.add("animate__flipInX");
    setTimeout(()=>{
        box3.classList.remove("animate__headShake");
    }, 200);

    setTimeout(()=>{
        counter.classList.remove("animate__flipInX");
    }, 500);

    strokes += 1;
    counter.innerText = `Strokes : ${strokes}`;
    window.localStorage.setItem('strokes', strokes);

    return;
}

function changeColor4(){
    
    box4.classList.remove(added4);
    var className = Math.round(Math.random()*3);
    box4.classList.add(colors[className]);

    console.log(`${colors[className]}`)
    added4 = colors[className];
    if (added1===added2 && added1===added3 && added1===added4) {
        p.innerText = 'YOU WIN SILLY! What type of game you are playing go get PS5.';
    
    }
    box4.classList.add("animate__headShake");
    counter.classList.add("animate__flipInX");
    setTimeout(()=>{
        box4.classList.remove("animate__headShake");
    }, 200);

    setTimeout(()=>{
        counter.classList.remove("animate__flipInX");
    }, 500);

    strokes += 1;
    counter.innerText = `Strokes : ${strokes}`;
    window.localStorage.setItem('strokes', strokes);

    return;
}

resetStrokes.addEventListener("click", ()=>{
    window.localStorage.strokes = 0;
    window.location.reload();
})

reload.addEventListener("click", ()=>{
    window.location.reload();
})


box1.addEventListener("click", changeColor1);
box2.addEventListener("click", changeColor2);
box3.addEventListener("click", changeColor3);
box4.addEventListener("click", changeColor4);

