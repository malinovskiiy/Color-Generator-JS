let btn = document.querySelector(".change_color");
let text = document.querySelector(".colour");

const generateColour = () => {

    // Generating digits of color code
    let colorCode = (Math.random() * 0xFFFFFF << 0).toString(16);

    // Create color HEX string
    newColour = `#${colorCode}`;

    // if some strange happens
    if (newColour.length < 7) {
        generateColour();
    }
}

// When clicking on button 'Change color'
btn.addEventListener('click', () => {
    generateColour();
    // Change style of body
    document.body.style.background = newColour;
    text.innerText = newColour;
})

// EPILEPTIC WARNING!!! don't uncomment this if you have health problems! :)
// setInterval(() => {
//     generateColour();
//     // Change style of body
//     document.body.style.background = newColour;
//     text.innerText = newColour;
// }, 100)