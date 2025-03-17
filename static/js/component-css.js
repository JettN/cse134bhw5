export function getComponentCSS() {
    return `
                .template{
                    display: flex;
                    flex-direction: column;
                    border: .25rem solid #0A210F;
                    margin: auto;
                    justify-content: center;
                    text-align: center;
                    width: 100%;
                    height: 100%;
                    background-color: #85144B;
                    color: white; 
                }

                .caption {
                    font: 70% bold;
                }

                .heading {
                    color: #47A8BD;
                }
                
                .card_link {
                    color: #B2D3A8;
                    text-decoration: underline;
                }
            `;
        }