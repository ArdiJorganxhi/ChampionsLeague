
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });
  
  
  
  
  const video = document.getElementById('video');
  const videoControls = document.getElementById('video-controls');
  
  const videoWorks = !!document.createElement('video').canPlayType;
  if (videoWorks) {
    video.controls = false;
    videoControls.classList.remove('hidden');
  }
  
  const playButton = document.getElementById('play');
  
  
  function togglePlay() {
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }
    }
    function updatePlayButton() {
      playbackIcons.forEach(icon => icon.classList.toggle('hidden'));
    
      if (video.paused) {
        playButton.setAttribute('data-title', 'Play (k)')
      } else {
        playButton.setAttribute('data-title', 'Pause (k)')
      }
    }
  
    // Add eventlisteners here
  playButton.addEventListener('click', togglePlay);
  const playbackIcons = document.querySelectorAll('.playback-icons use');
  // updatePlayButton updates the playback icon and tooltip
  // depending on the playback state
  function updatePlayButton() {
      playbackIcons.forEach(icon => icon.classList.toggle('hidden'));
    }
  
  video.addEventListener('play', updatePlayButton);
  video.addEventListener('pause', updatePlayButton);
  
  
  
  
  