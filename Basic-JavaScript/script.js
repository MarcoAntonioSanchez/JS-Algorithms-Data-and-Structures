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
