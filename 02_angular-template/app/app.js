//1.创建一个模块
//创建模块的函数
//参数1：是模块的名称
//参数2：是模块索要依赖的模块
angular.module('hello', []);

//定义controller的方法
//一个参数是取得模块，二个参数是定义模块
//1.取得controller所属的module：angular.module('hello')就是取得hello模块
//2.调用module的方法controller来定义一个controller

angular.module('hello').controller('ControllerName', function($scope) {
  $scope.phones = [{
    name: 'iphone7',
    desc: '不会轻易爆炸'
  }, {
    name: 'Samsung note7',
    desc: '不让拿上飞机'
  }];
})
