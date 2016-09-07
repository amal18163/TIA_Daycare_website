/*
FILE NAME: animate.js
WRITTEN BY: Amal Tidjani
DATE: April 2016

PURPOSE: Animate Images

Certain images throughout the site (whether they be logos or icons)
perform an animation when hovered on. This file includes all the
functions necessary to produce said animations. Among the animations
include a pulsing effect and linear motion across the page.
*/

function animateTrain() {
/*Animates an image of a toy train so that it starts at the leftmost
  corner of the footer and moves across the page to the rightmost
  corner of the footer. Once it reaches the corner, the train fades
  out and is returned to its initial position. The animated train
  appears on every page.*/

    $("#train").animate({left: "740px"}, 5000, "linear") /*Move train*/
               .animate({opacity: 0}, 400) /*Fade Out*/
               .animate({left: "-10px"}, 800) /*Return to initial position*/
               .animate({opacity: 1}, 400); /*Fade In*/
};


function logo_hover(obj_id, parent_id) {
/*Adds a pusling effect to a logo when it is hovered on*/

  $(parent_id).hover(
  /*Some logos (like the daycare logo) contain an image within a div. Although
    the goal is to only animate the logo's apple, we still want the animation
    to run when a user hovers over any portion of the logo (even the titles).*/

      /*Pulsing function heavily based on code submitted by stackoverflow user Vector at
        http://stackoverflow.com/questions/18781661/jquery-resize-image-with-a-heart-beat-effect*/
      function pulse() {
          $(obj_id).stop().animate({
              width: 100,
              height: 89,
              opacity: 0.5}, 400, function() {
                  $(obj_id).stop().animate({
                      width: 110,
                      height: 97,
                      opacity: 1}, 400)});
      });
}

function icon_hover(obj_id, parent_id) {
/*Nearly identical to previous logo_hover function except the amount by
  which the width and height are animated is different. I considered
  writing a generic function that would grab the image's width/height
  and apply a scale to it but the getHeight() function was not working
  properly. It kept setting the image's height to 0, which caused
  the image to disappear when hovered on. Therefore, I sacrificed
  modularity for intact animations. */

  $(parent_id).hover(

      /*Pulsing function heavily based on code submitted by stackoverflow user Vector at
        http://stackoverflow.com/questions/18781661/jquery-resize-image-with-a-heart-beat-effect*/
      function pulse() {
          $(obj_id).stop().animate({
              width: 150,
              height: 187.4,
              opacity: 0.5}, 400, function() {
                  $(obj_id).stop().animate({
                      width: 165,
                      height: 206.14,
                      opacity: 1}, 400)});
      });
}


function run_header() {
/*Runs all animations in the header. To be used when
  dynamically loading JS into other site pages.*/
    logo_hover("#day_img_header", "#daycare_header", 1.1);
}

function run_footer() {
/*Runs all animations in the footer. To be ysed when
  dynamically loading JS into other site pages*/
   logo_hover("#day_img_footer", "#daycare_footer");
   animateTrain(); /*Run the train during the initial 6.6 second delay*/
   setInterval(animateTrain, 6600); /*Animate Train every 6.6 seconds*/
}


run_header(); /*Run header in index.html*/
run_footer(); /*Run footer in index.html*/
icon_hover("#plant", "#icon_nurture") /*Run icon_hover in about.html*/
