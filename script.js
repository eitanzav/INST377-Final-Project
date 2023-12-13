// javascript to make api work
// Function to search for recipes based on user input
function searchRecipes() {
    // Get the user input from the search bar
    const query = document.getElementById("recipeSearch").value;

    // Spoonacular API endpoint
    const apiEndpoint = "https://api.spoonacular.com/recipes/complexSearch";

    const apiKey = "4b9165fcaea647c68ad3106a63e52749";

    const apiUrl = `${apiEndpoint}?query=${query}&apiKey=${apiKey}`;

    // Make a GET request to the Spoonacular API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the data and display the results (CUSTOMIZE)
            displayResults(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Function to display search results NEED TO CUSTOMIZE VERY BASIC
function displayResults(data) {
    // Example: Log the recipe titles to the console
    data.results.forEach(recipe => {
        console.log(recipe.title);
    });

}

// Attach the searchRecipes function to the button click event
document.getElementById("searchButton").addEventListener("click", searchRecipes);
