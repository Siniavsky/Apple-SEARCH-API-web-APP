
$(document).ready(function(){
	$('input').click(function(){
		$('input').removeAttr('placeholder');
	});

var url='https://itunes.apple.com/search?term=';

$('button').click(function(){
	$('.wrapper').empty();
 	var query = $("#query").val();

  	$.getJSON(url+query,function(json){
 		var res_sec = [];

  		$.each(json.results,function(i,app){
	   		var time = app.trackTimeMillis;
	   		var seconds = time/1000;
	   		var timeData = (Math.floor (seconds/60) +':'+ Math.round(seconds % 60));
	  		res_sec[i] = ('<div class="top_div" id="main'+i+'"><div class="row hight-container"><div class="col-md-2"><img class="preview" src="'+app.artworkUrl100+'"></div><div class="col-md-2 wrap_element"><p class="adaptive">Artist:&nbsp</p><p>'+app.artistName+'</p></div><div class="col-md-2 wrap_element"><p class="adaptive">Track:&nbsp</p><p>'+app.trackName+'</p></div><div class="col-md-2 wrap_element"><p class="adaptive">Collection:&nbsp</p><p>'+app.collectionCensoredName+'</p></div><div class="col-md-2 wrap_element"><p class="adaptive">Genre:&nbsp</p><p>'+app.primaryGenreName+'</p></div><div class="col-md-2"><i class="plus"></i></div></div></div><div class="bottom_div "id="maint'+i+'"><div class="row bottom-container"><div class="col-md-2"></div><div class="col-md-10"><h2>'+app.artistName+'-'+app.trackName+'<img src="icons/music.png"></h2></div><div class="col-md-2"></div><div class="col-md-4"><span class="font-weight-bold">Collection: </span>'+app.collectionCensoredName+'<br><span class="font-weight-bold">Track Count: </span>'+app.trackCount+'<br><span class="font-weight-bold">Price: </span>'+app.collectionPrice+' '+app.currency+'</div><div class="col-md-6"><span class="font-weight-bold">Track duration: </span>'+timeData+' min<br><span class="font-weight-bold">Track Price: </span>'+app.trackPrice+' '+app.currency+'</div></div></div>');  
			$('#results .wrapper').append(res_sec[i]);

			if (i%2===0) {
				$('#main'+i).css('background', '#ccdff0');
				$('#maint'+i).css('background', '#ccdff0');
			};
		});

	$(document).ready(function() {
		$('.wrapper>.bottom_div').hide();

		$('.wrapper>.top_div').click(function() {
			var topDiv = $(this).next('.bottom_div');
			var wrapDown = $(this).closest('.wrapper'); 
    
			if (topDiv.is(':visible')) {
				$('.wrapper>.top_div i').removeClass('plus').addClass('plus'); 
				topDiv.slideUp();
			}
			else {
				wrapDown.find('.bottom_div').slideUp();
				topDiv.slideDown();
				$('.wrapper>.top_div i').removeClass('minus').addClass('plus');
				$(this).find('i').removeClass('plus').addClass('minus'); 
			};

		});
	});

		changeWidth();

	});
});

function changeWidth () {
	var width = $('body').width();

	if (width < 768){
		$('#Info').hide();
		$('.adaptive').show();
		$('.wrap_element').css('display','inline-flex');
	}
	else{
		$('#Info').show();
		$('.adaptive').hide();
	};
};

	$(window).resize(function() {
		changeWidth();
	});

});
