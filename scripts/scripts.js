const title = document.getElementById('title');
title.style.display = 'none';
const images = document.getElementById('imagesContainer');
images.style.display = 'none';
// const reset = document.getElementById('resetGame');
// reset.style.display = 'none';

document.getElementById('playButton').addEventListener('click', function() {
    this.style.display = 'none'; 
    title.style.display = 'block';
    images.style.display = 'block';
    // reset.style.display = 'block';
    startGame(); 
    // generateImages();
});

reset.addEventListener('click', function(){
    startGame();
});

function startGame() {
    return
}

// const flags = ['images/argentina.png', 'images/argentina.png', 'images/brazil.png', 'images/brazil.png',
//             'images/chile.png', 'images/chile.png', 'images/colombia.png', 'images/colombia.png',
//             'images/drj.png', 'images/drj.png', 'images/indonesia.png', 'images/indonesia.png',
//             'images/sweden.png', 'images/sweden.png', 'images/switzerland.png', 'images/switzerland.png'];

// const imgCount = flags.length;
// const imgPath = 'images/green.png';
// function generateImages() {
//     for (i = 0; i < imgCount; i++) {
//         let container = document.createElement('div');
//         container.classList.add('imageContainer');

//         let greenElement = document.createElement('img');
//         greenElement.src = imgPath;
//         greenElement.alt = `Image ${i + 1}`;
//         greenElement.classList.add('greenStyles');

//         let flagElement = document.createElement('img');
//         flagElement.src = flags[i];
//         flagElement.alt = flags[i];
//         flagElement.classList.add('imagesStyles');

//         container.appendChild(flagElement);
//         container.appendChild(greenElement);
        
//         images.appendChild(container);
//     }
// }


