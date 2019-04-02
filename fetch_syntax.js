document.addEventListener('DOMContentLoaded', () => {
    // alert("test");

    // En API returnerer data (response) på en request.
    // Fetch syntax ser sådan ud. 
    // Her hentes data fra json-fil
    // Men data kunne også hentes fra en API fx https://api.exchangeratesapi.io/latest

    fetch("data/person-Nanna.json")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        // console.log(response);
        return response.json();
    })
    .then((data)=>{
        console.log(data.something);
    });

})