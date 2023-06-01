function playM(){
    let audio = new Audio("music.mp3");
    audio.play();
    setInterval(() => {
        audio.pause();
    }, 2000);
}
function mus2() {
    let audio = new Audio("musice2.mp3");
    audio.play();
    setInterval(() => {
        audio.pause();
    }, 1500);
}
function mus3() {
    let audio = new Audio("music3.mp3");
    audio.play();
    setInterval(() => {
        audio.pause();
    }, 2000);
}
let pM = document.getElementById('box-1');
pM.addEventListener("click",playM);

let m2 = document.getElementById('box-2');
m2.addEventListener("click",mus2);

let m3 = document.getElementById('box-3');
m3.addEventListener('click',mus3);

let pM1 = document.getElementById('box-4');
pM1.addEventListener("click",mus2);

let pM2 = document.getElementById('box-5');
pM2.addEventListener("click",playM);

let pM3 = document.getElementById('box-6');
pM3.addEventListener("click",playM);

let pM4 = document.getElementById('box-7');
pM4.addEventListener("click",mus3);