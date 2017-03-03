import '../style/main.scss';
import $ from 'jquery';
import json from '../data.json';
var echarts = require('echarts');

$(function() {

	//begin index.html li toggle
	$('.grade').click(function(){
		
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

	//begin show.html href
	var url = 'src/html/show.html'
	$('.list-classes li').click(function(){
		location.href = url;
	});
	//end href

	//begin show.html check-project
	$('.classify > li').click(function(){
	
		//$('.list-classes').css('display','none');
		$(this).find('.dis').slideToggle('middle');
		$(this).siblings().find('.dis').slideUp('middle');

		$(this).find('.decide-color').toggle();
		$(this).siblings().find('.decide-color').show();
		$(this).find('.words').toggleClass('change');
		$(this).siblings().find('.words').removeClass('change');
		$('.classify li img').css("transform","rotate(0deg)");
		$(this).children('img').css("transform","rotate(90deg)");
	});
	//end check-project

	//begin show.html single item  judge score

	//end   show.html single item  judge score


	//chart
	
	var myChart = echarts.init(document.getElementById('chart'));
	myChart.setOption({
		 title: {
		        text: '今日概况',
		        left: 20,
		        top: 20,
		        textStyle: {
		        	fontSize: 30,
		        	color: '#fff'
		        }
		    },
		    radar: [
		        {
		            indicator: [
		                { text: '甲醛' },
		                { text: 'co2' },
		                { text: '噪音' },
		                { text: '紫外线' },
		                { text: 'pm2.5' }
		            ],
		            center: ['50%', '58%'],
		            radius: 300,
		            startAngle: 90,
		            splitNumber: 4,
		            nameGap: 30,
		            shape: 'circle',
		            name: {
		                formatter:'{value}',
		                textStyle: {
		                    color:'#fff',
		                    fontSize: 35
		                }
		            },

		            splitArea: {
		            	show: 'true',
		                areaStyle: {
		             		opacity: 0
		                }
		            },
		            axisLine: {
		                lineStyle: {
		                    color: 'rgba(255, 255, 255,.3)',
		                    width: 5,
		                    type: 'solid',
		                    shadowColor: '#eee',
		                    shadowBlur: -30
		                }
		            },
		            splitLine: {
		                lineStyle: {
		                    color: 'rgba(255, 255, 255, 2)'
		                }
		            }
		        }
		    ],
		    series: [
		        {
		            name: '雷达图',
		            type: 'radar',
		            itemStyle: {
		            	normal: {
		            		color: '#fff',
		            		shadowColor: '#000',
		            		shadowBlur: 20
		            	},
		                emphasis: {
		                    lineStyle: {
		                        width: 4
		                    }
		                }
		            },
		            data: [
		                {
		                    value: [100, 8, 0.40, -30, 200],
		                    name: '图一',
		                    symbol: 'rect',
		                    symbolSize: 5,
		                    lineStyle: {
		                        normal: {
		                            type: 'solid'
		                        }
		                    }
		                }
		            ]
		        }
		    ]
	})
	//end chart
		


})
