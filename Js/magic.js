
//Boucle de lecture de la vidéo avec augmentation de sa vitesse à chaque relecture
let video = document.querySelector('.video');
let playbackRate = 1.0;
video.addEventListener('ended', function() {
    video.currentTime = 0; 
    playbackRate += 0.2; 
    video.playbackRate = playbackRate;
    video.play(); 
});

video.addEventListener('click', function() {
    video.style.transition = 'transform 1s ease-in-out';
    video.style.transform = 'scale(1.5) rotate(360deg)';
    
    // Creation de l'explosion pour le GIF
    let explosion = document.createElement('img');
    explosion.src = 'Img/explosion.gif';
    explosion.style.position = 'absolute';
    explosion.style.top = '50%';
    explosion.style.left = '50%';
    explosion.style.transform = 'translate(-50%, -50%)';
    explosion.style.zIndex = '1000';
    explosion.style.width = '100%'; 
    explosion.style.height = '100%';
    document.body.appendChild(explosion);

    // Ajout du son lors de l'explosion
    let explosionSound = new Audio('sounds/explosion.mp3');
    explosionSound.play();

    setTimeout(() => {
    window.location.href = 'index.html';
    }, 1000);
});

//Désactive le click droit sur la vidéo
video.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});