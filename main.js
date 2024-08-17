// const imageDisplay1 = document.querySelector(".imageDisplay1")
// const imageDisplay2 = document.querySelector(".imageDisplay2")
// const imageDisplay3 = document.querySelector(".imageDisplay3")
// const imageDisplay4 = document.querySelector(".imageDisplay4")
// const imageDisplay5 = document.querySelector(".imageDisplay5")

// const searchBar = document.querySelector(".searchBar")
// const searchBtn = document.querySelector(".searchBtn")
// const title = document.querySelector(".title")
// const publisher = document.querySelector(".Publisher")

// async function checkForRecipes(item) {
//     const response = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes?search="+item);
//     var data = await response.json();

//     // imageDisplay.innerHTML = "";
//     // title.innerHTML = "";
//     // publisher.innerHTML = "";

//     for (let i=0;i<=4; i++ ) {
//         //   console.log(data.data.recipes[i]); 
//         console.log(data.data.recipes[i].title);
//         console.log(data.data.recipes[i].publisher);
//         console.log(data.data.recipes[i].image_url);
//         // for lop
//         imageDisplay1.innerHTML = `<img src="${data.data.recipes[0].image_url}" alt="Recipe Image">`;
//         imageDisplay2.innerHTML = `<img src="${data.data.recipes[1].image_url}" alt="Recipe Image">`;
//         imageDisplay3.innerHTML = `<img src="${data.data.recipes[2].image_url}" alt="Recipe Image">`;
//         imageDisplay4.innerHTML = `<img src="${data.data.recipes[3].image_url}" alt="Recipe Image">`;
//         imageDisplay5.innerHTML = `<img src="${data.data.recipes[4].image_url}" alt="Recipe Image">`;
//         title.innerHTML = data.data.recipes[i].title;
//         publisher.innerHTML=data.data.recipes[i].publisher;
//         // description
        
//     }
    
//     }




//     // side pe rakha code
// //     console.log(data.data.recipes[1].title);
// //     console.log(data.data.recipes[1].publisher);
// //     // for lop
// //     imageDisplay.innerHTML = `<img src="${data.data.recipes[0].image_url}" alt="Recipe Image">`;
// //     title.innerHTML = data.data.recipes[1].title;
// //     publisher.innerHTML=data.data.recipes[1].publisher;
// //     // description
    
// // }



// searchBtn.addEventListener("click",()=>{
//     checkForRecipes(searchBar.value);
// })




const imageDisplay = document.querySelector(".imageDisplay");
const searchBar = document.querySelector(".searchBar");
const searchBtn = document.querySelector(".searchBtn");
const title = document.querySelector(".title");
const publisher = document.querySelector(".Publisher");

async function checkForRecipes(item) {
    const response = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes?search=" + item);
    var data = await response.json();

// test
console.log(data.data)

    // Clear previous content
    imageDisplay.innerHTML = "";
    title.innerHTML = "";
    // publisher.innerHTML = "";

    for (let i = 0; i < 15; i++) {
        // Create new elements for each recipe
        const imgElement = document.createElement("img");
        const titleElement = document.createElement("h3");
        // const publisherElement = document.createElement("p");

        // Set the attributes and content
        imgElement.src = data.data.recipes[i].image_url;
        imgElement.alt = "Recipe Image";
        titleElement.textContent = data.data.recipes[i].title;
        // publisherElement.textContent = data.data.recipes[i].publisher;

        // Append the new elements to the imageDisplay container
        imageDisplay.appendChild(imgElement);
        title.appendChild(titleElement);
        // publisher.appendChild(publisherElement);
    }
}

searchBtn.addEventListener("click", () => {
    checkForRecipes(searchBar.value);
});
