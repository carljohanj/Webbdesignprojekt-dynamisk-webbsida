

export function fetchAPI(SEARCH)
{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${SEARCH}`;
     
    return fetch(url)
    .then
    (
        res => res.json()
    )
    .then
    (
        data =>
        {
        return data.meals;
        }
    )
}