var app = angular.module('todo' , []);

app.controller('ctr' ,function($scope) {
	
	$scope.list = ["Task1", "Task2", "Task3", "Task4"];

$scope.new = "";
	$scope.addItem = function(){
		$scope.list.push($scope.new)
	}
$scope.delete=function(index){
	$scope.list.splice(index,1)
}

})