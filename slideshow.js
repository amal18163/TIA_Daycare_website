/*
FILE NAME: activities.js
AUTHOR: Yuanzhen Pan
DATE: April 23 2016
Explanation: activities.js contains functions that create a manual slide
show on the page.
*/

// load repetitive elements on the page
$("#header-goes-here").load("index.html header");
$("#nav-goes-here").load("index.html nav");
$("#footer-goes-here").load("index.html fotter");

//event handlers for buttons on the slideshow
$("#next_slide").click(plusOne);
$("#previous_slide").click(minusOne);


/* global variables
- array that contains name of the image files
- integer variable that indicate the current index of the slide show
 */
var slides=["slideshow_1.png","slideshow_2.png","slideshow_3.png","slideshow_4.png","slideshow_5.png"];
var currentIndex=0;

// fuction that display the image
function displaySlide(currentIndex){
  var file= slides[currentIndex];
  var url = "images/" + file;
   $("#slideshow img").attr("src",url);
}

// fuction that show the next image when next button is clicked
function plusOne() {
  currentIndex = currentIndex+1; // increase the currentIndex by one

  //check if the currentIndex has exceeded the length of the array slides
  //if it does, chage the currentIndex back to 0, the slideshow restarts

  if(currentIndex==slides.length){
    currentIndex=0;
  }

  // if currentIndex is smaller than 0, change the indext to the last in the array
  // the last photo in the slideshow will be displayed
  else if(currentIndex<0){
    currentIndex=slides.length-1;
  }
  // invoke displaySlide to display image files
  displaySlide(currentIndex);
}

// fuction that show the previous image when previous button is clicked
function minusOne() {
  currentIndex = currentIndex-1;
  if(currentIndex==slides.length){
    currentIndex=0;
  }
  else if(currentIndex<0){
    currentIndex=slides.length-1;
  }
  // invoke displaySlide to display image files
  displaySlide(currentIndex);
}
