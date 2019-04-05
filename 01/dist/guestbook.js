document.addEventListener('DOMContentLoaded', () => {
    // alert("blabla");
    
    // let guestbookForm = document.querySelector("#guestbook-form");
    let guestbookForm = document.forms.guestbookform;
    // console.log(guestbookForm);
    let guestbookSubmitForm = guestbookForm.elements.guestbookform__submitbutton;
    let guestReviewTemplate = document.querySelector(".guestbook-display__guest");
    let displayGuestReviews = document.querySelector(".guestbook-display-container");

    // se allernederst i koden, til disse arrays henter jeg alle gæste-indlæg
    let index = 0;
    let guestNameArray = [];
    let guestMessageArray = [];
    // console.log(localStorage);
    // console.log(JSON.parse(localStorage.getItem('guestbooknames')));

    // tjekker først at local storage ikke tom, når siden loader.
    if(JSON.parse(localStorage.getItem('guestbooknames'))){
        // kalder functionen write to guestbook
        console.log(JSON.parse(localStorage.getItem('guestbooknames')));
        writeGuestBookToDOM();

    } else {
        // hvis localstorage er tom, skriv til console:
        console.log("localstorage er tom");
        // her skal jeg skrive til DOMen at gæstebogen er tom.
        document.querySelector(".guestbook__heading").innerHTML = "Gæstenbogen er desværre tom."
    }

    // kører KUN når siden opdateres OG der er indhold i LocalStorage
    function writeGuestBookToDOM(){
        // henter de 2 arrays m hhv navne og beskeder
        let allStoredGuestReviewNames = JSON.parse(localStorage.getItem('guestbooknames'));
        console.log(allStoredGuestReviewNames);
        let allStoredGuestReviewMessages = JSON.parse(localStorage.getItem('guestbookmessages'));
        // opretter et nyt element til at oversrkvie med template
        let cloneToDomElement;
        // function cloneFullStorageToDOM(){
            // looper alle navenene i navnearray
        for (index = 0; index < allStoredGuestReviewNames.length; index++) {
            const guestNameInstance = allStoredGuestReviewNames[index];
            const guestMessageInstance = allStoredGuestReviewMessages[index];
            cloneToDomElement = guestReviewTemplate.cloneNode(true);
            let displayName = cloneToDomElement.querySelector(".guestbook-display__name");
            displayName.innerHTML = guestNameInstance;
            let displayMessage = cloneToDomElement.querySelector(".guestbook-display__message");
            displayMessage.innerHTML = guestMessageInstance;
            displayGuestReviews.insertAdjacentElement('afterbegin', cloneToDomElement);
        }
    }
    
    // click - eventet - tilføjer nye indlæg i gæstebogen.
    guestbookSubmitForm.addEventListener('click', function(event){
        event.preventDefault();

        guestbookForm.classList.add("hide-element");
        document.querySelector(".guestbook__heading").innerHTML = "tak for dit indlæg";

// -------- VALIDERER FORM ELEMENTERNES INPUT VALUE --------
// ----------- OG GEMMER INPUT TIL LOCAL STORAGE -----------
// NB. er sprunget let henover selve valideringen, da det ikke er så svært.
        let guestInputArray = [];
        // console.log(guestInputArray);

        let nameInput = guestbookForm.elements.guestbookform__name;
        let emailInput = guestbookForm.elements.guestbookform__email;
        let messageInput = guestbookForm.guestbookform__message;
        // console.log(messageInput.value);
        validate();

        // funktionen validerer input fra form
        function validate(){
            // i if() skal jeg tilføje validerings-betingelser
            if(nameInput.value !== ""){
                let test = nameInput.value;
                // console.log("indhold");
                guestInputArray.push(test);
                // console.log(guestInfoArray);
            }else{
                nameInput.classList.add("guestform-input--error");
            }

            if(emailInput.value !== ""){
                let test = emailInput.value;
                // console.log("indhold");
                guestInputArray.push(test);
            }else{
                // emailInput.classList.add("guestform-input--error");
            }

            if(messageInput.value !== ""){
                let test = messageInput.value;
                // console.log("indhold");
                guestInputArray.push(test);
                // console.log(guestInfoArray);
            }else{
                messageInput.classList.add("guestform-input--error");
            }
            return guestInputArray;
        }

        // console.log(guestInfoArray);

        let saveToLocalStorage = localStorage.setItem('guestinput', JSON.stringify(guestInputArray));
        
        // NB dette er et array:
        let retrieveGuestInputLocalStorage = JSON.parse(localStorage.getItem('guestinput'));
        // console.log(JSON.parse(localStorage.getItem('guestinput')));
        // console.log(retrieveGuestInputLocalStorage);
        // console.log(localStorage);               

        
// -------- HENTER 1 GÆSTEINDLÆG FRA LS OG SKRIVER DET TIL DOMen --------
        // henter gæsteindlæg fra localstorage og lægger det i array
        let guestInfoArray = retrieveGuestInputLocalStorage;
        // opretter nyt element til cloning
        let clonedElement;
        clonedElement = guestReviewTemplate.cloneNode(true);

        //  kører function
        cloneGuestInfoAndWriteToDOM();

        function cloneGuestInfoAndWriteToDOM(){
            // for hvert item i array, tjekker jeg om input stemmer med
            // det der er gemt i localstorage
            guestInfoArray.forEach(infoitem => {
                // console.log(typeof(infoitem));
                // console.log()
                // console.log(clonedElement);
                // jeg har allerede gemt variabel nameInput i valideringen
                if(infoitem == nameInput.value){
                    let displayNameElement = clonedElement.querySelector(".guestbook-display__name");
                    displayNameElement.innerHTML = infoitem;
                    // console.log(displayNameElement.innerHTML);
                }
                // jeg har allerede gemt variabel nameInput i valideringen
                if(infoitem == messageInput.value){
                    // clonedElement = guestReviewTemplate.cloneNode(true);
                    let displayMessageElement = clonedElement.querySelector(".guestbook-display__message");
                    displayMessageElement.innerHTML = infoitem;
                    // console.log(displayMessageElement.innerHTML);
                }
                // return displayGuestReviews;
            });
            // console.log(clonedElement);
            displayGuestReviews.insertAdjacentElement('afterbegin', clonedElement);
            // console.log(displayGuestReviews);
            return displayGuestReviews;
        }
        console.log(displayGuestReviews);

        //  gem hele gæstebogen
        let guestBookGuestArray = document.querySelectorAll(".guestbook-display-container .guestbook-display__guest");


        guestBookGuestArray.forEach(element => {
            let displayNameElementInnerHTML = element.querySelector(".guestbook-display__name").innerHTML;
            let displayMessageElementInnerHTML = clonedElement.querySelector(".guestbook-display__message").innerHTML;
            guestNameArray.push(displayNameElementInnerHTML);
            guestMessageArray.push(displayMessageElementInnerHTML);            
        });      

        // console.log(guestNameArray);
        // console.log(guestMessageArray);
        localStorage.setItem('guestbooknames', JSON.stringify(guestNameArray));
        localStorage.setItem('guestbookmessages', JSON.stringify(guestMessageArray));
        
        // guestbook.eventlistener slutter
    });  
        
    // REGEX EMAIL

    function regExEmail(email){
        var regEx = /(.+)@(.+){2,}\.(.+){2,}$/; 
        return regEx.test(String(email).toLowerCase()); 
    };

    
// domcontentloaded slutter
});



