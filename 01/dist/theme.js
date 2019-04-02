document.addEventListener('DOMContentLoaded', () => {
    // alert("blabla");
  
    let buttonToggleTheme = document.querySelector("#toggle-theme__button");
    // console.log(buttonToggleTheme);
    let cssThemeElement = document.querySelector("#css-theme");
    // console.log(cssThemeElement.href);

    // tjekker om der er gemt et tema i localstorage, går videre hvis der ikke er
    if (localStorage.customtheme !== null || undefined) {
        // hvis der er gemt et tema i localstorage, ændres tema via href
        cssThemeElement.href = localStorage.customtheme;
        // cssThemeElement.dataset.state = "on";
        // tjekker at temaet er i brug, sætter tema-state til off 
        if(localStorage.customtheme == "css/theme.css"){
            cssThemeElement.dataset.state = "on";
        }
    } else {
        cssThemeElement.href = "";
    }
   
    buttonToggleTheme.addEventListener('click', (event) => {
        event.stopPropagation();

        // her bruges htmls dataset i stedet, til at tjekke om tema er on/off
        if(cssThemeElement.dataset.state == "on"){
            cssThemeElement.dataset.state = "off";
            cssThemeElement.href = "";
            // console.log(cssThemeElement.dataset.state);
            localStorage.setItem('customtheme', cssThemeElement.href);
        }else  
        // if(cssThemeElement.dataset.state == "off") 
        {
            cssThemeElement.dataset.state = "on";
            cssThemeElement.href = "css/theme.css";
            // console.log(cssThemeElement.dataset.state);
            localStorage.setItem('customtheme', cssThemeElement.href);
        }
        // let currentTheme = localStorage.customtheme;
        // console.log(currentTheme);

    });

});