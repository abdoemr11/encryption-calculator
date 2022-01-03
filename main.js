import {multi_tap, progressive} from "./encryptalgorithm.js";
// const multi_tap = require("./multi-tap.js");
// console.log(encyrpt("abcdefghijklmnopqrstuvwxyz"));
console.log(progressive("abdosaberz", 3));
let encryption_algorithms = [
    multi_tap, progressive
];

// create select options from js 
let my_select = document.querySelector("select");
for(let alg of encryption_algorithms) {
    let new_option = document.createElement("option");
    new_option.value = alg.name;
    new_option.appendChild(document.createTextNode(alg.name));
    my_select.appendChild(new_option);
}
document.forms[0].addEventListener("submit", event=> {
    event.preventDefault();
    
    console.log("button clicked");
    let plain_text = document.getElementById("plain-text").value;
    let my_select = document.getElementsByTagName("select")[0];
    if(my_select.selectedIndex == 0)
    {
        document.querySelector(".cipher-result").replaceChild(document.createTextNode("Please choose encryption algorithm"),document.querySelector(".cipher-result").firstChild);
        
        throw new Error("user doesn't choose algorithm");
    }
    let cipher_text = encryption_algorithms[my_select.selectedIndex-1](plain_text); 
    console.log(cipher_text);
    console.log(`${plain_text} is cipherd to ${cipher_text}`);
    document.querySelector(".cipher-result").replaceChild(document.createTextNode(cipher_text),document.querySelector(".cipher-result").firstChild);
});
