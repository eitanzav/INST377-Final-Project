// Function to search for recipes based on user input and dropdown values
function searchRecipes() {
    // Get the user input from the search bar
    const query = document.getElementById("recipeSearch").value;

    // Get the selected cuisine from the dropdown
    const cuisineDropdown = document.getElementById("cuisineDropdown");
    const selectedCuisine = cuisineDropdown.options[cuisineDropdown.selectedIndex].value;

    // Get the selected diet from the dropdown
    const dietDropdown = document.getElementById("dietDropdown");
    const selectedDiet = dietDropdown.options[dietDropdown.selectedIndex].value;

    // Construct the API URL
    const apiEndpoint = "https://api.spoonacular.com/recipes/complexSearch";
    const apiKey = "4b9165fcaea647c68ad3106a63e52749";
    const apiUrl = `${apiEndpoint}?query=${query}&cuisine=${selectedCuisine}&diet=${selectedDiet}&apiKey=${apiKey}`;

    // Make a GET request to the Spoonacular API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the data and display the results
            displayResults(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Function to display search results
function displayResults(data) {
    // Get the container where you want to display the results
    const resultsContainer = document.getElementById("results-container");

    // Clear previous results
    resultsContainer.innerHTML = "";

    // Loop through the results and create a card for each recipe
    data.results.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");

        const title = document.createElement("h3");
        title.textContent = recipe.title;

        const image = document.createElement("img");
        image.src = recipe.image;

        card.appendChild(title);
        card.appendChild(image);
        resultsContainer.appendChild(card);
    });
}

// Attach the searchRecipes function to the button click event
document.getElementById("searchButton").addEventListener("click", searchRecipes);
