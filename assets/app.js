//create variables for the program
var apiKey = 'h10JPz5uC89880QCKzXN1dGLBdYd0SuW';
var queryURL = "https://api.giphy.com/v1/gifs/search?q=kittens&limit=10&api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);

  var gifs = response.data
  for (var i =0; i < gifs.length; i++){
    console.log(gifs[i].images.original.url);
  }
});
