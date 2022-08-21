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
