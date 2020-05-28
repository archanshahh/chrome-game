var character = document.getElementById("character");
var block = document.getElementById("block");
var score=-1;
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
        score++;
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}

setInterval(function(){
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    if(blockLeft<20 && characterTop==120 || blockLeft<20&&characterTop>90){
        alert("Game Over | Score: "+score);
        block.style.animation="none";
        block.style.display="none";
    }
},1)