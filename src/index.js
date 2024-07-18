import renderHomePage from './js/homepage.js';
import renderAboutPage from './js/about.js';
import renderMenuPage from './js/menu.js';
import { updateFooterYear} from './js/domController.js';
import './css/styles.css';

const UI_CONTROLLER = (() => {
    const content = document.getElementById('content');
    const navElement = document.querySelector('nav');
    const menuButtons = navElement.querySelectorAll('li');

    const pageRenderers = {
        'About': renderAboutPage,
        'Home': renderHomePage,
        'Menu': renderMenuPage
    };

    function handleButtonClick(button) {
        content.classList.remove('visible');
        content.classList.add('hidden');

        setTimeout(() => {
            content.innerHTML = '';

            const renderer = pageRenderers[button.textContent];
            if (renderer) {renderer()}
            else {console.warn(`Unhandled button click: ${button.textContent}`)}

            requestAnimationFrame(() => {
                content.classList.remove('hidden');
                content.classList.add('visible');
            });
        }, 200);
    }

    function initialize() {
        updateFooterYear();
        renderHomePage();
        menuButtons.forEach(button => button.addEventListener('click', () => handleButtonClick(button)));
    }

    return { initialize };
})();

UI_CONTROLLER.initialize();