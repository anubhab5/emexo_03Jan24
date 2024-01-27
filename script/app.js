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
// DAY:3 - 22 Jan 2024
// -------------------------------------------------------------------

// -------------------------------------------------------------------

/**
 * use strict
 * The "use strict" directive was new in ECMAScript version 5.
   It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
   The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
   With strict mode, you can not, for example, use undeclared variables.
 */
// var myName = '';
// x = 3.14;
// console.log(x)
// -------------------------------------------------------------------

/**
 * Loops
 * for loop
 */

// for (let i = 0; i < 5; i++) {
//    console.log(i);
// }

/**
 * while loop
 */

// let i = 0;
// while (i < 5) {
//    console.log(i);
//    i++;
// }


/**
 * do-while
 */
// let i = 3;
// do {
//    console.log(i);
//    i++;
// } while (i < 5);

/**
 *
 */

/**
 * scope in JS
 * var has a function scope
 * let, const has block scope
 */

// let roll1 = 10;
// let roll2 = roll1;

// console.log(roll1);
// console.log(roll2);

// roll2 = 21;

// console.log(roll1);
// console.log(roll2);

// let arr1 = ['a', 'b', 'c', 'd'];
// let arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

// arr2[2] = 'x';

// console.log(arr1);
// console.log(arr2);

// let obj1 = {
//    myName: "Ram"
// };

// let obj2 = obj1;

// console.log(obj1);
// console.log(obj2);

// obj2.myName = "Shyam";

// console.log(obj1);
// console.log(obj2);

/**
 * Function Declaration
 */
// function sayHiFromUser(userName, state) {
//    // console.log('hello my name is', userName, "I am from ", state);
//    return `hello my name is ${userName}. I am from ${state}`;
// }

// const user1 = sayHiFromUser('Sanjay', 'TN');
// console.log(user1);
// console.log(sayHiFromUser('Kiran', 'KA'));
// console.log(sayHiFromUser('Devil', 'KA'));
// console.log(sayHiFromUser('Soumya', 'KA'));
// console.log(sayHiFromUser('Bhuvi', 'TN'));

/**
 * Anonymous Function
 */

// const sayMyName = function (accept) {
//    console.log(`Say hello ${accept}`);
// };

// sayMyName('test');

/**
 * Fat arrow function (ES6 feature)
 */
// const sayMyName1 = (accept) => {
//    console.log(`Say hello ${accept}`);
// };

// sayMyName1('test123');
// {
//    console.log(myNumber)
// }

// function test() {
//    let myNumber = 23;
// }

// function checkEvenOdd() {
//    if (myNumber % 2 === 0) {
//       console.log("Even");
//    } else {
//       console.log("Odd");
//    }
// }

// checkEvenOdd();



// -------------------------------------------------------------------
// DAY:4 - 24 Jan 2024
// -------------------------------------------------------------------

/**
 * Hoisting
 * Hoisting is a concept or behavior in JavaScript where the
 * declaration of a function, variable
 * goes to the top of the scope they were defined in.
 */
// console.log(myName);

// var myName = 'Ram';

// console.log(myName);
// let myAge = 22;
// console.log(myAge);

// simpleFn();

// Function Declaration
// function simpleFn() {
//    console.log('say hii');
// }

// let myAge = 21;
// console.log(myAge);

// var sayMyName = function () {
//    console.log("hello");
// };

// sayMyName();

/**
 * this keyword in JS
 * Global Context:

   When used outside of any function or object, this refers to the global object,
   which is window in a browser environment or global in Node.js.

   When used inside a function that is not a method of an object, this also refers to the
   global object.
   In strict mode ('use strict';), if a function is not a method of an object, this is
   undefined.

   Method Context:
   When used inside a method (a function that is a property of an object),
   this refers to the object that the method is called on.

   Event Handlers:
   When used as an event handler, this refers to the DOM element that triggered the event.
 */

// var my_obj = {
//    myName: "abc",
//    myAge: 21,
//    sayMyName: function () {
//       // console.log(this);
//       console.log(this.myName);
//    },
//    sayMyAge: () => {
//       console.log(this);
//    }
// };
// my_obj.sayMyName();
// my_obj.sayMyName();
// my_obj.sayMyAge();
// console.log(window);
// console.log(this)

// function sayMyNameV2() {
//    console.log(this);
// }

// sayMyNameV2();

// const userProperties = {
//    sayMyName: function (roll, rank) {
//       console.log(`my Name is ${this.myName}
//       and age is ${this.myAge}, Roll is ${roll} ${rank}`);
//    }
// }

// const user1 = {
//    myName: "Tom",
//    myAge: 21
// };

// const user2 = {
//    myName: "Mary",
//    myAge: 30,
// };

/**
 * The call() method calls the function directly and sets this to the
 *  first argument passed to the call method and if any other sequences of
 * arguments preceding the first argument are passed to the call method then
 * they are passed as an argument to the function.
 */
// userProperties.sayMyName.call(user1, 1, 'Gen');
// userProperties.sayMyName.call(user2, 5, 'Maj');

/**
 * The apply() method calls the function directly and sets this to the first
 * argument passed to the apply method and if any other arguments provided as an
 * array are passed to the call method then they are passed as an argument to the function.
 */
// userProperties.sayMyName.apply(user1, [1, 'Gen']);
// userProperties.sayMyName.apply(user2, [5, 'Maj']);
/**
 *
 * The bind() method creates a new function and when that new function is called it
 * set this keyword to the first argument which is passed to the bind method,
 * and if any other sequences of arguments preceding the first argument are
 * passed to the bind method then they are passed as an argument to the new function
 * when the new function is called.
 */
// userProperties.sayMyName.bind(user1, 1, 'Gen')()
// const returnedValue = userProperties.sayMyName.bind(user1, 1, 'Gen');

// returnedValue();

// -------------------------------------------------------------------
// DAY:5 - 27 Jan 2024
// -------------------------------------------------------------------

/**
 * Closure
 *
 */

// function outerFunction() {
//    let counter = 0;
//    console.log(`Initial Counter value is ${counter}`);
//    // return 'India';
//    return function innerFunction(incrementBy) {
//       // counter++;
//       counter = counter + incrementBy;
//       return counter;
//    }

// }
// // debugger;
// const innerFn = outerFunction();
// console.log(innerFn);
// console.log(innerFn(2));
// console.log(innerFn(3));

// DOM

// const containerVal = document.getElementById('container');
// containerVal.innerText = 'This is new stuff.'
// // console.log(containerVal.innerText)
// // containerVal.style.color = 'red';
// containerVal.style.background = 'yellow';
// containerVal.style.padding = '10px';
// containerVal.classList.add('color-red');

// const newEl = document.createElement('span');
// newEl.innerText = 'This is span';
// containerVal.appendChild(newEl);
// containerVal.remove()

// function eventCalled() {
//    console.log('triggered');
// }

// form access
function someFunc() {
   console.log(document.forms['demoForm']['gender'].value);
}