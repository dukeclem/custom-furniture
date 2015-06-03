/**
 * Created by dukeclem on 6/3/15.
 */
function palindrome(word) {
//declaration, function name, function argument, opening '{' of function body.
    var reverse = word.split('').reverse().join('');
    //new variable - (reverse), assignment operator, function name, .method w/empty string argument, chained to, .method w/empty argument, chained to, method w/empty string, close;
    if(word === reverse){
    //if function,( word (loosely equal to) operator, variable), open tag of 'if' function body
        console.log('It is a palindrome');
    //log onto console(print), ('statement'), close;
    } else {
    //close 'if' body tag, statement, open of 'else tag',

        console.log('This is not a palindrome');
        //log onto console(print), ('statement'),
    }
    // close of 'else' tag
}
// close tag of 'palindrome' function


palindrome('ttttuuu');
//'palindrome' function w/argument 'ttttuuu', close;

function longestWord(sentence) {
// new function 'longestWord' w/argument sentence, opening body tag
    var myArray  = sentence.split(' ');
    //new variable 'myArray', set to function 'sentence' w/method 'split' w/empty string argument, close;
    console.log(myArray);
    //log to console, variable 'myArray', close;
    var long = '';
    //new variable 'long', set to empty string, close;
    for (var i = 0; i < myArray.length; i++) {
    // for statement, variable i(myArray) set to 0, close; if 'i' is less than length of myArray, close; increment 'i' each time by 1, opening of body tag
        if(myArray[i].length > long.length) {
     //if function w/arguments of var 'myArray's length method being greater than that of var 'long', opening of 'if' function body tag
           long = myArray[i];
           //var 'long', set to var 'myArray[i]', close;
        }
        //closing body tag of 'if' function
    }
    //closing body tag of 'for' function
    return long;
    //statement, var 'long', close;
}
//closing tag
console.log(longestWord('where is the longest word'));
//log function 'longestWord' w/ argument 'where is the longest word', to console, close;