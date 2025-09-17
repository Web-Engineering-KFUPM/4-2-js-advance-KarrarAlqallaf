/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
const Student = {
    firstName : "Karrar",
    lastName : "Ahmed",
    gpa: 3.3,

    get fullName(){
        return this.firstName + " " + this.lastName;
    },
    set fullName(fullName) {
        this.firstName = fullName;
    },
    set updateGpa(gpa){
        if (gpa >= 0.0 && gpa <= 4.0){
            this.gpa = gpa;
        }
    }
}
console.log(Student.fullName);





// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const Person = {
    firstName : "Karrar",
    lastName : "Ahmed",
    gpa: 3.3,
    hoppie: "motorsport",
}
for (const key in Person){
    console.log(key + ": " + Person[key]);
}


// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
let str = "Motorsport is great";
console.log("str.charAt(3) = " + str.charAt(3));
console.log("str.length = "+str.length);

// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
const today = new Date();
console.log("current day of month: " + today.getDate() + '\n' +"today's month: " + (today.getMonth() +1) + "\n" + "today's year: " + today.getFullYear());

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
const myarray =[0,1,2,3,4,5,6,7,8,9];
console.log("Math.min: " + Math.min(...myarray) + "\n" + "Math.max: " + Math.max(...myarray));


// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/

console.log("------------------------------------------------------")
function maxArray(array) {
    try {
        console.log("try block...")
        if (array == null || array.length === 0) {
            throw new Error("array should not be null");
        }
        return Math.max(...array);
    } catch (e) {
        console.log("catch block...")
        console.log(e.message);
        return null;
    } finally {
        console.log("finally block...")
    }
}
console.log(maxArray(myarray));
const emtArray = []
console.log(maxArray(emtArray));



// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/

// End of Advance JavaScript Lab — good luck!
