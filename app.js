

/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);
/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/


foods.push('pizza', 'cheeseburger')

console.log('Exercise 2 result:', foods);
/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/
foods.unshift('taco')



console.log(foods)
/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/
 const soyIdx= foods.indexOf(tofu);

console.log(soyIdx)


   // splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item0)
// splice(start, deleteCount, item0, item1)
// splice(start, deleteCount, item0, item1, /* …, */ itemN)
/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/
const removed = foods.splice(2,0,"tofu")

console.log(foods)

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/
 foods.splice(1,1, "sushi","cupcake")



console.log(foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

const yummy = foods.slice(1,2);
console.log(yummy)

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/
const soyIdx= foods.indexOf(tofu)

console.log('Exercise 8 result:', soyIdx);
// Complete Exercise 8 below...
const soyIdx= foods.indexOf(tofu);

console.log('Exercise 8 Result:
', soyIdx);

/*
Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
*/

// Complete Exercise 9 below...
const allFoods= taco  + - sushi  + - cupcake  + - tofu  + - cheeseburger;



console.log('Exercise 9 Result:
', allFoods);

/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/

// Complete Exercise 10 below...

const hasSoup=foods.includes(soup, 0);

console.log('Exercise 10 Result:
', hasSoup);

/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// Complete Exercise 11 below..
let odds= [];
function oddNumbers(value) {
            if ( value % 2 === 1 ) {
                odds.push(value);
            }
        }
         nums.forEach(oddNumbers);

console.log('Exercise 11 Result:
', odds);

/*
Exercise 12:
  - Use the forEach method to iterate through the same nums array and add the number to arrays named fizz, buzz and/or fizzbuzz based upon the following:
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
*/

// Complete Exercise 12 below...
let fizz= []
let buzz=[]
let fizzbuzz=[]

function fizzy (value){
  if (value % 3 === 0){
    fizz.push(value)
  }
  else{
    if (value % 5 === 0){
      buzz.push(value);
    } else{
      if (value % 3=== 0 && value % 5 === 0){
        fizzbuzz.push(value)
      }
    }
  }
}
nums.forEach(fizzy)

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

// Complete Exercise 13 below...
let numList=[]
numList= numArrays[numArrays.length-1];
// to return the last nested array. 

console.log('Exercise 13 Result:
', numList);

/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign to a variable named num.
*/

// Complete Exercise 14 below...
let num= numArrays[2][1];
console.log('Exercise 14 Result:
', num);

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/

// Complete Exercise 15 below..
// I tried all day and couldn't figure out how to create a recursive funtion that works. 

let total =0;

// first got all the items in the nested array into a 
 let flattenedArray= numArrays.flat();
 flattenedArray.forEach(myFunction);

function myFunction(item) {
  total += item;
}


console.log('Exercise 15 Result:
', total); 
 229 changes: 229 additions & 0 deletions229  
+
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,229 @@
/*
Exercise 1:
  - Define an empty array named foods
*/

// Exercise 1 has been completed for you...

const foods = [];

console.log('Exercise 1 Result:
', foods);

/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
*/

// Complete Exercise 2 below...

foods.push(pizza);
foods.push(cheeseburger);


console.log('Exercise 2 Result:
',  foods);

/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
*/

// Complete Exercise 3 below...

foods.unshift(taco);

console.log('Exercise 3 Result:
', foods);

/*
Exercise 4:
  - Access the string 'pizza' (based upon its known position) in the foods array and assign to a variable named favFood.
*/

// Complete Exercise 4 below...
var favFood= foods.indexOf(pizza);

console.log('Exercise 4 Result:
', favFood);

/*
Exercise 5:
  - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
*/

// Complete Exercise 5 below...
foods.splice(2,0, tofu)

console.log('Exercise 5 Result:
', foods);

/*
Exercise 6:
  - Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
*/

// Complete Exercise 6 below...

foods.splice(1, 1, sushi, cupcake)

console.log('Exercise 6 Result:
', foods);

/*
Exercise 7:
  - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
  - Assign the new array to a variable named yummy.
*/

// Complete Exercise 7 below...
const yummy= foods.slice(1,3);


console.log('Exercise 7 Result:
', yummy);

/*
Exercise 8:
  - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
*/

// Complete Exercise 8 below...
const soyIdx= foods.indexOf(tofu);

console.log('Exercise 8 Result:
', soyIdx);

/*
Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
*/

// Complete Exercise 9 below...
const allFoods= taco  + - sushi  + - cupcake  + - tofu  + - cheeseburger;



console.log('Exercise 9 Result:
', allFoods);

/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/

// Complete Exercise 10 below...

const hasSoup=foods.includes(soup, 0);

console.log('Exercise 10 Result:
', hasSoup);

/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// Complete Exercise 11 below..
let odds= [];
function oddNumbers(value) {
            if ( value % 2 === 1 ) {
                odds.push(value);
            }
        }
         nums.forEach(oddNumbers);

console.log('Exercise 11 Result:
', odds);

/*
Exercise 12:
  - Use the forEach method to iterate through the same nums array and add the number to arrays named fizz, buzz and/or fizzbuzz based upon the following:
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
*/

// Complete Exercise 12 below...
let fizz= []
let buzz=[]
let fizzbuzz=[]

function fizzy (value){
  if (value % 3 === 0){
    fizz.push(value)
  }
  else{
    if (value % 5 === 0){
      buzz.push(value);
    } else{
      if (value % 3=== 0 && value % 5 === 0){
        fizzbuzz.push(value)
      }
    }
  }
}
nums.forEach(fizzy)

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

// Complete Exercise 13 below...
let numList=[]
numList= numArrays[numArrays.length-1];
// to return the last nested array. 

console.log('Exercise 13 Result:
', numList);

/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign to a variable named num.
*/

// Complete Exercise 14 below...
let num= numArrays[2][1];
console.log('Exercise 14 Result:
', num);

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/

// Complete Exercise 15 below..
// I tried all day and couldn't figure out how to create a recursive funtion that works. 

let total =0;

// first got all the items in the nested array into a 
 let flatte// Complete Exercise 8 below...
 const soyIdx= foods.indexOf(tofu);
 
 console.log('Exercise 8 Result:
 ', soyIdx);
 
 /*
 Exercise 9:
   - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
     'taco -> sushi -> cupcake -> tofu -> cheeseburger'
 */
 
 // Complete Exercise 9 below...
 const allFoods= taco  + - sushi  + - cupcake  + - tofu  + - cheeseburger;
 
 
 
 console.log('Exercise 9 Result:
 ', allFoods);
 
 /*
 Exercise 10:
   - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
 */
 
 // Complete Exercise 10 below...
 
 const hasSoup=foods.includes(soup, 0);
 
 console.log('Exercise 10 Result:
 ', hasSoup);
 
 /*
 Exercise 11:
   - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
   - Hint: Initialize the odds variable to an empty array before the iteration.
 */
 
 const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
 
 // Complete Exercise 11 below..
 let odds= [];
 function oddNumbers(value) {
             if ( value % 2 === 1 ) {
                 odds.push(value);
             }
         }
          nums.forEach(oddNumbers);
 
 console.log('Exercise 11 Result:
 ', odds);
 
 /*
 Exercise 12:
   - Use the forEach method to iterate through the same nums array and add the number to arrays named fizz, buzz and/or fizzbuzz based upon the following:
      - Add to the fizz array if the number is evenly divisible by 3.
      - Add to the buzz array if the number is evenly divisible by 5.
      - Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
 */
 
 // Complete Exercise 12 below...
 let fizz= []
 let buzz=[]
 let fizzbuzz=[]
 
 function fizzy (value){
   if (value % 3 === 0){
     fizz.push(value)
   }
   else{
     if (value % 5 === 0){
       buzz.push(value);
     } else{
       if (value % 3=== 0 && value % 5 === 0){
         fizzbuzz.push(value)
       }
     }
   }
 }
 nums.forEach(fizzy)
 
 console.log('Exercise 12 Results:');
 console.log('  fizz:', fizz);
 console.log('  buzz:', buzz);
 console.log('  fizzbuzz:', fizzbuzz);
 
 /*
 Exercise 13:
   - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
   - Assume you don't know how many nested arrays numArrays contains.
 */
 
 const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
 ];
 
 // Complete Exercise 13 below...
 let numList=[]
 numList= numArrays[numArrays.length-1];
 // to return the last nested array. 
 
 console.log('Exercise 13 Result:
 ', numList);
 
 /*
 Exercise 14:
   - Given the above numArrays array, access the number 66 and assign to a variable named num.
 */
 
 // Complete Exercise 14 below...
 let num= numArrays[2][1];
 console.log('Exercise 14 Result:
 ', num);
 
 /*
 Exercise 15:
   - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
   - Hint: Be sure to declare and initialize the total variable before the iterations.
 */
 
 // Complete Exercise 15 below..
 // I tried all day and couldn't figure out how to create a recursive funtion that works. 
 
 let total =0;
 
 // first got all the items in the nested array into a 
  let flattenedArray= numArrays.flat();
  flattenedArray.forEach(myFunction);
 
 function myFunction(item) {
   total += item;
 }
 
 
 console.log('Exercise 15 Result:
 ', total); 
  229 changes: 229 additions & 0 deletions229  
 +
 Original file line number	Diff line number	Diff line change
 @@ -0,0 +1,229 @@
 /*
 Exercise 1:
   - Define an empty array named foods
 */
 
 // Exercise 1 has been completed for you...
 
 const foods = [];
 
 console.log('Exercise 1 Result:
 ', foods);
 
 /*
 Exercise 2:
   - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
 */
 
 // Complete Exercise 2 below...
 
 foods.push(pizza);
 foods.push(cheeseburger);
 
 
 console.log('Exercise 2 Result:
 ',  foods);
 
 /*
 Exercise 3:
   - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
 */
 
 // Complete Exercise 3 below...
 
 foods.unshift(taco);
 
 console.log('Exercise 3 Result:
 ', foods);
 
 /*
 Exercise 4:
   - Access the string 'pizza' (based upon its known position) in the foods array and assign to a variable named favFood.
 */
 
 // Complete Exercise 4 below...
 var favFood= foods.indexOf(pizza);
 
 console.log('Exercise 4 Result:
 ', favFood);
 
 /*
 Exercise 5:
   - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
 */
 
 // Complete Exercise 5 below...
 foods.splice(2,0, tofu)
 
 console.log('Exercise 5 Result:
 ', foods);
 
 /*
 Exercise 6:
   - Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
 */
 
 // Complete Exercise 6 below...
 
 foods.splice(1, 1, sushi, cupcake)
 
 console.log('Exercise 6 Result:
 ', foods);
 
 /*
 Exercise 7:
   - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
   - Assign the new array to a variable named yummy.
 */
 
 // Complete Exercise 7 below...
 const yummy= foods.slice(1,3);
 
 
 console.log('Exercise 7 Result:
 ', yummy);
 
 /*
 Exercise 8:
   - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
 */
 
 // Complete Exercise 8 below...
 const soyIdx= foods.indexOf(tofu);
 
 console.log('Exercise 8 Result:
 ', soyIdx);
 
 /*
 Exercise 9:
   - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
     'taco -> sushi -> cupcake -> tofu -> cheeseburger'
 */
 
 // Complete Exercise 9 below...
 const allFoods= taco  + - sushi  + - cupcake  + - tofu  + - cheeseburger;
 
 
 
 console.log('Exercise 9 Result:
 ', allFoods);
 
 /*
 Exercise 10:
   - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
 */
 
 // Complete Exercise 10 below...
 
 const hasSoup=foods.includes(soup, 0);
 
 console.log('Exercise 10 Result:
 ', hasSoup);
 
 /*
 Exercise 11:
   - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
   - Hint: Initialize the odds variable to an empty array before the iteration.
 */
 
 const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
 
 // Complete Exercise 11 below..
 let odds= [];
 function oddNumbers(value) {
             if ( value % 2 === 1 ) {
                 odds.push(value);
             }
         }
          nums.forEach(oddNumbers);
 
 console.log('Exercise 11 Result:
 ', odds);
 
 /*
 Exercise 12:
   - Use the forEach method to iterate through the same nums array and add the number to arrays named fizz, buzz and/or fizzbuzz based upon the following:
      - Add to the fizz array if the number is evenly divisible by 3.
      - Add to the buzz array if the number is evenly divisible by 5.
      - Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
 */
 
 // Complete Exercise 12 below...
 let fizz= []
 let buzz=[]
 let fizzbuzz=[]
 
 function fizzy (value){
   if (value % 3 === 0){
     fizz.push(value)
   }
   else{
     if (value % 5 === 0){
       buzz.push(value);
     } else{
       if (value % 3=== 0 && value % 5 === 0){
         fizzbuzz.push(value)
       }
     }
   }
 }
 nums.forEach(fizzy)
 
 console.log('Exercise 12 Results:');
 console.log('  fizz:', fizz);
 console.log('  buzz:', buzz);
 console.log('  fizzbuzz:', fizzbuzz);
 
 /*
 Exercise 13:
   - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
   - Assume you don't know how many nested arrays numArrays contains.
 */
 
 const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
 ];
 
 // Complete Exercise 13 below...
 let numList=[]
 numList= numArrays[numArrays.length-1];
 // to return the last nested array. 
 
 console.log('Exercise 13 Result:
 ', numList);
 
 /*
 Exercise 14:
   - Given the above numArrays array, access the number 66 and assign to a variable named num.
 */
 
 // Complete Exercise 14 below...
 let num= numArrays[2][1];
 console.log('Exercise 14 Result:
 ', num);
 
 /*
 Exercise 15:
   - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
   - Hint: Be sure to declare and initialize the total variable before the iterations.
 */
 
 // Complete Exercise 15 below..
 // I tried all day and couldn't figure out how to create a recursive funtion that works. 
 
 let total =0;
 
 // first got all the items in the nested array into a 
  let flattenedArray= numArrays.flat();
  flattenedArray.forEach(myFunction);
 
 function myFunction(item) {
   total += item;
 }
 
 
 console.log('Exercise 15 Result:
 ', total); nedArray= numArrays.flat();
 flattenedArray.forEach(myFunction);

function myFunction(item) {
  total += item;
}


console.log('Exercise 15 Result:
', total); 