// Tehtävä 1

function validateForm() {
    // Haetaan kenttien arvot
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;

    // Virheviestit
    var emailError = document.getElementById("emailError");
    var commentError = document.getElementById("commentError");

    // Alustetaan virhetilat
    var isValid = true;
    emailError.textContent = "";
    commentError.textContent = "";

    // Tarkistetaan sähköpostin pituus ja @-merkki
    if (email.trim() === "") {
        emailError.textContent = "Sähköpostikenttä ei voi olla tyhjä.";
        document.getElementById("email").style.border = "2px solid red";
        isValid = false;
    } else if (email.length < 6 || email.length > 15 || email.indexOf('@') === -1) {

        emailError.textContent = "Sähköpostin täytyy olla 6-15 merkkiä ja sisältää @-merkki.";
        document.getElementById("email").style.border = "2px solid red";
        isValid = false;
    } else {
        document.getElementById("email").style.border = "";
    }

    // Tarkistetaan kommenttikenttä
    if (comment.trim() === "") {
        commentError.textContent = "Kommenttikenttä ei voi olla tyhjä.";
        document.getElementById("comment").style.border = "2px solid red";
        isValid = false;
    } else {
        // Trimmaus 50 merkkiin
        comment = comment.trim().substring(0, 50);
        document.getElementById("comment").style.border = "";
    }

    // C) Jos kaikki kunnossa, näytetään yksi alert, jossa molempien kenttien tiedot
    if (isValid) {
        var message = "Sähköposti: " + email + "\nKommentti: " + comment;
        alert(message);
    }

    // Palautetaan false vain, jos virheitä on
    return isValid;
}

//2

document.querySelector("#theForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Estetään lomakkeen oletusarvoinen lähetys

    // Haetaan valittu jäsenyyden tyyppi ja vuosien määrä
    const type = document.querySelector("#type").value;
    const years = parseInt(document.querySelector("#years").value);
    const costField = document.querySelector("#cost");

    // Hinnat jäsenyyksille
    let membershipCost;
    if (type === "basic") {
        membershipCost = 10;
    } else if (type === "premium") {
        membershipCost = 15;
    } else if (type === "gold") {
        membershipCost = 20;
    } else if (type === "platinum") {
        membershipCost = 25;
    }

    // Lasketaan kokonaishinta
    let totalCost = membershipCost * years;
    let discountMessage = ''; // Alennuksen viesti
    let greetingMessage = ''; // Lisätervehdys 5 vuoden kohdalla

    // Alennus logiikka
    if (years >= 2) {
        const discount = totalCost * 0.2; // 20% alennus
        totalCost -= discount;
        discountMessage = 'Olet oikeutettu 20% alennukseen!';
    }

    if (years >= 5) {
        totalCost -= 5; // Extra 5€ alennus
        greetingMessage = 'Saat myös lisäalennuksen 5€. Kiitos sitoutumisestasi!';
    }

    // Näytetään laskettu hinta ja mahdolliset alennusviestit
    costField.value = `${totalCost.toFixed(2)} €`; // Näytetään hintakentässä
    document.querySelector("#theForm").insertAdjacentHTML("afterend", `<p>${discountMessage}</p><p>${greetingMessage}</p>`);
});

// tehtävä 3



function calculate() {
    // Hae kenttien arvot ja muunna ne sopiviksi tyypeiksi
    let quantity = parseInt(document.querySelector("#quantity").value); // Muutetaan kokonaisluvuksi
    let price = parseFloat(document.querySelector("#price").value); // Muutetaan liukuluvuksi
    let tax = parseFloat(document.querySelector("#tax").value); // Muutetaan liukuluvuksi
    let discount = parseFloat(document.querySelector("#discount").value); // Muutetaan liukuluvuksi
    let shipping = parseFloat(document.querySelector("#shipping").value); // Muutetaan liukuluvuksi

    // Kaksoisalennus, jos määrä on yli 100
    if (quantity > 100) {
        discount *= 2;
    }

    // Lasketaan alennuksen jälkeen
    let subtotal = (price * quantity) - discount;
    
    // Lasketaan vero
    let taxAmount = (subtotal * (tax / 100));

    // Lasketaan kokonaissumma (lisätään vero ja toimituskulut)
    let total = subtotal + taxAmount + shipping;

    // Näytetään kokonaishinta total-kentässä
    document.querySelector("#total").value = total.toFixed(2);
}

// tehtävä 4

function toggleDetails() {
    const contactMethod = document.getElementById("contact-method").value;
    const contactDetailsDiv = document.getElementById("contact-details");

    if (contactMethod) {
        contactDetailsDiv.style.display = "block"; // Näytä kenttä
    } else {
        contactDetailsDiv.style.display = "none"; // Piilota kenttä
    }
}