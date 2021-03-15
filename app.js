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
