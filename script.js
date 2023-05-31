
onkeyup = event => {
    console.log(event.key);
    const k1 = event.key;
    if (k1 == 'w') {
        let play = document.getElementById('box-1');
        document.getElementById('box-1').classList.add('nums');
        play.addEventListener("click", playMusic());
        setInterval(() => {
            document.getElementById('box-1').classList.remove('nums');
        }, 2000);
    }
    else if (k1 == 'a') {
        let play = document.getElementById('box-2');
        document.getElementById('box-2').classList.add('nums');
        setInterval(() => {
            document.getElementById('box-2').classList.remove('nums');
        }, 2000);

        play.addEventListener("click", music2());
    }
    else if (k1 == 's') {
        let play = document.getElementById('box-3');
        document.getElementById('box-3').classList.add('nums');
        setInterval(() => {
            document.getElementById('box-3').classList.remove('nums');
        }, 2000);

        play.addEventListener("click", music3());
    }
    else if (k1 == 'd') {
        let play = document.getElementById('box-4');
        document.getElementById('box-4').classList.add('nums');
        setInterval(() => {
            document.getElementById('box-4').classList.remove('nums');
        }, 2000);

        play.addEventListener("click", music2());
    }
    else if (k1 == 'j') {
        let play = document.getElementById('box-5');
        document.getElementById('box-5').classList.add('nums');
        setInterval(() => {
            document.getElementById('box-5').classList.remove('nums');
        }, 2000);

        play.addEventListener("click", playMusic());
    }
    else if (k1 == 'k') {
        let play = document.getElementById('box-6');
        document.getElementById('box-6').classList.add('nums');
        setInterval(() => {
            document.getElementById('box-6').classList.remove('nums');
        }, 2000);

        play.addEventListener("click", playMusic());
    }
    else if (k1 == 'l') {
        let play = document.getElementById('box-7');
        document.getElementById('box-7').classList.add('nums');
        setInterval(() => {
            document.getElementById('box-7').classList.remove('nums');
        }, 2000);

        play.addEventListener("click", music3());
    }
    function playMusic() {
        let audio = new Audio("music.mp3");
        audio.play();
        setInterval(() => {
            audio.pause();
        }, 2000);
    }
    function music2(){
        let audio = new Audio("musice2.mp3");
        audio.play();
        setInterval(() => {
            audio.pause();
        }, 1500);
    }
    function music3(){
        let audio = new Audio("music3.mp3");
        audio.play();
        setInterval(() => {
            audio.pause();
        }, 2000);
    }
}
