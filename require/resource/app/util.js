// 自定义模块  标准化
define(['bootstrap'],function(){
	return {
		change:function(){
			// require(['jquery'],function($){
				$('body').css({'backgroundColor':'pink'});
			// })		
		},
		show:function(){
			alert('hsj')
		},
		message:function(){
			alert('tomjerry.cc')
		}
	}
})