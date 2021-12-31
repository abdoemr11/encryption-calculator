import {multi_tap, progressive} from "./encryptalgorithm.js";
// const multi_tap = require("./multi-tap.js");
// console.log(encyrpt("abcdefghijklmnopqrstuvwxyz"));
console.log(progressive("abdosaberz", 3));

document.forms[0].addEventListener("submit", event=> {
    console.log("button clicked");
    event.preventDefault();
});