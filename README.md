# INST377-Final-Project

Title of your project: 
  HappyTummy Explorer
by: Emanuel Fong, Laura Villada, Eitan Zavorin

Description of your project: We created a web application that helps individuals with food allergies discover safe and delicious recipes that align with their dietary restrictions. This application will leverage the spoonacular API, a comprehensive food API that provides detailed information about ingredients, recipes, and dietary considerations.

Description of target browsers (iOS? Android? Which ones?): Our Food Allergy Recipe Finder Web Application is designed to be compatible with modern web browsers, providing a consistent and user-friendly experience across various platforms. The application is optimized for the latest versions of popular browsers such as Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge. We recommend users access the application using up-to-date versions of these browsers to ensure optimal performance, security, and access to all features. 

Developer Manual: 

Introduction:
This document provides technical instructions for future developers who will be working on this project. It covers setting up the application, running it on a server, running tests, understanding the API endpoints, known bugs, and future development plans.

Installation and Dependencies
To get started with this application, follow these steps:

1. Clone the repository to your local machine:
git clone https:/[/github.com/your-username/your-repository.git](https://github.com/eitanzav/INST377-Final-Project.git)https://github.com/eitanzav/INST377-Final-Project.git

2. Navigate to the project directory:

  cd INST377-Final-Project

3. Install the required dependencies using npm:

  npm install

4. Running the Application
To run the application on a server, use the following command:

  npm start


This will start the server, and you can access the application in your web browser at http://localhost:3000.

Running Tests
To run tests for this software, execute the following command:

  npm test


API Endpoints
The API for this server application exposes the following endpoints:

API Endpoints
The API for this server application exposes the following endpoints:

### API Endpoints

The API for this server application provides the following endpoints:

#### GET /recipes/complexSearch

- Description: Search for recipes using advanced filtering and ranking.
- Parameters:
  - `query` (string, required): The (natural language) recipe search query.
  - `cuisine` (string): The cuisine(s) of the recipes. One or more, comma-separated (will be interpreted as 'OR'). See a full list of supported cuisines.
  - `excludeCuisine` (string): The cuisine(s) the recipes must not match. One or more, comma-separated (will be interpreted as 'AND'). See a full list of supported cuisines.
  - `diet` (string): The diet(s) for which the recipes must be suitable. You can specify multiple with a comma (AND) or a pipe (OR). See a full list of supported diets.
  - `intolerances` (string): A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered.
  - ... (document other parameters)
- Example Request:
  ```http
  GET https://api.spoonacular.com/recipes/complexSearch?query=pasta&cuisine=italian&diet=vegetarian&apiKey=your-api-key
- Example Response:
{
    "offset": 0,
    "number": 10,
    "results": [
        {
            "id": 716429,
            "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
            "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg"
        },
        {
            "id": 715538,
            "title": "Bruschetta Style Pork & Pasta",
            "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg"
        }
    ],
    "totalResults": 86
}



- GET /recipes/{recipeId}/information
Description: Get detailed information about a specific recipe.
Parameters:
recipeId (number, required): The ID of the recipe to retrieve information about.
Example Request:


GET https://api.spoonacular.com/recipes/716429/information?apiKey=your-api-key

Example Reponse: 

{
    "id": 716429,
    "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
    "instructions": "1. Boil the pasta. 2. Sauté garlic and scallions. 3. Add cauliflower and breadcrumbs. 4. Toss with pasta.",
    "ingredients": [
        {
            "name": "Pasta",
            "amount": 8,
            "unit": "ounces"
        },
        {
            "name": "Garlic",
            "amount": 2,
            "unit": "cloves"
        },
        {
            "name": "Cauliflower",
            "amount": 1,
            "unit": "head"
        },
        {
            "name": "Breadcrumbs",
            "amount": 1,
            "unit": "cup"
        }
    ],
    "nutrition": {
        "calories": 350,
        "protein": 10,
        "carbohydrates": 50,
        "fat": 12
    }
}



Known Bugs
Currently, there are no known bugs in the system. If you encounter any issues or bugs, please report them to the project maintainers.


Future Development:

  Looking ahead, there are several opportunities to enhance the application further:
  
  User Authentication: Implement user accounts for personalized experiences, including saving favorite recipes.
  
  Recipe Ratings: Enable users to rate recipes, providing valuable feedback.
  
  Social Sharing: Add sharing features for users to share recipes on social media.
  
  Advanced Filters: Enhance search with filters like dietary restrictions and cooking time.
  
  Performance Optimization: Improve loading times and overall performance.
  
  Multilingual Support: Consider supporting multiple languages for a broader audience.
  
  User Profiles: Develop user profiles for managing preferences and saved recipes.
  
  Additional APIs: Explore new APIs to expand features and data sources.
  
  Security: Continuously enhance security measures for user data protection.
  
  These enhancements will keep the application dynamic and responsive to user needs.



