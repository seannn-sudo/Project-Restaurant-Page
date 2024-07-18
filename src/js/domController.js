function fadeIn(element) {
    element.classList.replace('hidden', 'visible');
    requestAnimationFrame(() => element.classList.replace('hidden', 'visible'));
}

function createDiv(container, className) {
    const div = document.createElement("div");
    div.className = className;
    container.appendChild(div);
    return div;
}

function appendImage(container, imagePath) {
    let img = document.createElement('img');
    img.src = imagePath;
    container.appendChild(img);
}

function appendText(type,container,textArray){
    textArray.forEach(text =>{
        const p = document.createElement(type);
        p.textContent = text;
        container.appendChild(p)
    })
}

function updateFooterYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

export {fadeIn, createDiv, appendImage, appendText, updateFooterYear}