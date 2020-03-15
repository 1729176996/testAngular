//通过 AngularJS 的 angular.module 函数来创建模块
var app = angular.module('app1',[]);
//为了能够跨域，设置域名访问白名单
app.config(function($sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist([
		'https://c.runoob.com/runoobtest/**'
	]);
});