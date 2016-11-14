//1.创建一个模块
//创建模块的函数
//参数1：是模块的名称
//参数2：是模块索要依赖的模块
angular.module('phonecatAPP', []);

//定义component的方法
//1.取得component所属的module：angular.module('hello')就是取得hello模块
//2.调用module的方法controller来定义一个component

angular.module('phonecatAPP').component('phoneList', {
  template: `
    <ul>
      <li ng-repeat="phone in $ctrl.phones">
        <span>{{phone.name}}</span>
        <p>{{phone.desc}}</p>
      </li>
    </ul>
  `,
  controller: function($scope) {
    this.phones = [{
      name: 'iphone7',
      desc: '不会轻易爆炸'
    }, {
      name: 'Samsung note7',
      desc: '不让拿上飞机'
    }, {
      name: '锤子 M1',
      desc: '完美'
    }]
  }
})
