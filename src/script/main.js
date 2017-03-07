import '../style/main.scss';
import $ from 'jquery';
import json from '../data.json';
var echarts = require('echarts');
var option = {
		grid: {
	        left: '3%',
	        bottom: '3%',
	        containLabel: true
	    },
	    yAxis: {
	        type: 'value',
	        show: false,
	        axisLabel: {
	            formatter: '{value}'
	        }
	    },
	    xAxis: {
	        type: 'category',
	        name: 'pm',
	        nameTextStyle:{
	        	fontSize: 24,
	        	color: '#4A4A4A'
	        },
	        axisLine: {
	        	onZero: false,
	        	lineStyle: {
	        		color: '#4A4A4A',
	        		width: 3
	        	}
	        },
	        axisTick: {
	        	inside: true,
	        	lineStyle: {
	        		color: '#4A4A4A',
	        		width: 4
	        	}
	        },
	        axisLabel: {
	            formatter: '{value}',
	            margin: 15,
	            inside: true,
	            textStyle: {
	            	color: '#4A4A4A',
	        		fontSize: 24,
	            }
	        },
	        boundaryGap: false,
	        data: ['0', '3', '6', '9', '12', '15', '18', '21']
	    },
	    series: [
	        {
	            name: '高度(km)与气温(°C)变化关系',
	            type: 'line',
	            smooth: true,
	            itemStyle: {
	            	normal: {
	            		color: '#979797'
	            	}
	            },
	            lineStyle: {
	                normal: {
	                    width: 10,
	                    color: '#979797',
	                    shadowColor: 'rgba(0,0,0,0.4)',
	                    shadowBlur: 20,
	                    shadowOffsetY: 15
	                }
	            },
	            data:[]
	        }
	    ]
};


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


	//begin today overview echart
	
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
		                { text: '甲醛' , max: 0.25 },
		                { text: 'CO2' , max: 1000 },
		                { text: '噪音' , max: 80 },
		                { text: '紫外线' , max: 7 },
		                { text: 'PM2.5', max: 250 }
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
		            //圈内五条线分割
		            axisLine: {
		                lineStyle: {
		                    color: 'rgba(255, 255, 255,.5)',
		                    width: 1,
		                    type: 'solid',
		                    shadowColor: '#eee',
		                    z: 1000
		                }
		            },
		            splitLine: {
		                lineStyle: {
		                    color: 'rgba(255, 255, 255, .4)',
		                    width: 3,
    						shadowColor: 'rgba(0, 0, 0, .5)',
    						shadowBlur: 50,
    						shadowOffsetX: 16,
    						shadowOffsetY: -2
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
		            		color: '#fff'
		            		
		            	},
		                emphasis: {
		                    lineStyle: {
		                        width: 4
		                    }
		                }
		            },
		            data: [ //[0.09, 200, 14, 3, 20],
				                {
				                    value: [0.09, 200, 0, 0, 0],
				                    name: '图一',
				                    symbol: 'rect',
				                    symbolSize: 5,
				                    lineStyle: {
				                        normal: {
				                            type: 'solid',
				                            color: '#fff',
				                            opacity: 0.5
				                        }
				                    },
				                    label: {
				                    	normal: {
				                    		show: true,
				                    		textStyle: {
				                    			fontSize: 20
				                    		},
				                    		formatter:function(params){
				                    			return params.value;
				                    		}
				                    	}
				                    },
				                    areaStyle: {
				                    	normal: {
				                    		opacity: 0.7,
				                    		color: '#fff'
				                    	}
				                    }
				                },
				                {
				                    value: [0, 200, 14, 0, 0],
				                    name: '图一',
				                    symbol: 'rect',
				                    symbolSize: 5,
				                    lineStyle: {
				                        normal: {
				                            type: 'solid',
				                            color: '#fff',
				                            opacity: 0.5
				                        }
				                    },
				                    label: {
				                    	normal: {
				                    		show: true,
				                    		textStyle: {
				                    			fontSize: 20
				                    		},
				                    		formatter:function(params){
				                    			return params.value;
				                    		}
				                    	}
				                    },
				                    areaStyle: {
				                    	normal: {
				                    		opacity: 0.8,
				                    		color: '#fff'
				                    	}
				                    }
				                },
				                {
				                    value: [0, 0, 14, 3, 0],
				                    name: '图一',
				                    symbol: 'rect',
				                    symbolSize: 5,
				                    lineStyle: {
				                        normal: {
				                            type: 'solid',
				                            color: '#fff',
				                            opacity: 0.5
				                        }
				                    },
				                    label: {
				                    	normal: {
				                    		show: true,
				                    		textStyle: {
				                    			fontSize: 20
				                    		},
				                    		formatter:function(params){
				                    			return params.value;
				                    		}
				                    	}
				                    },
				                    areaStyle: {
				                    	normal: {
				                    		opacity: 0.2,
				                    		color: '#fff'
				                    	}
				                    }
				                },
				                {
				                    value: [0, 0, 0, 3, 20],
				                    name: '图一',
				                    symbol: 'rect',
				                    symbolSize: 5,
				                    lineStyle: {
				                        normal: {
				                            type: 'solid',
				                            color: '#fff',
				                            opacity: 0.5
				                        }
				                    },
				                    label: {
				                    	normal: {
				                    		show: true,
				                    		textStyle: {
				                    			fontSize: 20
				                    		},
				                    		formatter:function(params){
				                    			return params.value;
				                    		}
				                    	}
				                    },
				                    areaStyle: {
				                    	normal: {
				                    		opacity: 0.3,
				                    		color: '#fff'
				                    	}
				                    }
				                },
				                {
				                    value: [0.09, 0, 0, 0, 20],
				                    name: '图一',
				                    symbol: 'rect',
				                    symbolSize: 5,
				                    lineStyle: {
				                        normal: {
				                            type: 'solid',
				                            color: '#fff',
				                            opacity: 0.5
				                        }
				                    },
				                    label: {
				                    	normal: {
				                    		show: true,
				                    		textStyle: {
				                    			fontSize: 20
				                    		},
				                    		formatter:function(params){
				                    			return params.value;
				                    		}
				                    	}
				                    },
				                    areaStyle: {
				                    	normal: {
				                    		opacity: 0.5,
				                    		color: '#fff'
				                    	}
				                    }
				                }
				            ]
		        }
		    ]
	});
	//end today overview echart
		
	//begin individual echart
	option.series[0].data = [0 ,0,12,12,12,12,0,0,0];
	var individualChart = echarts.init(document.getElementById('individual'));
	var individualChart1 = echarts.init(document.getElementById('individual1'));
	var individualChart2 = echarts.init(document.getElementById('individual2'));
	var individualChart3 = echarts.init(document.getElementById('individual3'));
	var individualChart4 = echarts.init(document.getElementById('individual4'));
	var individualChart5 = echarts.init(document.getElementById('individual5'));
	var individualChart6 = echarts.init(document.getElementById('individual6'));
	var individualChart7 = echarts.init(document.getElementById('individual7'));
	var individualChart8 = echarts.init(document.getElementById('individual8'));
	individualChart.setOption(option);
	individualChart1.setOption(option);
	individualChart2.setOption(option);
	individualChart3.setOption(option);
	individualChart4.setOption(option);
	individualChart5.setOption(option);
	individualChart6.setOption(option);
	individualChart7.setOption(option);
	individualChart8.setOption(option);
	//end induvidual echart
})
