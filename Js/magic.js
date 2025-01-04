let video = document.querySelector('.video');
let playbackRate = 1.0;
video.addEventListener('ended', function() {
    video.currentTime = 0; // Reset the video to the beginning
    playbackRate += 0.2; // Increase the playback rate
    video.playbackRate = playbackRate; // Set the new playback rate
    video.play(); // Play the video again
});

video.addEventListener('click', function() {
    video.style.transition = 'transform 1s ease-in-out';
    video.style.transform = 'scale(1.5) rotate(360deg)';
    
    // Create explosion gif element
    let explosion = document.createElement('img');
    explosion.src = 'Img/explosion.gif';
    explosion.style.position = 'absolute';
    explosion.style.top = '50%';
    explosion.style.left = '50%';
    explosion.style.transform = 'translate(-50%, -50%)';
    explosion.style.zIndex = '1000';
    explosion.style.width = '100%'; // Adjust the width
    explosion.style.height = '100%'; // Adjust the height
    document.body.appendChild(explosion);

    // Play explosion sound
    let explosionSound = new Audio('sounds/explosion.mp3');
    explosionSound.play();

    setTimeout(() => {
    window.location.href = 'index.html';
    }, 1000);
});

// Disable right-click on video
video.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});