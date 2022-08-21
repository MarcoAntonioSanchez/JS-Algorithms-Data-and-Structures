// COMMENT YOUR JAVASCRIPT CODE

// There are 2 ways to write comments in JavaScript
// This is an inline comment

/*
This a multi-line comment.
For example.
*/

/*
As you write code, you should regularly add comment to clarify
the function of parts of your code.
*/

// DECLARE JAVASCRIPT VARIABLES

/*
JavaScript provides eight different data types, wich are:
undefinde, null, boolean, string, symbol, biginit, number and ob ject

Computers can perform mathematical operations on a number,
but not on a string.

For example:
"22" and 22 are not the same, the 1st one is a string type
and the 2nd 22 is a number type.

Variables allow computers to store and manipulate data
in a dynamicfashion.
Any of the eight data types may be stored in a variable.

Variables are similar to the x and y variables you use in
mathematics, wich means they're simple name to represent
the data we eant to refer to.
COmputer variables differ from mathematical variables in that
they can store different values at different times.
*/

// We tell JavaScript to create or declare a variable:

var ourName;

// creates a variable called ourName.

/*
In JavaScript we end statements with semicolons.
Variable names can be made up of numbers, letters, and $ or _,
but may not contain spaces or start with a number.
*/

// STORGING VALUES WITH THE ASSIGNMENT OPERATOR

myVariable = 3;

// In JavaScript you can store a value in a variable with the assignment operator (=).

var myVar;
myVar = 7;

/*
First, this code creates a variable named myVar.
Then, the codes assigns 7 to myVa. Now, if myVar appears
again in the code, the program will treat it as if it is 7.
*/

// ASSIGN THE VALUE OF ONE VARIABLE TO ANOTHER

var myVar2;
myVar2 = 3;
var myNum;
myNum = myVar2;

/*
The above declares a myVar2 variable with no value,
then assigns it the value 3. Next, a variable named myNum is declared
with no value. Then, the contents of myVar2 (wich is 3) is assigned
to the variable myNum. Now, myNUm also has the value of 5.
*/

// INITIALIZING VARIABLES WITH THE ASSIGNMENT OPERATOR

var myVar3 = 0;

/*
It is common to initilize a variable to and initial value
in the same line as it is declared.
The above creates a variable called myVar3 and assigns it
an initial value of 0.
*/

// DECLARE STRING VARIABLES

var myName = "Marco A. Sánchez";

/*
Your name is called a string literal. A string literal, or string,
is a series of zero or more characters enclosed in a single or
double quotes.
*/

// UNDERSTANDING UNITIALIZED VARIABLES

/*
When JavaScript variables are declared, they have an intial value of undefined.
If you do a mathematical operation on a undefined variable
your result will be NaN wich means "Not a Number".
If you concatenate a string with an undefined variable,
you will get a strinf of undefined.
*/

// UNDERSTANDING CASE SENSITIVITY IN VARIABLES

var someVariable;
var anotherVariableName;
var thisVariableNameIsLong;

/*
In JavaScript all variables and function names are case sensitive.
This means that capitalization matters.

MYVAR is not the same as MyVar or myvar. It is possible to have muyltiple
distinct variables with the same name but different casing.
It is strongly recommended that for the sake of clarity,
you do not use this lenguage feature.

Best practice:
Write variable names in JavaScript in cameCase. In cameCase,
multi-word variable names have the first word in lowercase
and the first letter of each subsequent word is capitalized.
*/

// EXPLORE DIFFERENCES BETWEEN THE VAR AND LET KEYWORDS

var camper = "James";
var camper = "David";
console.log(camper);

/*
One of the biggest problems with declaring variables
with the var keyword is that you can easily overwrite
variable declarations.

In the code above, the camper variable is originally
declared as James, and is then overridden to be David.
The console then displays the string David.

In a small application, you might not run into this type
of problem. But as your codebase becomes largers, you might
accidentally overwrite a variable that you did not intend to.
Because this behavios does not throw an error, searching
for and fixing bigs becomes more difficult.
*/

// let camper = "James";
// let camper = "David";

/*
A keyword called let was introduced in ES6, a major update to
JavaScript, to solve this potential issue with the var keyword.

If you replace var with let in the code above, it results in an error.
The error can be seen in your browser console.
So unlike var, when you use let, a variable with the same name can only be declared once.
*/

// DECLARE A READ-ONLY VARIABLE WITH THE CONST KEYWORD

