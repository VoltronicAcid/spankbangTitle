// ==UserScript==
// @name         SpankBang Title
// @namespace    https://github.com/VoltronicAcid/
// @homepageURL  https://github.com/VoltronicAcid/spankbangTitle
// @downloadURL  https://github.com/VoltronicAcid/spankbangTitle/raw/master/spankbangTitle.user.js
// @version      1.0.1
// @description  Remove "Watch" from the title of videos on spankbang.com
// @author       VoltronicAcid
// @match        https://spankbang.com/*/video/*
// @match        https://*.spankbang.com/*/video/*
// @noframes
// ==/UserScript==

document.title = document.title.substring(6);
