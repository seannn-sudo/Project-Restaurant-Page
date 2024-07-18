import { createDiv, appendImage, appendText } from './domController.js';
import about_us from '../img/about_us.jpg';

const aboutUsText = [
  {
    type: 'h2',
    text: 'ABOUT US'
  },
  {
    type: 'p',
    text: 'MIXT was founded in 2006 in San Francisco, CA with two goals: make real food as accessible as fast food and use business as a force for good. Since then, MIXT has expanded to multiple locations in California, served millions of pounds of organic lettuce, and won accolades from the press and fans. Frustration over the lack of delicious, healthy, high-quality options continues to spur innovation and expansion of the MIXT brand into its second decade.'
  },
  {
    type: 'p',
    text: 'MIXT prides itself on excellent food and amazing service created by the passion and skill of our team members. Our crew loves working at MIXT for the highly-competitive wages, exceptional health benefits, technology-powered operations, enviable schedules and clear opportunity for career advancement at a growing company. Join the MIXT movement!'
  }
];

function handleAboutPage() {
    
  appendImage(content, about_us);
  const aboutUs = createDiv(content, 'about-us');

  aboutUsText.forEach(({ type, text }) => {
    appendText(type, aboutUs, [text]);
  });
}

export default handleAboutPage;