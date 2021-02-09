const getBtn = document.getElementById('search_btn');
getBtn.addEventListener('click', () => {
    const getmealName = document.getElementById('input-id').value;

    console.log(getmealName);
    getMealData(getmealName);


})


getMealData = (getmealName) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${getmealName}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            updateMeal(data.meals)
        })
}


const updateMeal = data => {
    const node = document.getElementById('list-div');
    document.getElementById('list-div').innerHTML = "";
    for (i = 0; i < data.length; i++) {
        const mealElement = data[i];

        const mealList = document.createElement('div');
        mealList.className = 'meal-name';
        const mealInfo = `
         <img src=${mealElement.strMealThumb}>
        <h3>${mealElement.strMeal}</h3>
      
     <button onclick="mealDetail('${mealElement.strMeal}')" type="button" id="detail-button">Details</button>
        `
        mealList.innerHTML = mealInfo;
        node.appendChild(mealList);

    }

}

mealDetail = meals => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`)
        .then(res => res.json())
        .then(data => {
            showMealDetail(data.meals)
        })
}

const showMealDetail = meals => {
    const detrailNode = document.getElementById('detail-div')
    document.getElementById('detail-div').innerHTML = "";
    for (i = 0; i < meals.length; i++) {
        const mealIngredients = meals[i];
        console.log(mealIngredients);

        const ingredientList = document.createElement('div')
        const listItem = document.createElement('li')

        ingredientList.className = 'detail-class';
        const ingredientsInfo = `
        <img src=${mealIngredients.strMealThumb}>
        <h4>${mealIngredients.strMeal}</h4>
        <ul>
            <li>${mealIngredients.strIngredient1} ${mealIngredients.strMeasure1}</li>
            <li>${mealIngredients.strIngredient2} ${mealIngredients.strMeasure2}</li>
            <li>${mealIngredients.strIngredient3} ${mealIngredients.strMeasure3}</li>
            <li>${mealIngredients.strIngredient4} ${mealIngredients.strMeasure4}</li>
            <li>${mealIngredients.strIngredient5} ${mealIngredients.strMeasure5}</li>
            <li>${mealIngredients.strIngredient6} ${mealIngredients.strMeasure6}</li>
            <li>${mealIngredients.strIngredient7} ${mealIngredients.strMeasure7}</li>
            <li>${mealIngredients.strIngredient8} ${mealIngredients.strMeasure8}</li>
            <li>${mealIngredients.strIngredient9} ${mealIngredients.strMeasure9}</li>
            <li>${mealIngredients.strIngredient10} ${mealIngredients.strMeasure10}</li>
            </ul>
        `

        ingredientList.innerHTML = ingredientsInfo;
        detrailNode.appendChild(ingredientList);
    }

}
































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
