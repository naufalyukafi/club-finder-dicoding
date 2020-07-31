//shadow host
const divElement = document.createElement("div");

//element yang berada di dalam Shadow DOM
const headingElement = document.createElement("h1");
headingElement.innerText = "Ini merupakan teks kontent di dalam shadow";

const shadowRoot = divElement.attachShadow({ mode: "open" });

shadowRoot.appendChild(headingElement);

document.body.appendChild(divElement);

shadowRoot.innerHTML += `
<style>
    h1 {
        color: green
    }
</style>
`;
