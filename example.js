/**
 * Created by dukeclem on 6/3/15.
 */
function palindrome(word) {
//, function name, function argument, opening code block of function body.
    var reverse = word.split('').reverse().join('');
    //new variable - (reverse), assignment operator, object, .method w/empty string argument, chained to, .method w/empty string argument, chained to, method w/empty string, close;
    if(word === reverse){
    //statement, object, strictly equal to operator, variable, open block of 'if' function body
        console.log('It is a palindrome');
    //object, method w/ string argument, close;
    } else {
    //close code block of 'if' function body, statement, open code block of 'else' function body,

        console.log('This is not a palindrome');
        //object, method, w/ string argument, close;
    }
    // close code block of 'else' function body.
}
// close code block of 'palindrome' function body.


palindrome('ttttuuu');
//'palindrome' function, w/ string argument 'ttttuuu', close;

function longestWord(sentence) {
// new function 'longestWord' w/ string argument, opening code block of function body.
    var myArray  = sentence.split(' ');
    //new variable 'myArray', assignment operator, object, method w/empty string argument, close;
    console.log(myArray);
    //object, method, w/ argument var myArray, close;
    var long = '';
    //new variable 'long',assignment operator, empty string, close;
    for (var i = 0; i < myArray.length; i++) {
    //statement, variable i, assignment operator, index #0; var 'i', operator, variable, method close; 'i' increases by 1, opening code block of function body.
        if(myArray[i].length > long.length) {
     //statement, arguments of var, method, operator, var, method, opening code block of 'if' function body
           long = myArray[i];
           //var ,assignment operator, set to var, close;
        }
        //closing code block of 'if' function body
    }
    //closing code block of 'for' function body
    return long;
    //statement, var 'long', close;
}
//closing code block of function body
console.log(longestWord('where is the longest word'));
//object, method, function, string argument, close;