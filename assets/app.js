$(document).ready(function () {

    //Array of the topic of cars
    var topics = ["Acura", "BMW", "Cheverolet", "Dodge", "Ford", "GMC", "Honda", "Jeep", "Hyundai", "Toyota", "Mercedes-Benz", "Mazda"];

    function displayCars() {
        var car = $(this).data("search");
        console.log(car);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=10JPz5uC89880QCKzXN1dGLBdYd0SuW&limit=10";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            var results = response.data;
            console.log(results);
            for (var i = 0; i < results.length; i++) {

                var carDiv = $("<div>");

                var rating = results[i].rating;
                var defaultAnimatedSource = results[i].images.fixed_height.url;
                var staticSource = results[i].images.fixed_height_still.url;
                var carImage = $("<img>");
                var p = $("<p>").text("Rating: " + rating);

                carImage.attr("src", staticSource);
                carImage.addClass("carGiphy");
                carImage.attr("data-state", "still");
                carImage.attr("data-still", staticSource);
                carImage.attr("data-animate", defaultAnimatedSource);
                varDiv.append(p);
                carDiv.append(carImage);
                $("#gifs-here").prepend(carDiv);

            }
        });
    }

    $("#search-btn").on("click", function (event) {
        event.preventDefault();
        var newCars = $("#search-text").val().trim();
        topics.push(newCars);
        console.log(topics);
        $("#search-text").val('');
    
    });
    //run the search 
    $(document).on("click", "#search-btn", displayCars);
    //run the gifs to pause and play
    $(document).on("click", ".carGiphy", playGifs);

})
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
}



//create a function for car buttons to appear on page
// var carButtons = function () {
//     //create a loop for the car makes
//     $("#car-buttons").empty();
//     for (var i = 0; i < topics.length; i++) {
//         //create a variable and set it equal to a button div
//         var topicsBtn = $("<button>");
//         //set attributes so that the class of buttons links
//         // topicsBtn.attr("class", "letter-button letter letter-button-color");
//         topicsBtn.attr("search-bar", topics[i]);
//         topicsBtn.text(topics[i]);
//         //append the buttons to the DOM
//         $("#car-buttons").append(topicsBtn);

//     }};
//     //call car buttons
// carButtons();

//get the gifs
// $("#search-btn").on("click", function () {
//     //create variables for the program that link to Giphy website database
//     var car = $(this).attr("buttons");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=10JPz5uC89880QCKzXN1dGLBdYd0SuW&limit=10";
//     var apiKey = "78fec19e2d8242fbae167723b8736325";
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + apiKey + "&limit=10";
//     //use ajax method to 'get' the request from the Giphy URL
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//         //data that is retrieved from Giphy 
//         .then(function (response) {
//             console.log(response);
//             //save this data into an array
//             var results = response.data;
//             //create a loop to get more results pertaining to search term
//             for (var i = 0; i < results.length; i++) {
//                 //add in ratings to this
//                 if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
//                     //create a place to hold the gifs that come up
//                     var gifHolder = $("<div>");
//                     var rating = results[i].rating;
//                     //store the new ratings above the gifs
//                     var pOne = $("<p>").text("Rating: " + rating);
//                     //need an image tag 
//                     var imageOne = $("<img>");
//                     imageOne.attr("src", results[i].images.fixed_height.url);
//                     //need to stick these images to the page 
//                     gifHolder.append(pOne);
//                     gifHolder.append(imageOne);
//                     // put these into the gif location on the page
//                     $("#gifs-here").prepend(gifHolder);
//                 }
//             }
//         })

