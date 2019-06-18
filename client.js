console.log('hello');

//Object literal
const baseballHat = {
    type: 'cap',
    color: 'black',
    size: 'XL'
};

const sunHat = {
    type: 'sun',
    color: 'yellow',
    size: 'L'
};

console.log('baseballHat', baseballHat);
console.log(`The baseballHat is ${baseballHat.color} in size ${baseballHat.size}.`);

// Const w/ object
console.log('Before setting size: ' + baseballHat.size);

//Can I do this?
baseballHat.size = 'S';
console.log('After setting size: ' + baseballHat.size);

//Can't set to another object
/*sunHat = {
    type: 'sun',
    color: 'white',
    size: 'S'
};


console.log('Set to a new hat?', sunHat);
*/

//Penguins
let penguins = [
    {
        name: 'Emperor',
        colors: ['Black', 'White', 'Yellow'],
        size: 1.0,
        isCute: true
    },
    {
        name: 'Little',
        colors: ['Slate-blue', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Rockhopper',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.75,
        isCute: true
    },
    {
        name: 'African',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Gentoo',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Sea Gull',
        colors: ['Gray'],
        size: 0.25,
        isCute: false
    },
    {
        name: 'Chinstrap',
        colors: ['Black', 'White'],
        size: 0.25,
        isCute: true
    },
    {
        name: 'Macaroni',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.5,
        isCute: true
    },
];

function findCuteOnes(inputArray) {
    let outputArray = [];
    for(let thing of inputArray){
        if(thing.isCute === true){
            outputArray.push(thing)
        }
    }
    return outputArray;
}

//Testing isPenguinCute function
console.log(findCuteOnes(penguins));

//Object constructor functions
function Hat(type, color, size){
    this.type = type;
    this.color = color;
    this.size = size;
};
const fancyHat = new Hat('fancy', 'gold', 'M');
console.log(fancyHat);
