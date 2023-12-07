import './app.css';

function main(): void {
    const button = document.querySelector("#testButton");
    button?.addEventListener("click", testSubmitHandler);

    const buttonAPI = document.querySelector("#testButtonAPI");
    buttonAPI?.addEventListener("click", testSubmitHandlerAPI);
}

function testSubmitHandler(e: Event): void {
    e.preventDefault();
    const outputElement = document.querySelector('#output');
    outputElement.textContent = 'Scripts work!';
}

async function testSubmitHandlerAPI(e: Event): Promise<void> {
    e.preventDefault();
    const outputElement = document.querySelector('#outputAPI');
    outputElement.textContent = 'Loading ...';
    const response = await fetch('/api/ExampleAPI');
    outputElement.textContent = await response.text();
}

main();