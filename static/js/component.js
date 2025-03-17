import { getComponentCSS } from './component-css.js';

class ProjectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // HTML and inline style as template literals for easy modification
        const style = document.createElement('style');
        style.textContent = getComponentCSS();

        const title = this.getAttribute('title') || 'Unknown Title';
        const tech = this.getAttribute('tech') || 'Unkown Tech';
        const description = this.getAttribute('description') || 'No Description Provided';
        const img1url = this.getAttribute('image1-url') || '';
        const img2url = this.getAttribute('image2-url') || '';
        const img3url = this.getAttribute('image3-url') || '';
        const furtherReading = this.getAttribute('furtherReadings')

        // Template for component content
        this.innerHTML = '';
        this.appendChild(style);
        this.innerHTML += `
            <div class="template">
            <h2 class="heading">${title}</h2>
            <picture style="display: inline-block;">
                <source srcset="${img1url}" media="(min-width: 1500px)">
                <source srcset="${img2url}" media="(min-width: 200px)">
                <img src="${img3url}" alt="${title} main screen">
            </picture>
            <p class="caption">Tech stack: ${tech}</p>
            <p>${description}</p>
            <a href="${furtherReading}">Further Reading</a>
            </div>
        `;
        this.querySelector('.simple-card').addEventListener('click', () => this.doSomething());

    }

    doSomething() {
        const event = new CustomEvent('do-something', {
            bubbles: true
        });
        this.dispatchEvent(event);
    }
}

// Define the custom element
customElements.define('project-card', ProjectCard);

