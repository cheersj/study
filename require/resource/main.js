require.config({
	baseUrl:'./resource/app',
	paths:{
		'css':'../lib/css.min',
		'jquery':'../lib/jquery.min',
		'bootstrap':'../lib/bootstrap.min',
		'common':'common'
	},
	shim:{
		'bootstrap':{
			'deps':['jquery','css!../css/bootstrap.min.css','css!../css/font-awesome.min.css']
		},
		'common':{
			// exports:'fuck'		// 针对非标准的
			init:function(){
				return {
					fuck:fuck,
					success:success,	
				}
			}
		}
	}
});
// 加载就执行
// require(['jquery'],function($){
// 	$('body').css({'backgroundColor':'red'});			
// })
require(['util'],function(sj){
	sj.change();  
})

require(['common'],function(cm){
	cm.success() 
})
