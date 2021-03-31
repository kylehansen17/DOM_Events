const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('You clicked me!')
    console.log('I hope it worked')
}

function scream() {
    console.log('AAAHHH')
    console.log('Stop touching me!')
}

btn.onmouseenter = scream;


// addEventListener
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert('Clicked!');
})

// why addEventListener is the best method
function twist() {
    console.log('Twist')
}
function shout() {
    console.log('Shout')
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;
// will only execute the last function applied to button

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
// will execute both functions


// Assuming there is a page with 50+ buttons
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function () {
        button.style.backgroundColor = makeRandColor();
        button.style.color = makeRandColor();
    })
}
// Using THIS to make reusable function out of above function
function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}
// Now updating the button function
for (let button of buttons) {
    button.addEventListener('click', colorize)
}


// Event Object
window.addEventListener('keydown', function (e) {
    console.log(e.code)
})
// The above will log any key that is pressed when on the page
// e.key = end result
// e.code = physical location of what is pressed


// ***** Form Events *****
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.vale, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}


// Input & Change Events
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('change', function (e) {
    console.log('Change Event')
    // Change is listening for when you "blur": leave the input box after change is made
})

input.addEventListener('input', function (e) {
    console.log('Input Event')
    // Input is listening for any input made in the input box
})

input.addEventListener('input', function (e) {
    h1.innerText = input.value
    // h1 mirrors what is being input
})


// Event Bubbling - triggering all parent event listners
e.stopPropagation();
// will stop bubbling from happening