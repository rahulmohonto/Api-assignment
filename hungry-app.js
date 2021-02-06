const getMealData = meals => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
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

    for (i = 0; i < data.length; i++) {
        const getMealElement = data[0].meals;
        document.getElementById('meal-name').innerText = getMealElement.strMeal;
        console.log('meal-name');
        document.getElementById('meal-id').innerText = getMealElement.idMeal;
    }
}
getMealData('Apple Frangipan Tart');


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


// function diplayCityCapital(data) {
//     const node = document.getElementById('list-div');
//     for (i = 0; i < data.length; i++) {
//         const getDataElement = data[i];
//         const countryList = document.createElement('div');

//         // const capitalList = document.createElement('h3');
//         // countryList.innerText = getDataElement.name;

//         // const List = document.createElement('p');
//         // capitalList.innerText = getDataElement.capital;
//         // countryList.appendChild(capitalList);
//         // countryList.appendChild(List);
//         // node.appendChild(countryList);

//         countryList.className = 'countryName';
//         const countryInfo = `
//         <h3 class="country-name">${getDataElement.name}</h3>
//         <p>${getDataElement.capital}</P>
//             <button onclick=" displayDetail('${getDataElement.name}')" id="detail-btn" class="btn btn-primary">Details</button>
//         `
//         countryList.innerHTML = countryInfo;
//         node.appendChild(countryList);
//     }
// }










// document.getElementById('city').innerText = data.name || 'Unknown Location!';
// document.getElementById('temperature').innerText = data.main.temp;
// document.getElementById('condition').innerText = data.weather[0].main;
// document.getElementById('img-icon').setAttribute('src',
//     `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
// document.getElementById('city').value = ""