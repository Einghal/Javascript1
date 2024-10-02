// Button 1: Change the heading content of "Workshop 4" to "Modified Heading!"

function changeHeading() {
    const heading = document.querySelector('h1'); // Select the first <h1> element
    heading.textContent = 'Modified Heading!';
}

// Button 2
function secondButton() {
    const exerciseHeading = document.querySelectorAll('h2')[1]; // Select the second <h2> element
    exerciseHeading.style.fontSize = '40px';       // Change font size
    exerciseHeading.style.fontStyle = 'italic';    // Change font style
    exerciseHeading.style.color = 'purple';          // Change text color
    exerciseHeading.style.backgroundColor = 'Black'; // Change background color
}

// Button 3: Append a new paragraph and add a logo image
function thirdButton() {
    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = `<em>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.</em>`;

    // Create a new image element (logo)
    const newImage = document.createElement('img');
    newImage.src = 'https://via.placeholder.com/150'; // Placeholder logo image URL
    newImage.alt = 'Logo';

    // Select all paragraph elements
    const paragraphs = document.querySelectorAll('p');
    
    // Append the new paragraph after the 4th paragraph (index 3)
    if (paragraphs.length >= 4) {
        const fourthParagraph = paragraphs[3]; // The 4th paragraph (index 3)
        fourthParagraph.parentNode.insertBefore(newParagraph, fourthParagraph.nextSibling); // Insert after the 4th paragraph
        newParagraph.parentNode.insertBefore(newImage, newParagraph.nextSibling); // Insert the image after the new paragraph
    }

    // Change the background color of the entire page
    document.body.style.backgroundColor = 'lightblue';
}


//---------------------------------------------------------------------------------



// First checkbox: Hide the element with ID "me"
function hide() {
    const element = document.getElementById('me');
    if (element) {
        element.style.display = 'none';  // Hide the element
    }
}

// Second checkbox: Show the element with ID "me"
function show() {
    const element = document.getElementById('me');
    if (element) {
        element.style.display = 'block';  // Show the element
    }
}

// Third checkbox: Change font size of all elements with class "surprise"
function surprise() {
    const elements = document.querySelectorAll('.surprise');
    elements.forEach((el) => {
        el.style.fontSize = '20px';  // Set font size to 20px
    });
}

//------------------------------------------------------------------

//tehtävä 3

// Function to handle pulldown change
function changeCarImage() {
    var select = document.querySelector('#mySelect');
    var selectedValue = select.value;
    alert("You selected: " + selectedValue);
  
    // Change the car image based on selection
    var carImage = document.querySelector('#carimage');
    if (selectedValue === 'BMW') {
      carImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png';  // Public domain BMW image
    } else if (selectedValue === 'Audi') {
      carImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThPWP7oTduERaO7f85OnVP8lyc_QlRZtMfog&s';  // Public domain Audi image
    } else if (selectedValue === 'Mercedes') {
      carImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png';  // Public domain Mercedes image
    } else if (selectedValue === 'Volvo') {
      carImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35us_ksL5vl8fthBpRck9W5iflDd94DAENg&s';  // Public domain Volvo image
    }
  }
  
  // Function to add a border on mouse over
  function addBorder() {
    var carImage = document.querySelector('#carimage');
    carImage.style.border = '5px solid red';
  }
  
  // Function to remove the border on mouse out
  function removeBorder() {
    var carImage = document.querySelector('#carimage');
    carImage.style.border = 'none';
  }
  
  // Event listeners for pulldown change, mouseover, and mouseout
  document.querySelector('#mySelect').addEventListener('change', changeCarImage);
  document.querySelector('#carimage').addEventListener('mouseover', addBorder);
  document.querySelector('#carimage').addEventListener('mouseout', removeBorder);



//----------------------------------------------------------------------------------------------------

//Tehtävä 4

function changePosition() {
    const carImage = document.getElementById("carimage");
    carImage.style.position = "relative";
    carImage.style.left = "200px";
    carImage.style.top = "500px";
}

//----Täski 2

let direction = 1; // 1 for moving right, -1 for moving left
let position = 0;

function doMove() {
    const carImage = document.getElementById("carimage");
    carImage.style.position = "relative";
    position += 10 * direction;

    if (position > 400 || position < 0) {
        direction *= -1; // Reverse direction if at edge
    }

    carImage.style.left = position + "px";
}


//---------------------------------------------------------------------------------

let opacity = 1.0;

function fadeOut() {
    const carImage = document.getElementById("carimage");
    if (opacity > 0) {
        opacity -= 0.05; // Reduce opacity gradually
        carImage.style.opacity = opacity;
    }
}

//------------------------------------------------------------------------------------

function remove() {
    const carImage = document.getElementById("carimage");
    carImage.remove(); // Remove the element from the DOM
}



//-----------------------------------------------------------------------------------------

//tehtävä 5

function insertRows() {
    // Get the table
    const table = document.getElementById("data").getElementsByTagName('tbody')[0];

    // Get input values
    const name = document.getElementById("nameInput").value;
    const position = document.getElementById("positionInput").value;
    const salary = document.getElementById("salaryInput").value;

    // Create a new row
    const newRow = table.insertRow();

    // Create cells and append the input data
    const nameCell = newRow.insertCell(0);
    const positionCell = newRow.insertCell(1);
    const salaryCell = newRow.insertCell(2);

    nameCell.textContent = name;
    positionCell.textContent = position;
    salaryCell.textContent = salary;

    // Clear the input fields
    document.getElementById("nameInput").value = '';
    document.getElementById("positionInput").value = '';
    document.getElementById("salaryInput").value = '';
}