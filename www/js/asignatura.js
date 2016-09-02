angular.module('starter.controllers', [])
.controller('Asignaturas', function($scope, $stateParams){
    
    var materias=["matematicas","fisica","quimicas"];
    
    $scope.groups = [];//declaracion de la lista general
    
    
    for (var i = 0; i < materias.length; i++) {
      $scope.groups[i] = {//llena la lista con el nombre y contenido
        name: materias[i],
        formula:[]
      };
      for (var j = 0; j < 5; j++) {

        $scope.groups[i].formula.push({title:j,//llenar el item formula con sus respectivos contenidos
          text:"anomfimfasaiofnmeifonmewrfiornfmwieofmweifokwefkmo",
          src:'https://www.google.com/images/srpr/logo11w.png'});
      }
      
    }

    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     
     Strict equal (===) => Returns true if the operands are equal and of the same type.
     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
     */
    $scope.toggleGroup = function (group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function (group) {
      return $scope.shownGroup === group;
    };
    
   
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleItem= function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };

    
});
