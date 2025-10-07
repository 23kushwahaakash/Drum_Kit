const w=document.querySelector(".w");
const a=document.querySelector(".a");
const s=document.querySelector(".s");
const d=document.querySelector(".d");
const j=document.querySelector(".j");
const k=document.querySelector(".k");
const l=document.querySelector(".l");

w.addEventListener("click",function(){
    let audio1=new Audio("sounds/tom-1.mp3");
    audio1.play();
    this.style.color="white";
});
a.addEventListener("click",function(){
    let audio2=new Audio("sounds/tom-2.mp3");
    audio2.play();
    this.style.color="white";
});
s.addEventListener("click",function(){
    let audio3=new Audio("sounds/tom-3.mp3");
    audio3.play();
    this.style.color="white";
});
d.addEventListener("click",function(){
    let audio4=new Audio("sounds/tom-4.mp3");
    audio4.play();
    this.style.color="white";
});
j.addEventListener("click",function(){
    let audio5=new Audio("sounds/crash.mp3");
    audio5.play();
    this.style.color="white";
});
k.addEventListener("click",function(){
    let audio6=new Audio("sounds/kick-bass.mp3");
    audio6.play();
    this.style.color="white";
});
l.addEventListener("click",function(){
    let audio7=new Audio("sounds/snare.mp3");
    audio7.play();
    this.style.color="white";
});
document.addEventListener("keydown",function(event){
    makeSound(event.key);
});

function makeSound(key){
    switch (key){
        case "w":
            let audio1=new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
            let audio2=new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
        case "s":
            let audio3=new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
        case "d":
            let audio4=new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
        case "j":
            let audio5=new Audio("sounds/crash.mp3");
            audio5.play();
            break;
        case "k":
            let audio6=new Audio("sounds/kick-bass.mp3");
            audio6.play();
            break;
        case "l":
            let audio7=new Audio("sounds/snare.mp3");
            audio7.play();
            break;
        default:
            alert("Invalid Press..");
        }
}

function addAnimation(key){
    let activeButton=document.querySelector("."+key)
    activeButton.classList.add("pressed");
}
