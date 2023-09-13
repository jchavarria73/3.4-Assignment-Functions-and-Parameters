const name = "Jose";
const youtuber = 'MrBeast';

function logger() {
    console.log('Pizza Time');
    console.log('Pizza Time');
    console.log('Pizza Time');
    console.log('Pizza Time');
}

logger();

function adder(num1, num2) {
    console.log(num1 + num2);
}

adder(10, 30);

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

toUpper(name);
toUpper(youtuber);