const FAV_PET = "Cats";
// FAV_PET = "Dogs";

/*
The keyword let is not the only new way to declare variables.
In ES6, you can also declare variables using the const keyword.

const Has all the awsome features that let has, with the added
bonus that variables declared using const are read-only.
They are a constant value, wich means that once a variable is
assigned with const, it cannot be reassigned.

The consaole will display an error due to reassigning the value of FAV_PET.

You should always name variables you don't want to reassign
using the const keyword. This helps when you accidentally
attempt to reassign a variable that is meant to stay constant.
*/

// ADD TWO NUMBERS WITH JAVASCRIPT

const myVar4 = 5 + 10;

/*
Number is a data type in JavaScript wich represents numeric data.
JavaScript uses the + symbol as an addition operator when placed between two numbers.
nOW, myVar4 has the value of 15.
*/

// SUBSTRACT ONE NUMBER FROM ANOTHER WITH JAVASCRIPT

const myVar5 = 12 - 6;

/*
We can slo substract one number from another.
JavaScript uses the - symbol for substraction.
Now, myVar5 has the value of 6.
*/

// MULTIPLY TWO NUMBERS WITH JAVASCRIPT

const myVar6 = 13 * 13;

/*
We can also multiply one nomber by another.
JavaScript uses the * symbol for multiplication of two numbers.
Now, myVar6 has the value of 169.
*/

// DIVIDE ONE NUMBER BY ANOTHER WITH JAVASCRIPT

const myVar7 = 16 / 2;

/*
We can also divide one number by another.
JavaScript uses the / symbol for division.
Now, myVar7 has the value of 8.
 */

// INCREMENT A NUMBER WITH JAVASCRIPT

/*
i++;
i = i + 1;

You can easily increment or add one to a variable with the ++ oeprator.
The entire line becomes i++, eliminating the need fot the equal sign.
*/

// DECREMENT A NUMBER WITH JAVASCRIPT

/*
i--;
i = i - 1;

You can easily decrement or decrease a variable by one with the -- operator.
The entire line becomes i--;, eliminating the need for the equal sign.
*/

// CREATE DECIMAL NUMBERS WITH JAVASCRIPT

/*
We can store decimal numbers in variables too.
Decimal numbers are sometimes referred to as floating point numbers or floeats.
When you compute numbers, they are computed with infinite precision.
Operations using floating points may lead to different results than the desired outcome.
*/

// MULTIPLY TWO DECIMALS WITH JAVASCRIPT

const product = 2.0 * 2.5;

/*
In JavaScript, youy can also perform calculations with decimal numbers,
just like whole numbers.
*/

// DIVIDE ONE DECIMAL BY ANOTHER WITH JAVASCRIPT

const product2 = 4.4 / 2.0;

// FINDING A REMAINDER IN JAVASCRIPT

/*
The remainder operator % gives the remainder of the division of two numbers.
Example:
5 % 2 = 1 because
Math.floor(5 / 2 = 2) quotient
2 * 2 = 4
5 - 4 = 1 remainder

Usage:
In mathematics, a nunber can be checked to be even or odd
by checking the remainder of the division of the number by 2.

17 % 2 = 1 (17 is odd)
48 % 2 = 0 (48 is even)

The remainder operator is sometimes incorrectly to as the modulus operator.
It is very similar to modulus, but does not work properly with negative numbers.
*/

// COMPOUND ASSIGNMENT WITH AUGMENTED ADDITION

/*
In programming, it is common to use assignments to modify the contents
of a variable. Remember that everything to the right of the equals
sign is evaluated first, so we can say:
*/

// let myVar8 = myVar8 + 5;

/*
To add 5 to myVar8. SInce this is such a common pattern,
there are operator wich do both a mathematical operation and assignment in one step.
*/

let myVar9 = 1;
myVar9 += 5;
console.log(myVar9);

// COMPOUND ASSIGNMENT WITH AUGMENTED SUBSTRACTION

/*
Like the += operator, -= substracts a number from a variable.
Example:

myVar = myVar - 5;

Will substract 5 from myVar. This can be rewritten as:

myVar -= 5;
*/

// COMPOUND ASSIGNMENT WITH AUGMENTED MULTIPLICATION

/*
The *= operator multiplies a variable by a number.
Example:

myVar = myVar * 5;

Will multiply myVar by 5. This can be rewritten as:

myVar *= 5;
*/

