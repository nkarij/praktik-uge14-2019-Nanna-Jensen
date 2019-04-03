document.addEventListener('DOMContentLoaded', () => {
    // alert("blabla");
    // gem index
    // gem buttons prev + next
    // gem featured image element.src
    // gem imagepath-array
    // onclick: 
        // index++ || index--
        
        // if index >= data-array.lengt 
            // sæt index = 0;
        // if index =< -1
            // index = data-array.lenght - 1;
            // sæt currentimage.src = data-imagepath[index].dataset.imagepath
        // autofunction
        // set interval + function:
            // loop data-array
                // sæt currentimage.src = data-imagepath[index]
                // sæt slidenumber = ++index + "/" + imagearray.length
                // sæt slidecaption = data-imagecap;

    let index = 0;
    let buttonElementPreviousSlide = document.querySelector(".previous-slide");
    let buttonElementNextSlide = document.querySelector(".next-slide");
    let featuredImageElement = document.querySelector("#slide__image");
    let buttonAutoSlideElement = document.querySelector(".auto-slidehow");
    let feautredCaptionElement = document.querySelector(".slide__caption");
    let sourceDataArray = document.querySelectorAll("#data-source");
    let imagePathArray = [];
    let imageCaptionArray = [];
    let startTimer;

    function runSlider(){

        featuredImageElement.src = sourceDataArray[index].dataset.imagepath;

        sourceDataArray.forEach(element => {
            imagePathArray.push(element.dataset.imagepath);
            imageCaptionArray.push(element.dataset.imagecap);        
        });

        // console.log(imagePathArray);
        // console.log(imageCaptionArray);

        buttonElementNextSlide.addEventListener('click', function(){
            index++;
            // console.log(index);
            if(index >= sourceDataArray.length) {
                index = 0;
                // console.log(index);
            }
            // console.log(index + "next er trykket");
            displayFeaturedSlide(index);        
        });

        buttonElementPreviousSlide.addEventListener('click', function(){
            if(index <= 0) {
                index = sourceDataArray.length;
            }
            index--;
            // console.log(index + "prev er trykket");
            displayFeaturedSlide(index);
        });

        // AUTO FUNCTION
        buttonAutoSlideElement.addEventListener('click', function(){
            // sæt start billede
            displayFeaturedSlide(index);
            
            if(buttonAutoSlideElement.classList.contains("auto-slidehow--active")){
                clearInterval(startTimer);
                buttonAutoSlideElement.classList.remove("auto-slidehow--active");
            } else{
                buttonAutoSlideElement.classList.add("auto-slidehow--active");
                startTimer = setInterval(AutoSlider, 1000);
            }

            function AutoSlider(){
                index++;
                if(index >= sourceDataArray.length){
                    index = 0;

                } else if(index <= -1 ){
                    index = sourceDataArray.length - 1;
                }
                displayFeaturedSlide(index);
            };

        });


        
        function displayFeaturedSlide(index){
            let imageSource = imagePathArray[index];
            let captionSource = imageCaptionArray[index];
            // console.log(imageSource);
            featuredImageElement.src = imageSource;
            feautredCaptionElement.innerHTML = captionSource;
        };

    };

    runSlider();    

});