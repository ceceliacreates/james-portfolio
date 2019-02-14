/* Enlarge images on click and revert size on mouseout*/
/*Enlarges image on click*/
var images = document.getElementsByClassName('flex-image');
for (let i=0; i<images.length; i++){
images[i].addEventListener("click", function() {
this.style.height = "500px";
this.style.width = "500px";
this.style.opacity = "1";
this.style.transition = "1s";})
/*reverts to original size on mouseout*/
images[i].addEventListener("mouseout", function() {
this.style.height = "250px";
this.style.width = "250px";
this.style.opacity = ".5";
this.style.transition = "1s";
})
}
/*Filter 2D and 3D images on button click*/
/*Create array of 2D and 3D images*/
var twoDimArray = document.getElementsByClassName('2D-image');
var threeDimArray = document.getElementsByClassName('3D-image');
/*Create variables for 2D and 3D buttons*/
var twoDim = document.getElementById('2D');
var threeDim = document.getElementById('3D');
/*Add event listener to 2D button and functions to display 2D and hide 3D*/
twoDim.addEventListener("click", function() {
    for (let i=0; i<twoDimImageArray.length; i++) {
        twoDimArray[i].style.display = "block"
    };
    for (let i=0; i<threeDimArray.length; i++) {
        threeDimArray[i].style.display = "none"
    };
});
/*Add event listener to 3D button and functions to display 3D and hide 2D*/
threeDim.addEventListener("click", function() {
    for (let i=0; i<twoDimImageArray.length; i++) {
        twoDimArray[i].style.display = "none"
    };
    for (let i=0; i<threeDimArray.length; i++) {
        threeDimArray[i].style.display = "block"
    };
});