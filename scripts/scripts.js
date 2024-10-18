const title = document.getElementById('title');
title.style.display = 'none';
const imagesContainer = document.getElementById('imagesContainer');
imagesContainer.style.display = 'none';

document.getElementById('playButton').addEventListener('click', function() {
    this.style.display = 'none'; 
    title.style.display = 'block';
    imagesContainer.style.display = 'grid';
    hoverImages();
});

function hoverImages(){
    let images = document.querySelectorAll('.imagesStyles');
    images.forEach(img => {
        let countryName = img.id;
        let originalTitle = title.textContent;
        const originalSrc = img.src; 
        img.addEventListener('mouseover', function() {
            img.src = `images/${countryName}IMG.jpg`;
            title.textContent = countryName;
        });

        img.addEventListener('mouseout', function() {
            setTimeout(function() {
                img.src = originalSrc; 
                title.textContent = originalTitle; 
            }, 500);
        });
    });
}