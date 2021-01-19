const p = document.querySelector("#paragraph")
const button = document.querySelector("#button")

let who = ["My dog", "My grandma", "My teacher", "My cat", "My horse", "My friend"];
let did = ["ate", "destroyed", "threw", "blasted", "sank"];
let what = ["my homework", "my kitchen", "my table", "my computer", "my phone"];
let when = ["yesterday", "tomorrow", "last night", "a few days ago"];

const random = (array) => array[Math.floor(Math.random() * array.length)];


const changeQuote = () => {
    p.innerHTML = `${random(who)} ${random(did)} ${random(what)} ${random(when)}`;

}

button.addEventListener('click', changeQuote)