// COMPOUND ASSIGNMENT WITH AUGMENTED DIVISION

/*
The /= operator divides a variable by another number.
Example:

myVar = myVar / 5;

Will divide myVar by 5. This can be rewritten as:

myVar /= 5;
*/

// ESCAPING LITERAL QUOTES IN STRINGS

/*
When you are defining a string you must start and end with
a single or double quite. What happens when you need a literal quote
" or ' inside your string?.
In JavaScript, you can scape a quote from considering it as an end
of string quote byplacing a backslash \ in front of the quote.
*/

const sampleStr = 'Alan said, "Petter is learning JavaScript".';
console.log(sampleStr);

/*
This signals to JavaScript that the following quote is not
the end of the string, but should instead appear inside the string.
*/

// QUOTING STRINGS WITH SINGLE QUOTES

/*
String values in JavaScript may be written with single
or double quotes, as long as you start and end with the same
type of quote. Unlike some other programming lenguages,
single and double quotes work the same in JavaScript.
*/

const doubleQuoteStr = "This is a string";
const singleQuoteStr = "THis is also a string";

/*
The reason why you might want to use one type of quote over
the another is if you want to use both in a string.
*/

const conversation = 'Finn exclaims to Jake, "Algebaic!"';

/*
However, this becomes a problem if you need to use the outermost
quotes within it. Remember, a string has the same kind of quote
at the beginning and end. Bit if you have that same quote
somewhere in the middle, the string will stop early and throw an error.
For example:

const goodStr = 'Jame asks FInn, "Hey, let\'s go on an adventure?"';
const badStr = 'Fin responds, "Let's go!"';"
*/

// SCAPE SEQUENCES IN STRINGS

/*
Quotes are not the only characters that can be scaped inside
a string. There are two reasons to use scaping carachters:

1. To allow you to use characters you may not otherwise be able
to type out, such as a carriage return.

2. To allow you to represent multiple quotes in a string without
JavaScript misinterpretating what you mean.

What we leanrned so far:

\' singlo quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b word boundary
\f form feed
*/

// CONCATENATING STRINGS WITH PLUS OPERATOR

/*
In JavaScript, when the + operator us used with a string value,
it is called the concatenation operator. You can build a new string
out of other strings by concatenating them together.
For example:

'My name is Alan,' + ' I concatenate.'
*/

const ourStr = "I come first. " + "I come second.";
console.log(ourStr);

// CONCATENATING STRINGS WITH THE PLUS EQUALS OPERATOR

/*
Wen can also use the += operator to concatenate a string onto
the end of an existing string variable. This can be very helpful
to break a long string over several lines.
*/

let ourStr2 = "I come first. ";
ourStr2 += "I come second.";
console.log(ourStr2);

// CONSTRUCTING STRINGS WITH VARIABLES

/*
Sometimes you will need to build a string. By using the concatenation operator
(+), you can insert one or more variables into a string you're building.
*/

const ourName2 = "freeCodeCamp";
const ourStr3 = "Hello, our name is " + ourName2 + ", how are you?";
console.log(ourStr3);

// APPENING VARIABLES TO STRINGS

/*
Just as we can build a string over multiple lines our of string literals,
we can also append variables to a string using the plus equals (+=) operator.
*/

const anAdjective = "awesome!";
let ourStr4 = "freeCodeCamp is ";
ourStr4 += anAdjective;
console.log(ourStr4);

// FIND THE LENGHT OF A STRING

/*
You can find the lenght of a string value by writing
.lenght after the string variable or string literal.
*/

console.log("Alan Peter".length);

/*
The value 10 would be displayed in the console.
Note that the space carachter between "Alan and "Peter"
is also counted.
*/

// USE BRACKET NOTATION TO FIND THE FIRST CHARACTER IN A STRING

/*
Bracket notation is a way to get a carachter at a specific index within a string.
Most modern programming lenguages, like JavaScript, don't start counting at 1
like humans do. They start at 0. This is referred to as Zero-based indexing.
*/

const firstName = "Marco";
const firstLetter = firstName[0];
console.log(firstLetter);

// UNDERSTAND STRING IMMUTABILITY

/*
In JavaScript, string values are immutable, wich means that they cannot
be altered once created.
For example:

let myStr5 = "Bob";
myStr[0] = "J";

Cannot change the value of myStr5 to Job, beacuse the contents
of myStr5 cannot be altered.
Note that this does not mean that myStr5 cannot be changed, just the individual characters
of a string literal cannot be changed. The only way to change
myStr5 would be to assign it with a new string.
For example:

let myStr5 = "Bob";
myStr = "Job";
*/

