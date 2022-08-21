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

let camper = "James";
let camper = "David";

/*
A keyword called let was introduced in ES6, a major update to
JavaScript, to solve this potential issue with the var keyword.

If you replace var with let in the code above, it results in an error.
The error can be seen in your browser console.
So unlike var, when you use let, a variable with the same name can only be declared once.
*/

// DECLARE A READ-ONLY VARIABLE WITH THE CONST KEYWORD

const FAV_PET = "Cats";
FAV_PET = "Dogs";

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
