import '../styles/style.css'
import { DOMselectors } from './domselectors';
//need to import domselectors 
const URL ="https://gsi.fly.dev/";

function makecard (){
    let a = DOMselectors.name.value;
    let b = DOMselectors.rarity.value;
    let c = DOMselectors.vision.value;
    let d = DOMselectors.weapon.value;

    DOMselectors.card.insertAdjacentElement("beforeend",
    ' ')
}

document.querySelector('#app').innerHTML = `
  <div>
  <h2>hiiii</h2>
   </div>
`

async function getData(URL) {
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
getData(URL);