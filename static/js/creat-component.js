document.getElementById("reset").addEventListener("click", () =>{
    localStorage.clear();
    console.log("Local reset correctly")
})

localBtn = document.getElementById("local")
localBtn.addEventListener("click", async () => {
    console.log("loading from local");
    const data = await JSON.parse(localStorage.getItem("data"))
    console.log(data)
    if(typeof data === 'undefined' || data === null){
        alert("There is no data stored locally. Load data from remote first.");
        return;
    }
    else{
        const example = document.getElementById("example_card");
        example.style.display = "none";

        await data.forEach(project => {

            console.log(project)
            window.galleryItem = document.createElement("project-card");
            window.galleryItem.setAttribute("title", `${project.title}`);
            window.galleryItem.setAttribute("tech", `${project.tech}`);
            window.galleryItem.setAttribute("description", `${project.description}`);
            window.galleryItem.setAttribute("image1-url", `${project.image1_url}`);
            window.galleryItem.setAttribute("image2-url", `${project.image2_url}`);
            window.galleryItem.setAttribute("image3-url", `${project.image3_url}`);
            window.galleryItem.setAttribute("furtherReadings", `${project.furtherReadings}`);

            document.getElementById("gallery").appendChild(window.galleryItem);
            console.log(`${project.title} ${project.tech} ${project.description}: ${project.image1_url} ${project.image2_url} ${project.image3_url} ${project.furtherReadings}`);
        });
    }
})


cloudBtn = document.getElementById("cloud")
cloudBtn.addEventListener('click', async () => {
    console.log("loading from cloud");
    const url = "https://api.jsonbin.io/v3/b/67d77d978a456b79667732b7";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const jsonData = await response.json();
        const myData = jsonData.record.record
        console.log("jsonDATA", jsonData);
        console.log("jsonDATA record", myData);
        localStorage.setItem("data", JSON.stringify(myData))
        const example = document.getElementById("example_card");
        example.style.display = "none";
        await myData.forEach(project => {
            console.log(project);

            window.galleryItem = document.createElement("project-card");
            window.galleryItem.setAttribute("title", `${project.title}`);
            window.galleryItem.setAttribute("tech", `${project.tech}`);
            window.galleryItem.setAttribute("description", `${project.description}`);
            window.galleryItem.setAttribute("image1-url", `${project.image1_url}`);
            window.galleryItem.setAttribute("image2-url", `${project.image2_url}`);
            window.galleryItem.setAttribute("image3-url", `${project.image3_url}`);
            window.galleryItem.setAttribute("furtherReadings", `${project.furtherReadings}`);

            document.getElementById("gallery").appendChild(window.galleryItem);
            console.log(`${project.title} ${project.tech} ${project.description}: ${project.image1_url} ${project.image2_url} ${project.image3_url} ${project.furtherReadings}`);
        });

    } catch (error) {
        console.error(error.message);
    }
});

document.getElementById('gallery').addEventListener('click', (event) => {
    let target = event.target;
    target.style.border = target.style.border == "" ? "5px solid black" : "";
});