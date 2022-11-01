import {fetchAPI} from "./fetch-api";

export function startAPI()
{
    fetchAPI().then(insertAPI);
}

function insertAPI(data)
{
    console.dir(data);
}