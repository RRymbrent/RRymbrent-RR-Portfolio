$(".bar").each(function(){
    $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
    },2000)
});

function filterSelection(category) {
    var elements = document.getElementsByClassName('image');
    if (category === 'all') {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'block';
      }
    } else {
      for (var i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains(category)) {
          elements[i].style.display = 'block';
        } else {
          elements[i].style.display = 'none';
        }
      }
    }
  }

  function openFullScreen(imageSrc) {
    var fullscreenOverlay = document.createElement('div');
    fullscreenOverlay.className = 'fullscreen-overlay';

    var fullscreenImage = document.createElement('img');
    fullscreenImage.src = imageSrc;
    fullscreenImage.className = 'fullscreen-image';

    fullscreenOverlay.appendChild(fullscreenImage);

    fullscreenOverlay.onclick = function (event) {
      if (event.target === fullscreenOverlay) {
        document.body.removeChild(fullscreenOverlay);
      }
    };

    document.body.appendChild(fullscreenOverlay);
  }