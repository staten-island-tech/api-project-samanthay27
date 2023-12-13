import "../styles/style.css"

const URL = `https://gsi.fly.dev/characters`;

const DOMselectors = {
    card: document.querySelector('#card'),
}

async function getData(URL) {
    try {
        const response = await fetch (URL);
        //requesting a response REST API's
        if (response.status != 200) {
            throw new Error (response.statusText);
        }
        const data = await response.json();
        console.log(data)
        //converts response to JSON
        document.querySelector("h1").textContent = data.content;
    } catch (error) {
    }
    //similar to ifelse
}
getData(URL);
