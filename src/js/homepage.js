import hero_banner_1 from '../img/hero_banner_1.jpg';
import hero_banner_2 from '../img/hero_banner_2.jpg';
import bottom_banner_1 from '../img/bottom_banner_1.png';
import bottom_banner_2 from '../img/bottom_banner_2.png';
import bottom_banner_3 from '../img/bottom_banner_3.png';

import {createDiv, appendImage, appendText } from './domController.js';

const contentStructure = [
    { id: "hero-banner-1", image: hero_banner_1 },
    { id: "nav-1", content: {
        title: "OUR STARS OF THE SEASON ARE BACK",
        text: ["We've brought back some fan favorites with the Peachy and the Elote back in the spotlight. Or, try a new creation of ours: the Curry Chicken Salad Bowl, the Spicy Falafel Bowl, or the Madras Sandwich"],
        button: "PRESS FOR PICNIC"
    }},
    { id: "hero-banner-2", image: hero_banner_2, overlay: {
        title: "THE WAY TO SALAD",
        text: [
            "At Mixt we do right by our ingredients, our makers, and the planet. And the results are damn delicious.",
            "Because yes, there is a right way to salad. Mixt way."
        ],
        button: "See Our Story"
    }},
    { id: "nav-2", content: {
        title: "WHAT'S NEW",
        text: [
            "This Season's warmest collab: Try our latest collab creation with a foodie cult favorite, Bachan's Japanese BBQ Sauce. Bachan's brings a bold umami twist to our new flavor-forward Bachan's Bowl.",
            "Move over pumpkin spice, our seasonal salads are here! The Harvest and Spicy Brussels salads feature fall ingredients like roasted butternut squash, pumpkin seeds, apples, brussels sprouts, and more.",
            "Mixt is heating it up with our new house-made hot sauce! Now available at every location on the salad line, condiment station and a 6 oz bottle for purchase!"
        ]
    }},
    { id: "bottom-banner", images: [bottom_banner_1, bottom_banner_2, bottom_banner_3] }
];

function renderHomePage() {
    contentStructure.forEach(section => {
        const div = createDiv(content, section.id);
        
        if (section.image) {
            appendImage(div, section.image);
        }
        
        if (section.images) {
            section.images.forEach(img => appendImage(div, img));
        }
        
        if (section.content) {
            appendText('h3', div, [section.content.title]);
            appendText('p', div, section.content.text);
            if (section.content.button) {
                appendText('button', div, [section.content.button]);
            }
        }
        
        if (section.overlay) {
            const overlayContent = createDiv(div, "overlay-content");
            appendText('h3', overlayContent, [section.overlay.title]);
            appendText('p', overlayContent, section.overlay.text);
            appendText('button', overlayContent, [section.overlay.button]);
        }
    });
}

export default renderHomePage;