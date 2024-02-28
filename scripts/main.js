import { generateTileHtml } from "./moods.js";
//setting constant variable 'container' equal to the HTML element of class = "tile-container"
const container = document.querySelector('.tile-container')
//modify innerHTML of container element
container.innerHTML = generateTileHtml() //function
