// Funktio nappi1
function handleNappi1Click() {
    let currentDate = new Date();
    alert("You clicked me! " + currentDate);
}
// Funktio nappi2
function handleNappi2Click() {
    const table = document.getElementById("example"); // Hakee taulukon elementin
    if (table.style.display === "none") {
        table.style.display = "table"; // Näyttää taulukon
    } else {
        table.style.display = "none"; // Piilottaa taulukon, jos se on näkyvissä
    }
}


// Funktion button3
function handleNappi3Click() {
    if (navigator.geolocation) {
        // Hakee käyttäjän sijainnin
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

    // Näyttää sijainnin koordinaatit
    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        alert("Latitude: " + latitude + "\nLongitude: " + longitude);
    }

        // Näyttää virheen, jos geolokaation haku epäonnistuu
        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    alert("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    alert("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    alert("An unknown error occurred.");
                    break;
            }
        }

   


// Add event listeners to each button
document.getElementById('nappi1').onclick = handleNappi1Click;
document.getElementById('nappi2').onclick = handleNappi2Click;
document.getElementById('nappi3').onclick = handleNappi3Click;




// Exercise 2
document.querySelector("h2.ws3").addEventListener("mouseover", function () {
    console.log("Stepped over my a mouse!");
});

document.querySelector("h2.ws3").addEventListener("mouseleave", function () {
    alert("Bye bye mouse!");
});





// EXERCISE 3
// Funktion textarea-fokuksen käsittelyyn
function handleTextareaFocus() {
    const textarea = document.getElementById("textdata");
    textarea.style.backgroundColor = "#f0f8ff"; // Muutetaan taustan väri
    const message = document.getElementById("message");
    message.textContent = "Please fill in the form with proper data.";
}

// Funktion näppäinpainallusten laskemiseen
let keypressCount = 0; // Alustetaan laskuri

// Funktion näppäinpainallusten laskemiseen, myös Backspace huomioidaan
function handleTextareaKeydown(event) {
    const charCount = document.getElementById("charcount");

    // Tarkistetaan, jos näppäin ei ole 'Backspace'
    if (event.key !== "Backspace") {
        keypressCount++; // Lisätään laskuriin yksi jokaisesta näppäimestä
    } else if (keypressCount > 0) {
        keypressCount--; // Vähennetään yksi, jos painetaan Backspace ja laskuri ei ole nolla
    }

    charCount.textContent = "Keypresses: " + keypressCount;
}

// Funktion textarea-tarkistamiseen ennen lähettämistä
function handleFormSubmit(event) {
    event.preventDefault(); // Estetään oletustoiminto (lomakkeen lähettäminen)

    const textareaValue = document.getElementById("textdata").value;
    if (textareaValue.trim() === "") {
        alert("The textarea is empty. Please provide some data.");
    } else {
        alert("Form submitted successfully!");
    }
}

// Lisää tapahtumakuuntelijat textareaan ja lomakenapille
const textarea = document.getElementById("textdata");
textarea.onfocus = handleTextareaFocus;
textarea.onkeydown = handleTextareaKeydown;

const formButton = document.querySelector("form button");
formButton.onclick = handleFormSubmit;





// Exercise 4: MouseMove event to track coordinates
document.getElementById('coordinates').addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;

    console.log(`X: ${x}, Y: ${y}`);
    document.getElementById('coordinates').innerHTML = `X: ${x}, Y: ${y}`;
});