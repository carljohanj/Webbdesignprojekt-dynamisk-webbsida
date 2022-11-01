import { fetchAPI } from "./fetch-api.js";


//Exporterar funktionen till fartyg.js och startar den därifrån:
export function recipeSearch()
{
    const BUTTON = document.getElementById('search-button');
    BUTTON.addEventListener('click', startAPI);
}



function startAPI() 
{
    //Om sökfältet är tomt, säg till användaren att skriva in en text:
    if (document.getElementById('search-field').value == "" || document.getElementById('search-field').value == " ") 
    {
        alert("Du måste skriva in en söktext!");
    }
    else 
    {
        //Om sökfältet innehåller en giltig sträng, sparka igång API-et:
        const SEARCH = document.getElementById('search-field').value;
        
        
        
        fetchAPI(SEARCH).then(insertAPI);
    }
}



function insertAPI(data)
{
    //Rensar sidan på sökresultat om det redan har gjorts en tidigare sökning:
    resetSearchResults();

    for (let i = 0; i < data.length; i++) 
    {

        let element = data[i];

        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        let thead = document.createElement('thead');

        let dish = document.createElement('h3');
        dish.innerHTML = element.strMeal;
        thead.appendChild(dish);

        table.appendChild(thead);
        table.appendChild(tbody);

        //Kollar bredden på fönstret och justerar innehållet accordingly, eftersom vi vill ha olika layouter
        //(och även annorlunda content-struktur) för små och stora skärmar:
        if(window.innerWidth < 710)
        {
            let imgRow = tbody.insertRow(0);
            let imageCell = imgRow.insertCell(0);

            let imageurl = `<img src="${element.strMealThumb}"></img>`;
            imageCell.innerHTML = imageurl;

            let imageAndIngredientsRow = tbody.insertRow(1);
        
            //Skapar rad för ingredienser och toppbild:
            let ingredientsCell = imageAndIngredientsRow.insertCell(0);
            let text = `<h3>—Ingredienser—</h3>`;
            ingredientsCell.innerHTML = text;

            //Stoppar in ingredienserna (funktion finns i botten av filen):
            getIngredients(element, ingredientsCell);


            //Lägger till tillagningsinstruktioner:
            let recipeRow = tbody.insertRow(2);
            let recipeColumn = recipeRow.insertCell(0);
            recipeColumn.innerHTML = element.strInstructions;
        }
        else
        {
            let imageAndIngredientsRow = tbody.insertRow(0);
        
            //Skapar rad för ingredienser och toppbild:
            let ingredientsCell = imageAndIngredientsRow.insertCell(0);
            let text = `<h3>—Ingredienser—</h3>`;
            ingredientsCell.innerHTML = text;

            //Stoppar in ingredienserna (funktion finns i botten av filen):
            getIngredients(element, ingredientsCell);

            //Lägger till bild:
            let imageCell = imageAndIngredientsRow.insertCell(1);
            let imageurl = `<img src="${element.strMealThumb}" class="food-pic"></img>`;
            imageCell.innerHTML = imageurl;
    
            //Lägger till tillagningsinstruktioner:
            let recipeRow = tbody.insertRow(1);
            let recipeColumn = recipeRow.insertCell(0);
            recipeColumn.innerHTML = element.strInstructions;
        }

        
        document.getElementById('food-widget').appendChild(table);
        
    }
}



function getIngredients(element, ingredientsCell)
{
    const linebreak = document.createElement('br');
    
    let ingredientArray = [element.strMeasure1 + " " + element.strIngredient1, element.strMeasure2 + " " + element.strIngredient2,
                           element.strMeasure3 + " " + element.strIngredient3, element.strMeasure4 + " " + element.strIngredient4,
                           element.strMeasure5 + " " + element.strIngredient5, element.strMeasure6 + " " + element.strIngredient6,
                           element.strMeasure7 + " " + element.strIngredient7, element.strMeasure8 + " " + element.strIngredient8,
                           element.strMeasure9 + " " + element.strIngredient9, element.strMeasure10 + " " + element.strIngredient10,
                           element.strMeasure11 + " " + element.strIngredient11, element.strMeasure12 + " " + element.strIngredient12,
                           element.strMeasure13 + " " + element.strIngredient13, element.strMeasure14 + " " + element.strIngredient14,
                           element.strMeasure15 + " " + element.strIngredient15, element.strMeasure16 + " " + element.strIngredient16,
                           element.strMeasure17 + " " + element.strIngredient17, element.strMeasure18 + " " + element.strIngredient18,
                           element.strMeasure19 + " " + element.strIngredient19, element.strMeasure20 + " " + element.strIngredient20];
    
    for (let i = 0; i < ingredientArray.length; i++)
    {
        if (ingredientArray[i] != "" && ingredientArray[i] != "null null")
        {
            const ingredient = document.createElement('p');
            ingredient.innerHTML = ingredientArray[i];
            ingredientsCell.appendChild(ingredient);
            ingredientsCell.appendChild(linebreak);
        }
    }
}



function resetSearchResults()
{
    let widgetBox = document.getElementById('food-widget');
    if (widgetBox.innerHTML != null)
    {
        widgetBox.innerHTML = "";
    }
}