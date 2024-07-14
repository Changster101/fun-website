const divs = document.querySelectorAll('.content');
let currentIndex = 0;

// Function to show the next div
function eventListener(event) {
    if (divs[currentIndex].id === 'TEXTBOX') {
        return
    }
    else if (divs[currentIndex].id === 'CURSORCHOOSER') {
        var screenWidth = window.innerWidth;
        var cursorPosition = event.clientX;
        if (event.clientX < window.innerWidth / 2) {
             cursorImage = 'url("Images/giphy_cropped.png"), auto';
         } else {
             cursorImage = 'url("Images/duck-waddling-cursor.gif"), auto';
         }
         document.body.style.cursor = cursorImage;
         showNextDiv();
     }
     else if (divs[currentIndex].id === 'SHOWCHOOSER') {
        if (event.target.tagName === 'IMG') {
            if (event.target.id === 'stayhere') {
                showNextDiv();
            } else if (event.target.id === 'original') {
                showNextDiv();
            }
        }
     }
     else if (divs[currentIndex].id === 'BACKGROUNDCHOOSER') {
        if (event.clientX > window.innerWidth / 2) {
            backgroundImage = 'linear-gradient(to right, rgba(255, 175, 189, 0.9), rgba(255, 195, 160, 0.9)), url("Images/Giverny-Morning-Hues.webp")';
        } else {
            backgroundImage = 'linear-gradient(to right, rgba(255, 175, 189, 0.9), rgba(255, 195, 160, 0.9)), url("Images/geese-art.jpg")';
        }
        document.body.style.backgroundImage = backgroundImage;
        showNextDiv();
        }
    else if (divs[currentIndex].classList.contains('textbox')) {
        if (event.target.classList.contains('button')) {
            showNextDiv();
        }
    }
     else {
        showNextDiv();
     }
    }
function showNextDiv() {
        // Hide the current div
        divs[currentIndex].classList.remove('active');

        // Update the index
        currentIndex = (currentIndex + 1) % divs.length;
    
        // Show the next div
        divs[currentIndex].classList.add('active');

}

function changeGradient() {
    const colors = ['#ff8a00', '#e52e71', '#1a1aff', '#2ecc71', '#f1c40f'];
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    const gradient = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
    document.body.style.background = gradient;
}

// Get the image element
const image = document.getElementById('stayaway');
const replaceimage = document.getElementById('stayhere');
const div = document.getElementById('SHOWCHOOSER')
rect = image.getBoundingClientRect();

// Function to handle mouse movement
function handleMouseMovement(event) {
    if (image.getBoundingClientRect().right > 0) {
        rect = image.getBoundingClientRect();
    }
    // Get the position of the mouse cursor relative to the image
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Define a threshold (e.g., 50 pixels) to determine when to change the image
    const threshold = 150;

    // Calculate the distance from the mouse cursor to the center of the image
    const imageLeftX= rect.left;
    const imageRightX = rect.right;
    const imageTopY= rect.top;
    const imageBottomY = rect.bottom;

    // Calculate distances from the mouse cursor to each edge of the image
    const distanceFromLeft = imageLeftX - mouseX;
    const distanceFromRight = mouseX - imageRightX;
    const distanceFromTop = imageTopY - mouseY;
    const distanceToBottomEdge = mouseY - imageBottomY;

    // Check if the mouse cursor is within the image or within 50 pixels of its boundaries
    if (distanceFromRight <= threshold &&  distanceFromTop <= threshold) {
        image.style.display = 'none';
        replaceimage.style.display = 'flex';
    } else {
        image.style.display = 'flex';
        replaceimage.style.display = 'none';
    }
}
function saveText() {
    const div = document.getElementsByClassName("active");
    const textInput = div[0].getElementsByClassName("text-box");
    const value = textInput[0].value;
    localStorage.setItem(div[0].id, value);
}

// Attach event listener to track mouse movement over the image
document.addEventListener('mousemove', handleMouseMovement);

// Add event listener to the entire document
document.addEventListener('click', eventListener);
/*
var screenWidth = window.innerWidth;
        var cursorPosition = event.clientX;
        if (event.clientX < window.innerWidth / 2) {
             backgroundImage = 'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.9)), url("Images/geese-art.jpg")';
         } else {
            backgroundImage = 'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.9)), url("Images/Giverny-Morning-Hues.webp")';
         }
         document.body.style.backgroundImage = backgroundImage;
         */