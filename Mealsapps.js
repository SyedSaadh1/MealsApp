// Meals array to store the list of meals
const meals = [];

// DOM elements
const mealNameInput = document.getElementById('meal-name');
const addMealButton = document.getElementById('add-button');
const searchInput = document.getElementById('search-input');
const mealsList = document.getElementById('meals');

// Event listener for adding a meal
addMealButton.addEventListener('click', () => {
  const mealName = mealNameInput.value.trim();
  if (mealName !== '') {
    meals.push(mealName);
    mealNameInput.value = '';
    renderMeals();
  }
});

// Event listener for searching a meal
searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.trim().toLowerCase();
  renderMeals(searchText);
});

// Function to render meals list
function renderMeals(searchText = '') {
  mealsList.innerHTML = '';
  meals.forEach((meal) => {
    if (meal.toLowerCase().includes(searchText)) {
      const li = document.createElement('li');
      li.textContent = meal;
      mealsList.appendChild(li);
    }
  });
}

// Initial rendering
renderMeals();
