/*
FILE NAME: nav_bar.js
WRITTEN BY: Amal Tidjani
DATE: April 2016

PURPOSE: Dynamic Navigation Menu

In this file, the navigation menu's colors (both when hovered on and off)
are dynamically set. This way, changing the navigation menu's colors can be
done directly within the run_nav() function as opposed to combing through
CSS code. Additionally, the navigation tabs are animated so that they rise
when hovered on and shrink back to their original size when they're no
longer being hovered on. Finally, a dynamic drop down menu is created
using slideToggle().
*/

function run_nav() {
/*Dynamically sets the colors of and animates the navigation menu*/

    function set_nav_colors(tab_init, tab_hover, sub_init, sub_hover) {
    /*Sets the initial colors and hover colors of both the navigation menu
      and the drop down menu's tabs*/

        var tab_array = ["#home", "#about", "#staff",
                         "#programs", "#admissions", "#contact"];

        /*Set the tabs' initial color (gold)*/
        for(i = 0; i < tab_array.length; i++)
            $(tab_array[i]).css("background-color", tab_init);

        /*Set the drop down menu's initial color*/
        $("#programs ul").css("background-color", sub_init);

        /*Set tab and drop down menu hover colors*/
        function hover_nav() {

            $(".nav_item").hover(
                function() {
                    $(this).css("background-color", tab_hover);
                    $(this).stop().animate({"top": "-22px", "height": "50px"});
                }, function(){
                    $(this).stop().animate({"top": "0", "height": "28px" });
                    $(this).css("background-color", tab_init);
            });

            /*Set the initial and hover colors of the programs tab.
              Must be dynamically set separately from other tabs
              because "programs" is not part of the .nav_item class*/

            $("#programs").mouseover(function() {
              $(this).css("background-color", tab_hover);
            });

            $("#programs").mouseout(function() {
              $(this).css("background-color", tab_init);
            });

            /*Display drop down menu when programs tab is hovered over*/
            $("#programs").hover(function() {
                $(this).find("ul").stop().slideToggle();
            });

            /*Set initial and hover colors of drop down menu*/
            $("#programs ul li").hover(function() {
              $(this).css("background-color", sub_hover)

            }, function() {
              $(this).css("background-color", sub_init)
            });

        }

        hover_nav(); /*Animate navigation bar*/
      }

      set_nav_colors("gold", "#fd6A54", "#fd6A54", "#8fccba"); /*Set navigation colors*/
}

run_nav(); /*Dynamically animate navigation bar on home page*/
