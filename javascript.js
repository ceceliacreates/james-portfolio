var images = document.getElementsByClassName('flex-image');
for (let i=0; i<images.length; i++){
images[i].addEventListener("click", function() {
this.style.height = "500px";
this.style.width = "500px";
this.style.opacity = "1";
this.style.transition = "1s";})

images[i].addEventListener("mouseout", function() {
this.style.height = "250px";
this.style.width = "250px";
this.style.opacity = ".5";
this.style.transition = "1s";
})
}