// ==UserScript==
// @name         rBCI - Reddit Background Click Inhibitor
// @description  Prevents clicks on background that opens postings (accidentally)
// @version      0.1
// @author       JeBB
// @namespace    Violentmonkey Scripts
// @grant        none
// @license      MIT
// @icon         https://www.reddit.com/favicon.ico
// @grant        window.onurlchange
// @require      https://code.jquery.com/jquery-3.6.1.slim.min.js
// @match        https://*.reddit.com/*
// @run-at       document-end
// ==/UserScript==




function funcSleep (zEvent) {
setTimeout(funcBCI, 1000);
}


function funcBCI (zEvent) {
$('div.re-feed-container').css("pointer-events","none");
$('div[data-click-id="background"]').css("pointer-events","none");
$('div[data-adclicklocation="background"]').css("pointer-events","none");
//$('div[data-click-id="text"]').css("pointer-events","auto");

$('button').css("pointer-events","auto");
$('a').css("pointer-events","auto");
//$('a[data-click-id="body"]').css("pointer-events","none");
//$('a[data-click-id="body"]').children().css("pointer-events","auto");
$('p').css("pointer-events","auto");
$('figure').css("pointer-events","auto");
//$('video').css("pointer-events","auto");
$('shreddit-player').css("pointer-events","auto");
$('div[data-click-id="media"]').css("pointer-events","auto");

$('div.Comment:contains("savevideo")').remove();
$('div.Comment:contains("Blocked account")').remove();

funcSleep();
}


funcBCI();




//The end
