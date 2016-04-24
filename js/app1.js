angular.module('patient', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

$stateProvider

.state('patients', {

  url: '/',
  //abstract: true,
  templateUrl: 'templates/initial.html'
})

$urlRouterProvider.otherwise('/');
})

.controller('resultsCtrl', function($rootScope, $scope, $state){

  $rootScope.boi = "nice";
  $rootScope.timer();
  $rootScope.navTo = function(name){
        $state.transitionTo(name);
   }
   

})