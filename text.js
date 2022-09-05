const obj = {
    name: 'junaed',
    age: 26,
    profession: 'Web Developer'
}

// console.log(obj.profession.split(" "));
const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

// const result = words.map((word) => {
//     return word[0].toUpperCase() + word.substring(1);
// }).join(" ");
const value = 'web developer';
const { profession } = obj;
const result = value.split(" ").map(word => {
    return word[0].toUpperCase() + word.substring(1);
}).join(" ");

if (profession.includes(result)) {
    console.log('true');
}

const exist = Object.values(obj).includes(value.charAt(0).toUpperCase() + value.slice(1));
// console.log(exist);