/*
FILE NAME: set_site_colors.js
WRITTEN BY: Amal Tidjani & Yuanzhen Pan
DATE: April 2016

PURPOSE: Set Page Color Scheme

The color scheme of each page is dynamically set so that
the clients can easily change the colors of certain pages
or elements if they so choose in the future. Because each
page has a different layout/structure, a function to dynamically
change colors is needed for each page.
*/


function home_palette(c1, c2, c3, c4, c5, c6) {
/*Dynamically changes the home page's color scheme based on
  a palette of six inputted colors.*/
    $("body").css("background-color", c1);
    $("footer").css("background-color", c2);
    $("#about_panel").css("background-color", c3);
    $("#care_panel").css("background-color", c4);
    $("#activities_panel").css("background-color", c5);
    $("#admissions_panel").css("background-color", c6)
}

function about_palette(c1, c2, c3, c4) {
/*Dynamically changes the about page's color scheme based on
  a palette of four inputted colors.*/

    $("#values").css("background-color", c1);
    $(".icon_container").css("background-color", c2);
    $(".icon_container").css("border-color", c3);
    $("#prism").css("background-color", c2);
    $("#prism").css("border-color", c3);
    $(".puzzle").css("border-top-color", c1);
    $("#mission").css("background-color", c2);
    $("#mission").css("border-right-color", c4);
    $("#islamic").css("background-color", c4);
}

function staff_palette(c1, c2, c3) {
/*Dynamically changes the staff page's color scheme based on
  a palette of three inputted colors.*/

    $("h1").css("background-color", c1);
    $("h1").css("border-color", c1);
    $("#staff_t_1").css("background-color", c2);
    $("#staff_i_1").css("background-color", c2);
    $("#staff_t_2").css("background-color", c3);
    $("#staff_i_2").css("background-color", c3);
}

function care_palette(c1, c2, c3, c4) {
/*Dynamically changes the child care page's color scheme
  based on a palette of four inputted colors.*/

    $("h1").css("background-color", c1);
    $("h1").css("border-color", c1);
    $("#i_container1").css("background-color", c2);
    $("#i_container2").css("background-color", c3);
    $("#i_container3").css("background-color", c4);
    $("#t_container1").css("background-color", c4);
    $("#t_container2").css("background-color", c2);
    $("#t_container3").css("background-color", c3);
}

function activities_palette(c1, c2, c3, c4, c5){
  $("h1").css("background-color", c1);
  $("h1").css("border-color", c1);
  $("#arts_and_crafts").css("background-color", c2);
  $("#story_time").css("background-color", c3);
  $("#circle_time").css("background-color", c4);
  $("#structured_play").css("background-color", c5);

}
function admission_palette(c1, c2){
  $("h1").css("background-color", c1);
  $("h1").css("border-color", c1);
  $("#admission_text").css("background-color",c2);
}

function contact_palette(c1, c2, c3){
  $("h1").css("background-color", c1);
  $("h1").css("border-color", c1);
  $("#contact_info").css("background-color",c2);
  $("#email_form form").css("background-color",c3);
}

function safey_palette(c1, c2){
  $("h1").css("background-color", c1);
  $("h1").css("border-color", c1);
  $("#health_safety_text").css("background-color",c2);
}


/*Set Site's Color Scheme*/
home_palette("#8fccba", "#FFC6C4", "#FA8784", "#FED40C", "#B8C601", "#EF6503");
about_palette("#FD8C39","#FED40C", "#8C3D02", "#B8C601");
staff_palette("#B8C601", "#FA8784", "#FED40C");
care_palette("#EF6503", "#B8C601", "#FA8784", "#FED40C");
activities_palette("#EF6503","#FA8784", "#FED40C", "#B8C601", "#EF6503");
admission_palette("#B8C601","#FED40C");
contact_palette("#EF6503","#FA8784","#FED40C");
safey_palette("#B8C601","#FED40C");
