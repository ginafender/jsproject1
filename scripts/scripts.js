title = document.getElementById("title");
title.style.display = 'none';


document.getElementById('playButton').addEventListener('click', function() {
    this.style.display = 'none'; 
    title.style.display = 'block';
    startGame(); 
});

function startGame() {
    alert("Game is starting!");
}