const divs = document.querySelectorAll('.content');
let currentIndex = 0;

// Function to show the next div
function eventListener(event) {
    if (divs[currentIndex].id === 'STARTSCREEN') {
        return;
    }
    else if (divs[currentIndex].id === 'TEXTBOX') {
        return;
    }
    else if (divs[currentIndex].id === 'CURSORCHOOSER') {
        if (event.target.tagName === 'IMG') {
            if (event.target.id === 'duck') {
                cursorImage = 'url("Images/duck-waddling-cursor.gif"), auto';
                document.body.style.cursor = cursorImage;
                showNextDiv();
            } else if (event.target.id === 'orca') {
                cursorImage = 'url("Images/giphy_cropped.png"), auto';
                document.body.style.cursor = cursorImage;
                showNextDiv();
            }
        }
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
        const message = document.getElementById('message');
        if (event.clientX > window.innerWidth / 2) {
            showNextDiv();
        } else {
            message.style.display = 'block';
        }
    }
    else if (divs[currentIndex].id === 'AUDIOCHOOSER') {
        showNextDiv();
        setTimeout(() => {
            revealhidden();
        }, 5000);
    }
    else if (divs[currentIndex].id === 'TRANSITION') {
        return;
    }
    else if (divs[currentIndex].classList.contains('textbox')) {
        if (event.target.classList.contains('button')) {
            if (event.target.id === 'done') {
                showFinale();
            } else{
                showNextDiv();
            }
        }
    } else if (divs[currentIndex].id === 'finale') {
        return;
    }
     else {
        showNextDiv();
    }
}
function showNextDiv() {
        // Hide the current div
        divs[currentIndex].classList.remove('active');
        // Update the index
        currentIndex = (currentIndex + 1);
        // Show the next div
        divs[currentIndex].classList.add('active');

}

function showFinale() {
            // Hide the current div
            divs[currentIndex].classList.remove('active');
            // Update the index
            currentIndex = (currentIndex + 1);
            // Show the next div
            divs[currentIndex].classList.add('active');
            console.log("HERE");
            
            // Remove headers and go after 5 seconds
                setTimeout(() => {
                    console.log(divs[currentIndex]);
                    divs[currentIndex].classList.remove('active');
                    text = document.getElementById("TRULYFINAL_CONTENT");
                    const coffee = localStorage.getItem('Coffee');
                    const walk = localStorage.getItem('Walk');
                    document.getElementById("TRULYFINAL").classList.add('active');
                    text.innerHTML = `Or alternatively coffee from ${coffee} and then a scenic walk (with ducks?) to ${walk}`;
                    setTimeout(() => {
                        // Remove 'active' class from TRULYFINAL
                        document.getElementById("TRULYFINAL").classList.remove('active');
                        document.getElementById("SECONDTOLAST").classList.add('active');
                        setTimeout(() => {
                            // Remove 'active' class from TRULYFINAL
                            document.getElementById("SECONDTOLAST").classList.remove('active');
                            document.getElementById("LASTSCREEN").classList.add('active');
                        }, 6000)
                    }, 8000);
                }, 9500);
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
    value = textInput[0].value;
    localStorage.setItem(div[0].id, value);
    value = '';
}

window.onload = function() {
    localStorage.clear();
    var elements = document.getElementsByClassName("text-box");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.value = '';
    }
    }
window.onload = function() {
    const headers = ["backgroundAudio", 'INTRO', 'INTROTWO', 'INTROTHREE', 'INTROFOUR', 'INTROFIVE'];
    let currentIndexIntro = 0;

    function showNextHeader() {
        if (currentIndexIntro < headers.length) {
            const currentHeader = document.getElementById(headers[currentIndexIntro]);
            const nextHeader = document.getElementById(headers[currentIndexIntro + 1]);

            if (currentHeader) {
                currentHeader.classList.remove('active');
                currentHeader.classList.add('hidden');
            }

            if (nextHeader) {
                nextHeader.classList.remove('hidden');
                nextHeader.classList.add('active');
                currentIndexIntro++;
                setTimeout(showNextHeader, 5500); // Call the function again after 5 seconds
            } else {
                // If there are no more headers, call showNextDiv()
                showNextDiv();
            }
        }
    }
    
        setTimeout(showNextHeader, 6000);
    }; 

function revealhidden() {
    const headers = ["FIRST", "NEXT"];
    let currentIndexIntro = 0;

    function showNextHeader() {
        if (currentIndexIntro < headers.length) {
            const currentHeader = document.getElementById(headers[currentIndexIntro]);
            const nextHeader = document.getElementById(headers[currentIndexIntro + 1]);

            if (currentHeader) {
                currentHeader.classList.remove('active');
                currentHeader.classList.add('hidden');
            }

            if (nextHeader) {
                console.log(nextHeader);
                nextHeader.classList.remove('hidden');
                nextHeader.classList.add('active');
                currentIndexIntro++;
                setTimeout(showNextHeader, 5000); // Call the function again after 5 seconds
            } else {
                // If there are no more headers, call showNextDiv()
                showNextDiv();
            }
        }
    }
        showNextHeader();
}
// Attach event listener to track mouse movement over the image
document.addEventListener('mousemove', handleMouseMovement);

// Add event listener to the entire document
document.addEventListener('click', eventListener);

function replaceHeaders() {
    // Create new headers
    var newHeader1 = document.createElement('h1');
    newHeader1.textContent = 'New Header 1';
    
    var newHeader2 = document.createElement('h1');
    newHeader2.textContent = 'New Header 2';

    // Replace existing headers with new ones
    var headerContainer = document.getElementById('finale');
    headerContainer.innerHTML = ''; // Clear existing content
    headerContainer.appendChild(newHeader1);
    headerContainer.appendChild(newHeader2);
}
document.getElementById('playButton').addEventListener('click', function() {
    var music = document.getElementById('backgroundAudio');
    music.play();
    this.style.display = 'none'; // Hide the button after click
  });
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