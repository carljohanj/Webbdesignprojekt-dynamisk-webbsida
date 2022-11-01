

export function changeTheNavigation()
{

    
    let oldNavigation = document.querySelector('nav');
    let dropdownButton = document.querySelector('.dropdown-button');
    
    if (window.innerWidth > 600)
    {
        dropdownButton.style.display = "none";
        oldNavigation.style.display = "block";
    }

    if (window.innerWidth < 600)
    {
        //Tar bort innehållet i navigeringen och får dropdown-menyn att synas i stället:        
        dropdownButton.style.display = "block";
        oldNavigation.style.display = "none";
    }

}