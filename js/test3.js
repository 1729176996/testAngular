//通过 AngularJS 的 angular.module 函数来创建模块
var app = angular.module('app1',['ngRoute']);
//配置 $routeProvider，AngularJS $routeProvider 用来定义路由规则
app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		//在 ng-view 中插入简单的 HTML 内容
		.when('/',{template:'这是首页页面'})
		//在 ng-view 中插入 HTML 模板文件
		.when('/computers',{
			templateUrl: 'computers.html',
			//在当前模板上执行的controller函数，生成新的scope
			controller:'computersController'
		})
		.when('/printers',{template:'这是打印机页面'})
		//当都不符合时就选择一个跳转
		.otherwise({redirectTo:'/'});
}]);
//computers页面模板对应的控制器
app.controller('computersController',function($scope){
	
});

//js中模拟a标签的点击事件
var a = document.createElement('a');
a.target = "_blank";
a.href = "#!/computers";
a.click();