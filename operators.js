// < less than
// <= less than or equal to
if (10 <= 22) {//this is true
    console.log("10 is less than 20");
}

// > greater than
// >= greater than or equal to
if (20 >= 10) {
    console.log("20 is greater than 10");
}

// = assign to variable
var myPassword = "ou812";

// == compare values
if (1 == 1) {
    console.log("One is equal to one");
}

//!= not equal
if (5 != 1) {
    console.log("5 is not equal to 1");
}

// + add
var apples = 10 + 5;

// += add to current values
apples += apples;

// - subtract
apples - 10;

// -= subtract from current values
apples -= apples;

// * multiply
var bananas = 10 * 10;

// / divide
bananas /= 5;

// ++ increment (or add one to)
bananas++;

// -- decrement (or subtract one from)
bananas--;

// && and
if (apples >= 0 && bananas >= 2) {
    console.log(apples);
    console.log(bananas);
}

// || or
if (apples < 0 || bananas >= 0) {
    console.log("One statement was true");
}
