angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('inforamacionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('misDatosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('asignaturasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $stateParams){
    
    var materias=[,"Fisica","Quimicas"];
    
    var numeric = 
    [
        [
            "Matematicas",
            '../formulas/matematica/geometria_del_espacio/images_geometria_espacio/cono.png'
        ],
        [
            '2',
            'https://www.google.com/images/srpr/logo11w.png'
        ],
        [
            '3',
            "../img/cono.png"
        ]
    ];
    
    $scope.groups = [];//declaracion de la lista general
    
    
    for (var i = 0; i < materias.length; i++) {
      $scope.groups[i] = {//llena la lista con el nombre y contenido
        name: numeric[i][0],
        formula:[]
      };
      for (var j = 0; j < 5; j++) {

        $scope.groups[i].formula.push({title:j,//llenar el item formula con sus respectivos contenidos
          text:"anomfimfasaiofnmeifonmewrfiornfmwieofmweifokwefkmo",
          src:numeric[0][1]});
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

    
}
])
   
.controller('formulasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 