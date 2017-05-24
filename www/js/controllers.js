angular.module('starter.controllers', [])

.controller('RegCtrl', function($scope,$state) {
  $scope.log=function(){
    $state.go('login');
  }
})
 .controller('LogCtrl',function($scope,$state){
    $scope.reg=function(){
      $state.go('register');
    }
 })

