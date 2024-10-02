// Button 1: Change the heading content of "Workshop 4" to "Modified Heading!"
function changeHeading() {
    const heading = document.querySelector('h1'); // Select the first <h1> element
    heading.textContent = 'Modified Heading!';
}

document.querySelector('button[onclick="changeHeading();"]').addEventListener('click', changeHeading);
document.querySelector('button[onclick="secondButton"]').addEventListener('click', modifyExercise2Heading);
document.querySelector('button[onclick=""]').addEventListener('click', addParagraphAndImage);
