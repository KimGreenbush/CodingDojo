$(document).ready(function () {
	$("form").submit(function () {
		var cityLocation = $("input").val();
		
					$.get(
						"https://api.openweathermap.org/data/2.5/weather?q=" + cityLocation + "&units=imperial&appid=",
						function (weather) {
							console.log(weather);
							$("h2").html(weather.name);
							$("#main").html(
								"<ul><li>Feels like: " + weather.main.feels_like + "</li><li> Humidity: " + weather.main.humidity + "</li><li> Pressure: " + weather.main.pressure + "</li><li> Temp: " + weather.main.temp + "</li><li> Temp Max: " + weather.main.temp_max + "</li><li> Temp Min: " + weather.main.temp_min + "</li></ul>");
							$("#coord").html("lat:" +weather.coord.lat+"      lon:"+weather.coord.lon);
						},
						"json"
					);
				
				return false;
	
		
		});
		


});







// API key : 

//"https://api.openweathermap.org/data/2.5/weather?zip=&"+cityLocation+"appid=" <--zip code

//"https://api.openweathermap.org/data/2.5/weather?q="+cityLocation+"&appid=" <--city,state
