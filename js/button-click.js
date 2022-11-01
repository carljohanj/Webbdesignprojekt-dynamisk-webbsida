
export function buttonClick()
{
    //Scrollfunktion för knappar på sidor
    const BUTTON = document.querySelector('.button');
    const NEXTELEMENT = document.querySelector('.part2');

    BUTTON.addEventListener('click', scrolltoNextElement);

    function scrolltoNextElement(event)
    {
    NEXTELEMENT.scrollIntoView({ behavior: "smooth" });
    }
}