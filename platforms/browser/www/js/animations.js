document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  var btns = document.getElementsByClassName('home-button');
  for (var i in btns) {
    btns[i].addEventListener('click', function(e) {
      navigator.vibrate(70);
    })
  }
}
