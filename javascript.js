/* Enlarge images on click and revert size on mouseout*/
/*Enlarges image on click*/
var images = document.getElementsByClassName('flex-image');
for (let i=0; i<images.length; i++){
images[i].addEventListener("click", function() {
this.classList.toggle("enlarged");
this.style.transition = "1s";})
}
/*reverts to original size on mouseout*
images[i].addEventListener("mouseout", function() {
this.style.width = "250px";
this.style.height = "165px";
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
twoDim.addEventListener("click", function () {
    /*display 2D images if hidden*/
    for (let i=0; i<twoDimArray.length; i++) {
        if (twoDimArray[i].style.display === 'none') {
            twoDimArray[i].style.display = 'flex';
        }
        else {
            twoDimArray[i].style.display = 'flex';
        }
    }
    /*hide 3D images if shown*/
    for (let a=0; a<threeDimArray.length; a++) {
        if (threeDimArray[a].style.display === 'flex') {
            threeDimArray[a].style.display = 'none';
        }
        else {
            threeDimArray[a].style.display = 'none';
        }
    }
})
/*Add event listener to 3D button and functions to display 3D and hide 2D*/
threeDim.addEventListener("click", function () {
    /*display 3D images if hidden */
    for (let i=0; i<threeDimArray.length; i++) {
        if (threeDimArray[i].style.display === 'none') {
            threeDimArray[i].style.display = 'flex';
        }
        else {
            threeDimArray[i].style.display = 'flex';
        }
    }
    /*hide 2D images if shown*/
    for (let a=0; a<twoDimArray.length; a++) {
        if (twoDimArray[a].style.display === 'flex') {
            twoDimArray[a].style.display = 'none';
        }
        else {
            twoDimArray[a].style.display = 'none';        }
    }
})