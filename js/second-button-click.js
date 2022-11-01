
export function secondButtonClick()
{
    //Scrollfunktion för knappar på sidor
    const BUTTON = document.querySelector('boat-button2');
    const NEXTELEMENT = document.querySelector('.part3');

    BUTTON.addEventListener('click', scrolltoNextElement);

    function scrolltoNextElement(event)
    {
    NEXTELEMENT.scrollIntoView({ behavior: "smooth" });
    }
}