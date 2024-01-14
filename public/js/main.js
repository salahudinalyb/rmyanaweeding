function playPauseToggle() {
    let track = document.getElementById("track");
    var icon = $("#music-controller-icon");
    if (track.paused) {
      track.play();
      icon.attr("src","../../src/icon/play.svg");
    } else {
      track.pause();
      icon.attr("src","../src/icon/muted.svg");
    }
  };

 // TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
const mySmoothScroll = new SmoothScroll(document.getElementById('smoothScroll'), options);