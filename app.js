const getBtn = document.getElementById('search_btn');
getBtn.addEventListener('click', () => {
    const meals = document.getElementById('input-id').value;

    console.log(meals);
    getMealData(meals);
})


getMealData = (meals) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const mealsdiv = document.getElementById('list-div');
            mealsdiv.innerHTML = "";
            data.meals.forEach(meal => {
                const mealdiv = document.createElement('div');
                mealdiv.className = 'meal';
                const mealinfo = `
                <img src="${meal.strMealThumb}">
                <h3>"${meal.strMeal}"</h3>`

                mealdiv.innerHTML = mealinfo;
                mealsdiv.appendChild(mealdiv);
            });
        })
    document.getElementById('input-id').value;
}