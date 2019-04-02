document.addEventListener('DOMContentLoaded', () => {
    // alert("test");

    // Partials er små blokke af HTML, som genbruges på andre undersider
    // partials gør det nemt at rette i HTMLen, fordi der opdateres globalt.
   

    fetch("partials/navigation.html")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        // console.log(response);
        return response.text();
    })
    .then((navigation)=>{
        // console.log(navigation);
        let importedNavigationPartial = navigation;
        let navElement = document.querySelector("#main-navigation");
        navElement.insertAdjacentHTML('beforeend', importedNavigationPartial);
    });

    fetch("partials/footer.html")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        // console.log(response);
        return response.text();
    })
    .then((footer)=>{
        console.log(footer);
        let importedFooterPartial = footer;
        let footerElement = document.querySelector("#footer");
        footerElement.insertAdjacentHTML('beforeend', importedFooterPartial);
    });
})