document.addEventListener('DOMContentLoaded', () => {
    // alert("test");

    // En API returnerer data (response) på en request.
    // Fetch syntax ser sådan ud. 
    // Her hentes data fra json-fil
    // Men data kunne også hentes fra en API fx https://api.exchangeratesapi.io/latest

    fetch("data/employees.json")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        // console.log(response);
        return response.json();
    })
    .then((employees)=>{

        let dataArray = employees;
        // console.log(dataArray);
        // gem templateblock
        let employeeTemplateBlock = document.querySelector(".employee");
        // gem det parentelement, som templates skal indsættes i
        let employeesSectionElement = document.querySelector(".employees");
        let employeesSectionHeading = document.querySelector(".employees__heading");

        // NB VIRKER KUN HVIS DER STADIG ER ET TOMT ARRAY
        if(dataArray.length == "" || null || undefined){
            employeesSectionHeading.innerHTML = "Medarbejderlisten kommer snart";
        }else{

            // loop data
                // gem ny - tom - instans af product:
                // klon template til ny instans
                // hent og skift childrens innerhtml til det relevante
                // insert i html-document

            dataArray.forEach(employee => {
                // console.log(employee.image);
                let newEmployee;
                // console.log(newEmployee);
                newEmployee = employeeTemplateBlock.cloneNode(true);
                // console.log(newEmployee);
                newEmployee.querySelector(".employee__image").src = employee.image;
                newEmployee.querySelector(".employee__name").innerHTML = employee.navn;
                newEmployee.querySelector(".employee__stilling").innerHTML = employee.stilling;
                newEmployee.querySelector(".employee__text").innerHTML = employee.text;
                employeesSectionElement.insertAdjacentElement('beforeend', newEmployee);
            });          
        }
    // else slutter

    });


})