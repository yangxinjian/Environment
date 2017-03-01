import '../style/main.scss';
import $ from 'jquery';
import json from '../data.json';

$(function() {

	//begin li toggle
	
	$('.grade').click(function(){
		var state = $('.grade').children('ul').css("display");
		$(this).addClass("color").siblings().removeClass("color");
		//$('.list-classes').css('display','none');
		$(this).find('.dis').slideToggle('middle');
		$(this).siblings().find('.dis').slideUp('middle');
		
		$('.list-grade li img').css("transform","rotate(0deg)");
		$(this).children('img').css("transform","rotate(90deg)");

	});
	$('.grade').children('ul').click(function(e){
	    e.stopPropagation();
	});
	//end li toggle

	//begin href
	var url = 'src/html/show.html'
	$('.list-classes li').click(function(){
		location.href = url;
	});
	//end href



	//begin judge score
	//end judge score

})
