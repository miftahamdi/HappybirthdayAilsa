const text =
"Semoga hari ini menjadi hari yang paling indah untukmu yaw ❤️";

const music = document.getElementById("bgMusic");

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,50);

}

}

typeWriter();

document.getElementById("btn").onclick=function(){

document.getElementById("hidden").style.display="block";

this.style.display="none";

music.play().catch(err => {
        console.log("Gagal memutar musik:", err);
    });

}

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(Math.random()*3+3)+"s";

heart.style.fontSize=(20+Math.random()*30)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,250);
