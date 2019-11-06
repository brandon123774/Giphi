$(document).ready(function () {

    //Array of the topic of cars
    var topics = JSON.parse(localStorage.getItem("giphi"))
    if (!topics){
     topics = ["Acura", "Honda", "Hyundai", "Toyota", "Mazda"];
     localStorage.setItem("giphi", JSON.stringify(topics))

    }
   

    //make a function that displays the car make buttons on the page
    function displayCars(car) {
       // var car = $(this).data("#search-text");
        console.log(car);
        //api key and giphy URL
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=h10JPz5uC89880QCKzXN1dGLBdYd0SuW&limit=10";
        console.log(queryURL);
        //use ajax method to 'get' data from giphy
        $.ajax({
            url: queryURL,
            method: "GET"
            //reponse data retrieved from giphi
        }).done(function (response) {
            var results = response.data;
            console.log(results);
            //for loop to get results from search
            for (var i = 0; i < results.length; i++) {

                //new div variable to hold the new images
                var carDiv = $("<div>");
                //need a rating 
                var rating = results[i].rating;
                //animation start and stop method and sizing
                var defaultAnimatedSource = results[i].images.fixed_height.url;
                var staticSource = results[i].images.fixed_height_still.url;
                var carImage = $("<img>");
                //display rating text
                var pOne = $("<p>").text("Rating: " + rating);
                carImage.attr("src", staticSource);
                carImage.addClass("carGiphy");
                //still image
                carImage.attr("data-state", "still");
                carImage.attr("data-still", staticSource);
                //animate gif
                carImage.attr("data-animate", defaultAnimatedSource);
                //append to the DOM
                carDiv.append(pOne);
                carDiv.append(carImage);
                $("#gifs-here").prepend(carDiv);

                // switch 2 elements 2 values
                // src=still alt-src=othersrc
                //

            }
        });
    }
    // create a search function 


    //create a function for car buttons to appear on page
    var carButtons = function () {
        //create a loop for the car makes
        $("#car-buttons").empty();
        
        for (var i = 0; i < topics.length; i++) {
            //create a variable and set it equal to a button div
            var topicsBtn = $("<button>");
            //set attributes so that the class of buttons links
            // topicsBtn.attr("class", "letter-button letter letter-button-color");
            topicsBtn.attr("car-btn", topics[i]);
            topicsBtn.addClass("search-btn")
            topicsBtn.text(topics[i]);
            //append the buttons to the DOM
            $("#car-buttons").append(topicsBtn);
        }

        // jquery on click = vainilla javascript addeventlistener

        $(".search-btn").on("click", function (event) {
            event.preventDefault();
            console.log(this)
            var newCars = $(this).attr("car-btn")
            console.log(newCars)
            displayCars(newCars)
          
        });

    }
    //call car buttons
    carButtons();

    //run the search 
    $(document).on("click", "#search-btn", function(){
        event.preventDefault();
        console.log(this)
        var car = $("#search-text").val();
        console.log("from search: ", car)
        if(topics.indexOf(car)=== -1){
        topics.push(car);
        localStorage.setItem("giphi", JSON.stringify(topics))
        }
        console.log(topics);  
        carButtons();
        displayCars(car)
    })
    //run the gifs to pause and play
    $(document).on("click", ".carGiphy", playGifs);


    //enable gits to play and stop
    function playGifs() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    };
});


// local storage and every time you recover the array from the local storage and if empty you use the one by default but every time you change the ypou update the local storage


