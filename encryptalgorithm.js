
export const multi_tap = function (phrase) {
  phrase = phrase.toUpperCase();
  let result = "";
  for(let ch of phrase)
  {
    let i = (ch.charCodeAt(0) - "A".charCodeAt(0));
    console.log(ch + "   " + i);
    let y = i % 3;
    let z = parseInt(i / 3)+2;
    if(i == 18) {y = 4; z = 7;}
    if(i == 25) {y = 4; z = 9;}
    for(let x = -1; x < y; x++)
      result += z;
      
    // console.log(i.charCodeAt(0));
    result+="-";
  }
  return result.substring(0, result.length-1);
}
    // do some error checking
// plaintext = document.getElementById("p").value.toLowerCase().replace(/[^a-z]/g, "");  
// k = document.getElementById("k").value.toLowerCase().replace(/[^a-z]/g, ""); 
// if(plaintext.length < 1){ alert("please enter some plaintext (letters and numbers only)"); return; }    
//     if(k.length <= 1){ alert("keyword should be at least 2 characters long"); return; }
export const progressive = function(phrase, N)
{
  phrase = phrase.toUpperCase();
  let i = 1;
  let result = "";
  for (let ch of phrase)
  {
    let cipher_ch_index = (ch.charCodeAt(0) + i)%("A".charCodeAt(0)+26);
    if(cipher_ch_index < 65)
      cipher_ch_index+= 65;
    let cipher_ch = String.fromCharCode(cipher_ch_index);
    console.log((ch.charCodeAt(0) + i) +"==>> "+cipher_ch.charCodeAt(0));
    result += cipher_ch + "-";
    i++;
    // if(i++ >= N)
    //  i = 1;
  }
  return result.substring(0, result.length-1);

}