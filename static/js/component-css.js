export function getComponentCSS() {
    return `
                .template{
                    display: flex;
                    flex-direction: column;
                    border: .25rem solid #0A210F;
                    margin: auto;
                    padding: 2rem;
                    text-align: center;
                    width: 50vw;
                    background-color: #85144B;
                    color: white; 
                }

                .caption {
                    font: 70% bold;
                }

                .heading {
                    color: #47A8BD;
            }
            `;
        }