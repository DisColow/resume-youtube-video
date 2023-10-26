// ==UserScript==
// @name         Youtube Time Keeper
// @namespace    com.me.free.ytbtk
// @version      0.1
// @description  Resume a YouTube video, just like Netflix.
// @author       You
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function(){
        var current_time = document.querySelector('.ytp-time-current').textContent;
        var time_dimensions = current_time.split(":");
        var hours = 0;
        var minutes = 0;
        var secondes = 0;
        time_dimensions.reverse();
        hours = typeof time_dimensions[2] != "undefined" ? parseInt(time_dimensions[2]) : 0;
        minutes = parseInt(time_dimensions[1]);
        secondes = parseInt(time_dimensions[0]);
        var current_time_in_seconds = hours * 3600 + minutes * 60 + secondes;
        var url_with_timecode = new URL(location);
        url_with_timecode.searchParams.set("t", current_time_in_seconds);
        history.pushState({}, "", url_with_timecode);
    }, 1000);
})();