// -------------------------------------------------------------------
// DAY:1 - 20 Jan 2024
// -------------------------------------------------------------------

/**
 * Declaring variables in JS
 * var, let, const used to declare variables in JS
 * const is used for storing constant values
 */

"use strict";

/**
 * var test;
console.log(test);

var myName = 'Ajay';
console.log(myName);

var myRoll = 5;
var myTotalScore = 221.1
console.log(myTotalScore);

var didIPass = true;
console.log(didIPass);

myTotalScore = null;
console.log(myTotalScore);
 */
// -------------------------------------------------------------------
/**
 * typeof operator gives the datatype of the variable
 */
// typeof operator
// var marks = null;
// console.log(typeof marks);
// -------------------------------------------------------------------

/**
 * condition check with if, if-else, if-elseif- else
 */

// var num1 = 5;
// var num2 = 6;
// if (num1 > num2) {
//     console.log("num1 is greater than num2");
// } else {
//     console.log("num2 is greater than num1");
// }
// -------------------------------------------------------------------
/**
 * Declaring array in JS using []
 * Starts with index 0
 * To access a specific index we need to pass the index number with in [] => arr[2]
 */
// var arr = ['a', 'b', 'c', 'd'];
// console.log(arr);
// console.log(arr[3]);
// console.log(arr[5]);

// -------------------------------------------------------------------
/**
 * Array Methods
 * push - add item at the end
 * pop - remove item from the end; pop returns the value which got removed.
 */
// arr.push('e');
// console.log(arr);

/**
 * In the below example the variable poppedOutItem will store the item that was popped out.
 */
// var poppedOutItem = arr.pop();
// console.log(arr);
// console.log(poppedOutItem)



// -------------------------------------------------------------------
// DAY:2 - 21 Jan 2024
// -------------------------------------------------------------------
/**
 * shift - Removes items from the beginning of the array
 */
// const shiftDemoList = [1, 2, 3, 4, 5];
// shiftDemoList.shift();
// console.log(shiftDemoList);
/**
 * unshift - Adds items ar the beginning of the array
 */
// const shiftDemoList1 = [1, 2, 3, 4, 5];
// shiftDemoList1.unshift(0);
// console.log(shiftDemoList1);
/**
 * length - Returns the number of items present in the array
 */
// const lengthDemoList = [1, 2, 3, 4, 6];
// console.log(lengthDemoList.length);
/**
 * concat - Combines two arrays
 */
// console.log('-----------------------');
// const concatDemoArr1 = [1, 2, 3, 4];
// const concatDemoArr2 = [5, 6, 7, 8, 9];
// console.log(concatDemoArr1.concat(concatDemoArr2));
// console.log(concatDemoArr1);
// console.log(concatDemoArr2);
// console.log('-----------------------');
/**
 * join - Converts to string and also adds the character if provided
 * Original array is not modified
 */

// const joinDemoList = [1, 2, 3, 4];
// console.log(joinDemoList);
// const newArr = joinDemoList.join('00')
// console.log(newArr);
// console.log(joinDemoList);

/**
 *  slice :
 *        -) method returns selected elements in an array, as a new array
 *        -) method selects from a given start, up to a (not inclusive) given end.
 *        -) method does not change the original array.
 *
 *          START	Optional.
            Start position. Default is 0.
            Negative numbers select from the end of the array.

            END	Optional.
            End position. Default is last element.
            Negative numbers select from the end of the array.

            RETURN Value:::
            A new array containing the selected elements.
 */
// const sliceDemoList = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const newArr = sliceDemoList.slice(1);
// console.log('new ');
// console.log(newArr);
// console.log('*-----');
// console.log('old ');
// console.log(sliceDemoList)

// console.log('-----------------------');

/**
 * splice
 *  The splice() method adds and/or removes array elements.

    The splice() method overwrites the original array.

    SYNTAX
    array.splice(index, howmany, item1, ....., itemX)

    index	(Required) - the index (position) to add or remove items.
            A negative value counts from the end of the array.

    howmany	(Optional) - Number of items to be removed.
    item1, ..., itemX	Optional - New elements(s) to be added.
 */
// const spliceDemoList = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const newSplicedArray = spliceDemoList.splice(1, 1, 'watermelon', 'Peach');
// console.log('newSplicedArray ', newSplicedArray);
// console.log('old array ', spliceDemoList);

// -------------------------------------------------------------------

/**
 * String Methods
 */

/**
 *  * length: returns the length of the string
 */
// const ourCountry = "India";
// console.log('Length is: ' + ourCountry.length);
/**
 * toupperCase
 * toLowerCase
 */
// const myName = "Sanjay";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());


/**
 * concat:- joins/ combines two strings
 */
// const firstName = "Ayush";
// const lastName = "Sharma";
// const fullName = firstName.concat(' ').concat(lastName);
// console.log(fullName);

/**
 * slice
 *
 *  The slice() method extracts a part of a string.
    The slice() method returns the extracted part in a new string.
    The slice() method does not change the original string.
    The start and end parameters specifies the part of the string to extract.
    The first position is 0, the second is 1, ...
    A negative number selects from the end of the string.
 *
 * Syntax:-
    string.slice(start, end)

   Parameters
    start	(Required).
    The start position.
    (First character is 0).

    end	(Optional).
    The end position (up to, but not including).
    Default is string length.
 */

// const originalStr1 = "I am the Devil of the batch";
// console.log(originalStr1.slice(4, 0));
// console.log(originalStr1);

/**
 * substring
 *
 *  The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
    The substring() method extracts characters from start to end (exclusive).
    The substring() method does not change the original string.
    If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
    Start or end values less than 0, are treated as 0.

    Syntax
    string.substring(start, end)

    Return Value
    A string	A string containing the extracted characters.
 */
// console.log('------------')
// const originalStr = "I_am_the_Devil of the batch";
// console.log(originalStr.substring(0, 3));
// console.log(originalStr.substring(3, 0));
// console.log(originalStr);

/**
 * split
 * The split() method splits a string into an array of substrings.
   The split() method returns the new array.
   The split() method does not change the original string.
   If (" ") is used as separator, the string is split between words.
 */

// const splitDemoStr = 'India is our country';
// console.log(splitDemoStr.split(' '));

// const testStr = '  I am Indian  ';
// console.log(testStr.trim());

// -------------------------------------------------------------------

/**
 * == vs ===
 */
// let marks = "100";
// if (marks === 100) {
//    console.log("Full Marks");
// } else {
//    console.log("Did not get full marks");
// }

// -------------------------------------------------------------------

/**
 * Loops: while, do-while, for
 */

// -------------------------------------------------------------------

/**
 * Objects in JS
 */
// const obj = {
//    studName: "Ram",
//    roll: 22,
//    isPassed: true,
//    address: {
//       flatNo: 2,
//       street: "Neeladri Road",
//       dummy: {
//          test: "test"
//       }
//    }
// };

// console.log(obj);
// console.log(obj.address.dummy.test);



// -------------------------------------------------------------------

/**
 * use strict
 * The "use strict" directive was new in ECMAScript version 5.
   It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
   The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
   With strict mode, you can not, for example, use undeclared variables.
 */
// x = 3.14;
// console.log(x)
// -------------------------------------------------------------------