// USE BRACKET NOTATION TO FIND THE NTH CHARACTER IN A STRING

/*
You can also use bracket notation to get the character
is actually the zeroth character.
*/

const firstName2 = "Marco";
const secondLetterOfFirstName = firstName2[1];
console.log(secondLetterOfFirstName);

// USE BRACKET NOTATION TO FIND THE LAST CHARACTER IN A STRING

/*
In order to get the last letter of a string, you can subtract one from the string's lenght.
For example, if const firstName = "Ada", you can get the value of the
last letter of the string by using: firstName[irstName.lenght - 1].
*/

const firstName3 = "Marco";
const lastLetter = firstName3[firstName3.length - 1];
console.log(lastLetter);

// USE BRACKET NOTATION TO FIND THE NTH-TO-LAST CHARACTER IN A STRING

/*
You can use the same principle we just used to retireve the
last character in a string to retrieve the nth-to-last character.
*/

const firstName4 = "Marco";
const thirdToLastLetter = firstName4[firstName4.length - 3];
console.log(thirdToLastLetter);

// WORD BLANKS

/*
You are provided sentences with some missing words, line nouns, verbs,
adjectives and adverbs. You then fill in the missing places
with words of your choice in a way that the compelted sentence makes sense.

Consider this sentence - It was really ____, and we ____ ourselves ____. This sentence
has three missing pieces - an adjective, a verb and an adverb, and we can
add words of our choice to complete it. We can then assign the compelted
sentence to a variable as follows:
*/

const sentence2 =
  "It was really " +
  "hot" +
  ", and we " +
  "laughed" +
  " ourselves " +
  "silly" +
  ".";
console.log(sentence2);

// STORE MULTIPLE VALUES IN ONE VARIABLE USING JAVASCRIPT ARRAYS

/*
With JavaScript array variables, we can store several pieces of data in one place.
You start an array declaration with an opening square bracket, end it with a closing square bracket,
and put a comma between each entry.
For example:
*/

const sandwich = ["peanut butter", "jelly", "bread"];
console.log(sandwich);

// NEST ONE ARRAY WITHIN ANOTHER ARRAY

/*
You can also nest arrays within anothe arrays.
For example:
*/

const teams = [
  ["Bulls", 23],
  ["White Sox", 45],
];
console.log(teams);

// ACCESS ARRAY DATA WITH INDEXES

/*
We can access the data inside arrays using indexes.
Array indexes are written in the same bracket notation that
strings use, except that instead of specifying a character,
the are specifying an entry in the array. LIke strings,
arrays use zeo-based indexing, so the first element in an arra
has an index of 0.
For example:
*/

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
console.log(data);

// MODIFY ARRAY DATA WITH INDEXES

/*
Unlike strings, the entries of arrays are mutable and can be
changed freely, even if the array was declared with const.
For example:
*/

const ourArray = [50, 40, 30];
ourArray[0] = 15;
console.log(ourArray);

// ACCESS MULTI-DIMENSIONAL ARRAYS WITH INDEXES

/*
One way to think of a multi-dimensional array, is as an array of arrays.
When you use brackets to access you array, the first set of brackets
refers to the entries in the outer-most (the first level) array,
and each additional pair of brackets refers to the next level of entries inside.
For example:

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];

In this example, subarray has the value [[10, 11, 12], 13, 14]
nestedSubarray has the value [10, 11, 12]
and element has the value 11.

There shouldn't be any spaces between the array name and the 
square brackets, like array [0][0].
*/

// MANIPULATE ARRAYS WITH PUSH()

/*
An easy way to append data to the end of an array is via the
push() function.
.push() takes one or more parameters and "pushes" them onto the end of the array.
For example:
*/

const arr1 = [1, 2, 3];
console.log(arr1);
arr1.push(4);
console.log(arr1);

const arr2 = ["Stimpson", "J", "cat"];
console.log(arr2);
arr2.push(["Happy", "joy"]);
console.log(arr2);

// MANIPULATE ARRAYS WITH POP()

/*
Another way to change the data in an arrai is with the .pop() function.
.pop() Is used to pop a value off of the end of an array. We can store this popped off value
by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.
Any type of entry can be popped off of an array - numbers, strings, even nested arrays.
For example:
*/

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
