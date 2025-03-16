class ProjectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // HTML and inline style as template literals for easy modification
        const style = `
  display: flex;
  flex-direction: column;
  border: .25rem solid black;
  margin: auto;
  padding: 2rem;
  text-align: center;
  width: 50vw;
`;


        // Template for component content
        this.innerHTML = `
  <div style="${style}">
    <h2>Pantry Pals</h2>
    <picture style="display: inline-block;">
        <source srcset="../static/images/pantry pal menu 1579.jpg" media="(min-width: 1500px)">
        <source srcset="../static/images/pantry pal menu 200.jpg" media="(min-width: 200px)">
        <img src="../static/images/pantry pal menu 1000.jpg" alt="Picture of Pantry Pal main screen">
    </picture>
    <p>
        <strong>Pantry Pals</strong> is a ChatGPT wrapper that generates recipes based on what users have in their fridge.</span>
    </p>
    <a href="project1.html">Further Reading</a>
  </div>
`;
    }
}

// Define the custom element
customElements.define('project-card', ProjectCard);