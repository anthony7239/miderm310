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
						+ "&limit=8"
						+ "&offset="
						+ offset;
		

			$.getJSON(url, function(json) {
				$.getJSON(apple, function(appleJson) {

	//display one correct git
					document.getElementById('game').innerHTML = "";
					const img = json.data[0];
					if (img.images.downsized.url) {
						let imgElem = $('<img>')
							.attr('src', img.images.downsized.url);
												
						let imgContainer = $('<div>')
							.addClass('gif1');

						  imgContainer.append(imgElem);
						$('#game').append(imgContainer);
					}
					
	//display eight different gits				
					for (let i = 0; i < appleJson.data.length; i++) {
						const img = appleJson.data[i];
						if (img.images.downsized.url) {
							let imgElem = $('<img>')
								.attr('src', img.images.downsized.url);

							let imgContainer = $('<div>')
								.addClass('gif');

							 imgContainer.append(imgElem);							 $('#game').append(imgContainer);
						}
					}
					
    //  random the gif position 
					$(function () {
                          const parent = $("#game");
                          const divs = parent.children();
                          while (divs.length) { parent.append
									  (divs.splice(Math.floor(Math.random() * divs.length),1)[0]);
                         }
                    });
					
   //	Onclick the wrong gif				
					var match = [];
					$('.gif').click(function(){
						
						 console.log("no");
						 $('#game').hide();
					   	 $('#wrong').show();
						
					}); 
					
  //	 countdown timer
			var time = 5;
			$(function(){
								
				function countdown(){
					var interval = setTimeout(countdown, 1000);
					$(".timer").html(time);
					
  //    Onclick the right gif		
					$('.gif1').click(function(){
							if( match == 0 ){				
							console.log("yes");
								
							$('.gif').hide();
							$('img').animate({ 
								display:'block',
								marginLeft:'auto',
								marginRight:'auto',
								width: "600px",
                                height: "500px"								
							}); 
						 } clearTimeout(interval);
			    	}); 	
					
  //	time out, game over
					        if(time == 0){
					        	console.log("you are lose!")
					        	
					            $('#game').hide();
					        	$('#boom').show();
					        	clearInterval(interval);
					        }
					        time --;
				        }
				        countdown();
			
			        });
										
				});
			});
		}
	});
});
 