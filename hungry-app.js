const getMealData = meals => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
            updateMeal(data)
        })
}

const getBtn = document.getElementById('search_btn');
getBtn.addEventListener('click', () => {
    const getmealName = document.getElementById('input-id').value;
    getMealData(getmealName);
})

updateMeal = data => {
    const node = document.getElementById('list-div');
    for (i = 0; i < data.meals.length; i++) {
        const mealElement = data.meals[i];

        const mealList = document.createElement('div');
        mealList.className = 'meal-name';
        const mealInfo = `
        <img src=${mealElement.strMealThumb}>
        <h3>${mealElement.strMeal}</h3>
           <p>${mealElement.idMeal}</p>
           <button onclick="mealDetail('${mealElement.strMeal}')" type="button" id="detail-button">Details</button>
            `
        mealList.innerHTML = mealInfo;
        node.appendChild(mealList);
    }
}

const mealDetail = meals => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
            showMealDetail(data)
        });
}

showMealDetail = data => {
    const detrailNode = document.getElementById('detail-div')
    // const listNode = document.getElementById('ingredient-list')
    for (i = 0; i < data.meals.length; i++) {
        const mealIngredients = data.meals[i];
        console.log(mealIngredients);

        // document.getElementById('images').innerText = mealIngredients.strMealThumb;
        // document.getElementById('ingredient1').innerText = mealIngredients.strIngredient1;

        const ingredientList = document.createElement('div')
        const listItem = document.createElement('li')

        ingredientList.className = 'detail-class';
        const ingredientsInfo = `
            <img src=${mealIngredients.strMealThumb}>
            <li>${mealIngredients.strIngredient1}</li>
            <li>${mealIngredients.strIngredient2}</li>
            <li>${mealIngredients.strIngredient3}</li>
            <li>${mealIngredients.strIngredient4}</li>
            <li>${mealIngredients.strIngredient5}</li>
            <li>${mealIngredients.strIngredient6}</li>
           `
        // document.getElementById('ingredient-list').innerHTML = ingredientsInfo;
        ingredientList.innerHTML = ingredientsInfo;
        detrailNode.appendChild(ingredientList);
    }
    document.getElementById('detail-div').innerHTML = "";
}












// getMealData('');


// updateData = data => {
//     document.getElementById('city').innerText = data.name || 'Unknown Location!';
//     document.getElementById('temperature').innerText = data.main.temp;
//     document.getElementById('condition').innerText = data.weather[0].main;
//     document.getElementById('img-icon').setAttribute('src',
//         `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
//     document.getElementById('city').value = "";

// }































// const getApi = meals => {
//     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             getMeal(data)
//         })
// }



// const getBtn = document.getElementById('search_btn');
// getBtn.addEventListener('click', () => {
//     const getSerachBtn = document.getElementById('input-id').value;
//     getApi(getSerachBtn);
// })

// function getMeal(data) {
//     const node = document.getElementById('list-div');
//     for (i = 0; i < data.length; i++) {
//         const getMealElement = data[i];
//         const menuList = document.createElement('div');
//         menuList.className = 'menu-class';
//         const mealInfo = ` 
//         <h3>${getMealElement.idMeal}</h3>
//         <p>${getMealElement.strMeal}</p>`
//     }
// }
// getApi();


