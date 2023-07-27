//Truthy Section
const string = "I am a string";

if (string === "I am a string") {
    console.log(true);
}

const boo1F = false;
if (boo1F === false) {
    console.log("The boolean value false is falsy");
}

const nully = null;
if (nully === null) {
    console.log("The null value is falsey");
}

//Pair and Compare Section

const param1A = 'eight';
const param1B = 'eight';

const param2A = 'ate';
const param2B = 'ate';

if (param1A === param1B || param2A === param2B ) {
    console.log(true);
} else {
    console.log(false);
}

//const param1A = 'five';
//const param1B = '5';

//const param2A = 'dog';
//const param2B = 'dawg';

//if (param1A === param1B || param2A === param2B ) {
//    console.log(false);
//} else {
//    console.log(false);
//}