const title = document.getElementById('title');
title.style.display = 'none';
const images = document.getElementById('imagesContainer');
images.style.display = 'none';
const reset = document.getElementById('resetGame');
reset.style.display = 'none';

document.getElementById('playButton').addEventListener('click', function() {
    this.style.display = 'none'; 
    title.style.display = 'block';
    images.style.display = 'block';
    reset.style.display = 'block';
    startGame(); 
    generateImages();
});

reset.addEventListener('click', function(){
    startGame();
});

function startGame() {
    return
}

const imgCount = 16;
const imgPath = 'images/green.png';
function generateImages() {
    for (i = 0; i < imgCount; i++){
        let greenElement = document.createElement('img');
        greenElement.src = imgPath;
        greenElement.alt = `Image ${i + 1}`;
        greenElement.classList.add('imagesStyles');
        images.appendChild(greenElement);
    }
}

