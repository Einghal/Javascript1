function parseData() {
    // Get all the embedded XML quotes and authors from the HTML page
    const quotes = document.getElementsByTagName("quote");
    const authors = document.getElementsByTagName("author");

    // Initialize an empty string to store the result
    let output = "";

    // Loop through all the quotes and authors, assuming they are paired correctly
    for (let i = 0; i < quotes.length; i++) {
        output += `<p><strong>Quote:</strong> ${quotes[i].textContent}</p>`;
        output += `<p><strong>Author:</strong> ${authors[i].textContent}</p><br>`;
    }

    // Display the parsed results in the output div
    document.getElementById("quotes").innerHTML = output;
}

// tehtävä 2

function loadXMLDoc() {
    // Fetch the XML file from the server
    fetch("http://quotes.rest/qod.xml")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();  // Get the raw XML as text
        })
        .then(data => {
            // Inject the raw XML contents into the div with id "quotes"
            document.getElementById("quotes").innerHTML = data;
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
            document.getElementById("quotes").innerHTML = "Failed to load data. Please try again later.";
        });
}

// tehtävä 2 ei toiminut

// tehtävä 3

function loadAndParseXML() {
    // Fetch the XML file from the server
    fetch("http://quotes.rest/qod.xml")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();  // Get the raw XML as text
        })
        .then(data => {
            // Parse the XML data
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");

            // Extract the quote and author from the XML
            const quote = xmlDoc.getElementsByTagName("quote")[0].textContent;
            const author = xmlDoc.getElementsByTagName("author")[0].textContent;

            // Create a table row with the quote and author
            const table = `
                <table>
                    <thead>
                        <tr>
                            <th>Quote</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${quote}</td>
                            <td>${author}</td>
                        </tr>
                    </tbody>
                </table>
            `;

            // Inject the table into the div with id "tabledata"
            document.getElementById("tabledata").innerHTML = table;
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
            document.getElementById("tabledata").innerHTML = "Failed to load data. Please try again later.";
        });
}

// tehtävä 4

function loadAndParseNews(feedUrl) {
    // Fetch the RSS feed
    fetch(feedUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text(); // Get the raw XML as text
        })
        .then(data => {
            // Parse the XML data
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");

            // Get all the <item> elements (news items)
            const items = xmlDoc.getElementsByTagName("item");
            
            let newsHTML = "<ul>";

            // Loop through all the news items
            for (let i = 0; i < items.length; i++) {
                // Extract the title and link for each news item
                const title = items[i].getElementsByTagName("title")[0].textContent;
                const link = items[i].getElementsByTagName("link")[0].textContent;

                // Add each item as a list element with a clickable link
                newsHTML += `<li><a href="${link}" target="_blank">${title}</a></li>`;
            }

            newsHTML += "</ul>";

            // Inject the news list into the div with id "newsfeed"
            document.getElementById("newsfeed").innerHTML = newsHTML;
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
            document.getElementById("newsfeed").innerHTML = "Failed to load news. Please try again later.";
        });
}
