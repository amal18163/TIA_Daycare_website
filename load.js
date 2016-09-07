/*
FILE NAME: load.js
WRITTEN BY: Amal Tidjani
DATE: April 2016

PURPOSE: Load Content

Loads universal (repetitive) HTML and JS elements from index.html
into the sites other pages.
*/

/*Load header HTML and use run_header to load JS animations*/
$("#header_here").load("index.html header", run_header);

/*Load navigation menu*/
$("#nav_here").load("index.html nav", run_nav);

/*Load footer content*/
$("#footer_here").load("index.html footer", run_footer);

/*Load validation icons/signature content*/
$("#icon_sig_here").load("index.html #icon_sig");
