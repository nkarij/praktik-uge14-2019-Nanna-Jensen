document.addEventListener('DOMContentLoaded', () => {
    // alert("blabla");
    let guestbookForm = document.querySelector("#guestbook-form");
    let nameInputValue = document.querySelector("#guestbook-form__name").value;
    let emailInputValue = document.querySelector("#guestbook-form__email").value;
    let messageInputValue = document.querySelector("#guestbook-form__message").value;

    guestbookForm.addEventListener('submit', function(event){
        event.preventDefault();

        // if(nameInputElement != "" || !isNaN(nameInputElement) ||)
        
        // if(event.target[0].value == "" || !isNaN(event.target[0].value) || event.target[0].value.length < 2 || event.target[0].value.length > 20){
        //     alert("this name is invalid. please try again");
        //     event.target[0].style.backgroundColor = "red";            
        //     return false;
        // }else{
        //     event.target[0].style.backgroundColor = "transparent";  
        // }
        // if(regExEmail(event.target[1].value)){
        //     console.log("super duper");
        // }else{
        //     alert("this email is invalid. please try again");
        //     return false;
        // }
        // if(event.target[2].value == "" || !isNaN(event.target[2].value) || event.target[2].value.length > 130) {
        //     alert("Max 130 characters allowed.");
        //     return false;
        // } else {
        //     alert("Tak for din besked");
        //     // her kan indsættes diverse ting som ADY gerne vil ha :-).
        //     let guestbookInput = guestbookForm.submit();
        //     localStorage.setItem('review', guestbookInput);
        //     console.log(localStorage);
        // }

        function regExEmail(email){
            var regEx = /(.+)@(.+){2,}\.(.+){2,}$/; 
            return regEx.test(String(email).toLowerCase()); 
        };
    });

});



