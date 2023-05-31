
onkeyup = event => {
    // console.log(event.key);
    const k1 = event.key;
    switch (k1) {
        case 'w':
            let play = document.getElementById('box-1');
            play.classList.add('nums');
            setInterval(() => {
                play.classList.remove('nums');
            }, 2000);
            play.addEventListener("keypress", playMusic());
            break;
        case 'a':
            let play1 = document.getElementById('box-2');
            play1.classList.add('nums');
            setInterval(() => {
                play1.classList.remove('nums');
            }, 2000);

            play1.addEventListener("keypress", music2());
            break;
        case 's':
            let play2 = document.getElementById('box-3');
            play2.classList.add('nums');
            setInterval(() => {
                play2.classList.remove('nums');
            }, 2000);

            play2.addEventListener("keypress", music3());
            break;
        case 'd':
            let play3 = document.getElementById('box-4');
            play3.classList.add('nums');
            setInterval(() => {
                play3.classList.remove('nums');
            }, 2000);

            play3.addEventListener("click", music2());
            break;
        case 'j':
            let play4 = document.getElementById('box-5');
            play4.classList.add('nums');
            setInterval(() => {
                play4.classList.remove('nums');
            }, 2000);

            play4.addEventListener("keypress", playMusic());
            break;
        case 'k':
            let play5 = document.getElementById('box-6');
            play5.classList.add('nums');
            setInterval(() => {
                play5.classList.remove('nums');
            }, 2000);

            play5.addEventListener("keypress", playMusic());
            break;
        case 'l':
            let play6 = document.getElementById('box-7');
            play6.classList.add('nums');
            setInterval(() => {
                play6.classList.remove('nums');
            }, 2000);

            play6.addEventListener("keypress", music3());
            break;
    }
    function playMusic() {
        let audio = new Audio("music.mp3");
        audio.play();
        setInterval(() => {
            audio.pause();
        }, 2000);
    }
    function music2() {
        let audio = new Audio("musice2.mp3");
        audio.play();
        setInterval(() => {
            audio.pause();
        }, 1500);
    }
    function music3() {
        let audio = new Audio("music3.mp3");
        audio.play();
        setInterval(() => {
            audio.pause();
        }, 2000);
    }
}
