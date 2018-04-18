// document ready event
$(document).ready(function() {
	$('#query').on("keypress", function(event) {
		if (event.which == 13) {
			var offset = Math.round(Math.random() * 1000);
			var query = this.value;
			var key = "y7TVwl2eM0cqaJwThJ7JK1lSF1AgaptQ";
			var url = "https://api.giphy.com/v1/gifs/search?q="
						+ query
						+ "&api_key="
						+ key
						+ "&limit=1"
						+ "&offset="
						+ offset;
			
			var apple = "https://api.giphy.com/v1/gifs/search?q="
						+ "apple"
						+ "&api_key="
						+ key
						+ "&limit=5"
						+ "&offset="
						+ offset;
		
			
			$.getJSON(url, function(json) {
				$.getJSON(apple, function(appleJson) {
					
					document.getElementById('game').innerHTML = "";
					const img = json.data[0];
					if (img.images.downsized.url) {
						let imgElem = $('<img>')
							.attr('src', img.images.downsized.url);

						let imgContainer = $('<div>')
							.addClass('gif');

						imgContainer.append(imgElem);

						 $('#game').append(imgContainer);
					}
					
					for (let i = 0; i < appleJson.data.length; i++) {
						const img = appleJson.data[i];
						if (img.images.downsized.url) {
							let imgElem = $('<img>')
								.attr('src', img.images.downsized.url);

							let imgContainer = $('<div>')
								.addClass('gif');

							imgContainer.append(imgElem);

							 $('#game').append(imgContainer);
						}
					}
				});
			});
		}
	});
});
 