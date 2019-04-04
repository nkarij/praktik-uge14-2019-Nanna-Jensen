document.addEventListener('DOMContentLoaded', () => {
    // alert("blabla");
    // let guestbookForm = document.querySelector("#guestbook-form");
    let guestbookForm = document.forms.guestbookform;
    // console.log(guestbookForm);
    let guestbookSubmitForm = guestbookForm.elements.guestbookform__submitbutton;
    
    // console.log(nameInputValue);
    // let nameInputValue = document.querySelector("#guestbook-form__name").value;
    // let emailInputValue = document.querySelector("#guestbook-form__email").value;
    // let messageInputValue = document.querySelector("#guestbook-form__message").value;

    guestbookSubmitForm.addEventListener('click', function(event){
        event.preventDefault();

        let guestInputArray = [];
        console.log(guestInputArray);

        let nameInput = guestbookForm.elements.guestbookform__name;
        let emailInput = guestbookForm.elements.guestbookform__email;
        let messageInput = guestbookForm.guestbookform__message;
        // console.log(messageInput.value);
        validate();

        function validate(){       
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
        // saveToLocalStorage(guestInputArray);

        // function saveToLocalStorage(){
        //     localStorage.setItem('guestinput', JSON.stringify(guestInputArray));
        // }

        let saveToLocalStorage = localStorage.setItem('guestinput', JSON.stringify(guestInputArray));
        
        // NB dette er et array:
        let retrieveGuestInputLocalStorage = JSON.parse(localStorage.getItem('guestinput'));
        // console.log(JSON.parse(localStorage.getItem('guestinput')));
        // console.log(retrieveGuestInputLocalStorage);
        // console.log(localStorage);               

        // GUESTBOOK TEMPLATE CLONE
        let displayGuestReviews = document.querySelector(".guestbook-display-container");
        let guestInfoArray = retrieveGuestInputLocalStorage;
        let guestReviewTemplate = document.querySelector(".guestbook-display__guest");

        let clonedElement;
        clonedElement = guestReviewTemplate.cloneNode(true);

        guestInfoArray.forEach(infoitem => {
            // console.log(typeof(infoitem));
            // console.log()
            // console.log(clonedElement);

            if(infoitem == nameInput.value){
                let displayNameElement = clonedElement.querySelector(".guestbook-display__name");
                displayNameElement.innerHTML = infoitem;
                console.log(displayNameElement.innerHTML);
            } 
            if(infoitem == messageInput.value){
                // clonedElement = guestReviewTemplate.cloneNode(true);
                let displayMessageElement = clonedElement.querySelector(".guestbook-display__message");
                displayMessageElement.innerHTML = infoitem;
                console.log(displayMessageElement.innerHTML);
            }
           
        });
        console.log(clonedElement);
        displayGuestReviews.insertAdjacentElement('afterbegin', clonedElement);
        
        // REGEX EMAIL
  
        function regExEmail(email){
            var regEx = /(.+)@(.+){2,}\.(.+){2,}$/; 
            return regEx.test(String(email).toLowerCase()); 
        };
    });

});



