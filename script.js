

function turnOnOverlay() {
  var x = document.getElementById("overlay_content_2");
  
  x.style.display = "inline";
  x.style.position = "fixed";


}

function turnOFFOverlay() {
  var x = document.getElementById("overlay_content_2");
  x.style.display = "none";
  


}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function toggleAvatar() {
  var x = document.getElementById("Avatar");
  x.src = "/assets/avatar2.jpg";
  document.getElementById('id01').style.display='none';
}



