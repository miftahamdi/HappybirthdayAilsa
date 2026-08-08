/* ==================================================
   HAPPY BIRTHDAY AILSA
   LOVE LETTER SCRIPT
================================================== */


/* =========================
   ELEMENTS
========================= */

const typing = document.getElementById("typing");

const btn = document.getElementById("btn");

const hidden = document.getElementById("hidden");

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

const musicPlayer =
    document.getElementById("musicPlayer");

const vinyl =
    document.querySelector(".vinyl");


/* =========================
   TYPING EFFECT
========================= */

const text =
    "Semoga hari ini menjadi hari yang paling indah untukmu yaw ❤️";

let i = 0;

function typeWriter(){

    if(i < text.length){

        typing.textContent += text.charAt(i);

        i++;

        setTimeout(typeWriter,45);

    }

}

typeWriter();



/* =========================
   OPEN SURPRISE
========================= */

btn.addEventListener("click", function(){

    hidden.style.display = "block";

    btn.style.display = "none";


    /*
        Scroll perlahan menuju surat
    */

    setTimeout(() => {

        hidden.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    },300);


    /*
        Coba mulai musik
    */

    playMusic();


    /*
        Buat lebih banyak hearts
    */

    for(let x = 0; x < 12; x++){

        setTimeout(() => {

            createHeart();

        }, x * 100);

    }

});



/* =========================
   MUSIC
========================= */

function playMusic(){

    if(!music){

        return;

    }

    music.play()
        .then(() => {

            setMusicState(true);

        })
        .catch(error => {

            console.log(
                "Musik belum bisa dimainkan:",
                error
            );

        });

}


function pauseMusic(){

    if(!music){

        return;

    }

    music.pause();

    setMusicState(false);

}


function setMusicState(isPlaying){

    if(isPlaying){

        musicPlayer.classList.add("playing");

        vinyl.classList.add("playing");

        musicBtn.textContent = "❚❚";

    }

    else{

        musicPlayer.classList.remove("playing");

        vinyl.classList.remove("playing");

        musicBtn.textContent = "▶";

    }

}



/* =========================
   MUSIC BUTTON
========================= */

musicBtn.addEventListener(
    "click",
    function(){

        if(!music){

            return;

        }

        if(music.paused){

            playMusic();

        }

        else{

            pauseMusic();

        }

    }
);



/* =========================
   MUSIC ENDED
========================= */

music.addEventListener(
    "play",
    function(){

        setMusicState(true);

    }
);


music.addEventListener(
    "pause",
    function(){

        setMusicState(false);

    }
);



/* =========================
   HEART ANIMATION
========================= */

function createHeart(){

    const heart =
        document.createElement("div");


    heart.className = "heart";


    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "♡"
    ];


    heart.textContent =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (14 + Math.random() * 22) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    heart.style.opacity =
        .4 + Math.random() * .5;


    document
        .getElementById("hearts")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    },10000);

}


/*
    Heart muncul secara perlahan
*/

setInterval(
    createHeart,
    700
);



/* =========================
   INITIAL HEARTS
========================= */

for(let x = 0; x < 5; x++){

    setTimeout(
        createHeart,
        x * 500
    );

}



/* =========================
   KEYBOARD MUSIC
========================= */

document.addEventListener(
    "keydown",
    function(event){

        /*
            Space = play / pause
        */

        if(
            event.code === "Space" &&
            event.target.tagName !== "BUTTON" &&
            event.target.tagName !== "INPUT"
        ){

            event.preventDefault();

            if(music.paused){

                playMusic();

            }

            else{

                pauseMusic();

            }

        }

    }
);
