import '../styles/style.css'

const URL ="https://gsi.fly.dev/";

document.querySelector('#app').innerHTML = `
  <div>
  <h1>hiiii</h1>
   </div>
`

/* async function getData(URL) {
    try {
        const response = await fetch (URL);
        //requesting a response REST API's 
        if (response.status != 200) {
            throw new Error (response.statusText);
        }
        const data = await response.json();
        //converts response to JSON
        document.querySelector("h1").textContent = data.content;
    } catch (error) {
        console.log(error, "gg")
    }
    //similar to ifelse
}
getData(URL); */