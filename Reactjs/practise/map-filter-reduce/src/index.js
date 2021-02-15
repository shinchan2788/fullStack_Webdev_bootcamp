var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

import React from "react";
import emojipedia from "./emojipedia";

// function createmean(emojimean){
//     return(
//         const newemojimean={emojimean.meaning}
//     );
// }



// function App(){
//     return(
//      <div>
//          <p>{emojipedia.map(createmean)}</p>
//      </div>   
//     )
// }
// ]

const newemojiee=emojipedia.map(function(emojie){
    return emojie.meaning.substring(0,100);
});
console.log(newemojiee);