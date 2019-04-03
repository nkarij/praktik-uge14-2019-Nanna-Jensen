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
                // sæt slidenumber = (index + 1) + "/" + imagearray.length
                // sæt slidecaption = data-imagecap;
                // save to local storage

    let index = 0;
    let buttonElementPreviousSlide = document.querySelector(".previous-slide");
    let buttonElementNextSlide = document.querySelector(".next-slide");
    let featuredImageElement = document.querySelector("#slide__image");
    let buttonAutoSlideElement = document.querySelector(".auto-slidehow");
    let feautredCaptionElement = document.querySelector(".slide__caption");
    let slideOrderElement = document.querySelector(".slide__number")
    let sourceDataArray = document.querySelectorAll("#data-source");
    let imagePathArray = [];
    let imageCaptionArray = [];
    let startTimer;
    // console.log(sourceDataArray.length);

    if(sourceDataArray.length == 0 || null || undefined){
         document.querySelector(".slide-section").classList.add("hide-element");
         let sliderHeading = document.querySelector(".slider-heading");
         sliderHeading.innerHTML = "Der er desværre ingen billeder";
         sliderHeading.classList.add("slider-heading--show");

    }else{
        function runSlider(){
            // henter indholdet af localStorage
            let storedDataLocalStorage = localStorage.getItem("index");
            console.log(storedDataLocalStorage);

            // Tjekker om der er gemt i localStorage
            if (storedDataLocalStorage !== null || storedDataLocalStorage !== "null" || storedDataLocalStorage !== undefined) {
                index = parseInt(storedDataLocalStorage);
                console.log(index);
                setImageOnUpdate(index);
                // displayFeaturedSlide(index);
            }else{
                index = 0;
                setImageOnUpdate(index);
                // displayFeaturedSlide(index);
            }

            function setImageOnUpdate(){
                featuredImageElement.src = sourceDataArray[index].dataset.imagepath;
                feautredCaptionElement.innerHTML = sourceDataArray[index].dataset.imagecap;
                let slideOrder = index + 1;
                // NB: et problem, hvis der er elementer uden date-imagepath
                slideOrderElement.innerHTML = slideOrder + "/" + sourceDataArray.length;
            }

            sourceDataArray.forEach(element => {
                imagePathArray.push(element.dataset.imagepath);
                imageCaptionArray.push(element.dataset.imagecap);        
            });

            // console.log(imagePathArray);
            // console.log(imageCaptionArray);

            buttonElementNextSlide.addEventListener('click', function(){
                index++;
                if(index >= imagePathArray.length) {
                    index = 0;
                }
                setImageOnUpdate(index);
                // displayFeaturedSlide(index);
                localStorage.setItem("index", index);
                // console.log(localStorage.index + "localStorage");
            });

            buttonElementPreviousSlide.addEventListener('click', function(){
                if(index <= 0) {
                    index = imagePathArray.length;
                }
                index--;
                // console.log(index + "prev er trykket");
                setImageOnUpdate(index);
                // displayFeaturedSlide(index);
                localStorage.setItem("index", index);
                console.log(localStorage.index);
            });

    // ---------- AUTO FUNCTION---------------------------------------
            buttonAutoSlideElement.addEventListener('click', function(){
                // sæt start billede
                setImageOnUpdate(index);
                // displayFeaturedSlide(index);
                
                if(buttonAutoSlideElement.classList.contains("auto-slidehow--active")){
                    clearInterval(startTimer);
                    buttonAutoSlideElement.classList.remove("auto-slidehow--active");
                } else{
                    buttonAutoSlideElement.classList.add("auto-slidehow--active");
                    startTimer = setInterval(AutoSlider, 1000);
                }

                function AutoSlider(){
                    index++;
                    if(index >= imagePathArray.length){
                        index = 0;

                    } else if(index <= -1 ){
                        index = imagePathArray.length - 1;
                    }
                    setImageOnUpdate(index);
                    // displayFeaturedSlide(index);
                    localStorage.setItem("index", index);
                    // console.log(localStorage);
                };
                
            });

            // function displayFeaturedSlide(index){
            //     let imageSource = imagePathArray[index];
            //     let captionSource = imageCaptionArray[index];
            //     // console.log(imageSource);
            //     featuredImageElement.src = imageSource;
            //     feautredCaptionElement.innerHTML = captionSource;
            //     let slideOrder = index +1;
            //     slideOrderElement.innerHTML = slideOrder + "/" + imagePathArray.length;
            //     // console.log(slideOrderElement.innerHTML);
            // };

        };

        runSlider();    
    };

});