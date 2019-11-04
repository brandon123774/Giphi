# Giphy

## Table of Contents
* Introduction
* Interesting bits of code
* Technologies Used
* How to use


## Introduction
The program is made to allow users to search for gifs that can start and stop (animate and then still) by clicking on them. The buttons that are appended to the site are quick links to those terms and should link to the corresponding make of car.

## Bits of code 
//function to run the giphy api search
function displayCars() {
        var car = $(this).data("#search-text");
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

            }
        });
    }

   //run the search 
    $(document).on("click", "#search-btn", displayCars);
    //run the gifs to pause and play
    $(document).on("click", ".carGiphy", playGifs);
	
## Technologies
Project is created using the following:
* HTML
* CSS
* Javascript
* JQuery
* JSON
* Ajax

# How to use
 Either search for a car maker or click on a preset link and gifs should populate on the webpage.


	