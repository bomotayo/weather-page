$(document).ready(function(){
  $('#city-button').click(function(){

    let city = $('#city-input').val();

    if(city != ''){

      $.ajax({

          url:"http://api.openweathermap.org/data/2.5/weather?q="+ city+ "&units=metric"+ "&APPID=a901400632ba1ebe09f0417879d7fea4",
          type: "GET",
          dataType: "jsonp",
          success: function(data){
            var widget = show(data);
            $("#show").html(widget);
            $('#city-input').val('');
          }

      });

    }else{
      $("#error").html('Field cannot be empty');
    }
  });

});

function show(data){
  return "<h3 style='font-size:40px; font-weight: bold'><strong>Current Weather for </strong>"+ data.name + ", "+data.sys.country+ "</h3>" +
         "<h3><strong>Weather: </strong>"+ data.weather[0].main + "</h3>" + 
         "<h3><strong>Weather Description: <img src='http://openweathermap.org/img/wn/"+data.weather[0].icon+".png'</strong>"+ data.weather[0].description +"</h3>" +
         "<h3><strong>Temperature: </strong>"+ data.main.temp +" &deg;C<h3>" +
         "<h3><strong>Pressure: </strong>"+ data.main.pressure +" hPa<h3>" +
         "<h3><strong>Humidity: </strong>"+ data.main.humidity +" %<h3>" +
         "<h3><strong>Min Temperature: </strong>"+ data.main.temp_min +" &deg;C<h3>" +
         "<h3><strong>Max Temperature: </strong>"+ data.main.temp_max +" &deg;C<h3>" +
         "<h3><strong>Wind Speed: </strong>"+ data.wind.speed +" m/s<h3>" +
         "<h3><strong>Wind Direction: </strong>"+ data.wind.deg +" &deg;<h3>" 
         ;
}