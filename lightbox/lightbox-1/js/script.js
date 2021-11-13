const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', close);
function close() {
    overlay.classList.remove('active');
}

// The divs are buttons
const divButtons = document.querySelectorAll('.project');
/* For each div button add an event listener 
that when clicked will grab the image src
and assign it to the IMG tag inside them html */
divButtons.forEach(button => {
    button.addEventListener("click", () => {
        const imageSource = button.children[0].src; /* Clicked image src */
        gImages.src = imageSource; /* Assign clicked img src to IMG html src */
        overlay.classList.add('active');
    })
});

const gImages = document.querySelector('.overlayImage');