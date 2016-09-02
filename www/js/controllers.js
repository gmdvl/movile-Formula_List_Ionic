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
    
    var materias=["Matematicas","Fisica","Quimicas"];
    
    var formulas=[
       [//mate
            [//cilindro_recto
                "Cilindro Recto",//name
                "../formulas/matematica/geometria_del_espacio/images_geometria_espacio/cilindro_recto.png", //img formula
                "Cilindro recto\nLl�mese cilindro a un s�lido limitado por una superficie cil�ndrica y dos superficies planas paralelas llamadas bases.Los t�rminos base, altura y �rea lateral son usadoscomo en los prismas.\nUn cilindro es recto cuando su generatriz es perpendicular a las bases.\nEl cilindro recto o de revoluci�n, es el que se considera generado por la rotaci�n de un rect�nguloalrededor de unos de sus lados"
            ],
            [
                "Cono",
                "../formulas/matematica/geometria_del_espacio/images_geometria_espacio/cono.png",
                "Cono de revoluci�n\nLl�mase cono de revoluci�n, o recto, al que sesupone engendrado por la rotaci�n de la hipotenusade un tri�ngulo rect�ngulo alrededor de uno de suscatetos."
            ],
            [
                "Cubo",
                "../formulas/matematica/geometria_del_espacio/images_geometria_espacio/cubo.png",
                "El cubo\nEl cubo es un prisma rect�ngular. Un prisma es regular cuando tienen pol�gonos regulares por bases y sus aristas laterales son perpen-diculares a las bases."
            ],
            [
                "Elipse",
                "../formulas/matematica/geometria_del_espacio/images_geometria_espacio/elipse.png",
                "Es la curva cerrada con dos ejes de simetría que resulta al cortar la superficie de un cono por un plano oblicuo al eje de simetría –con ángulo mayor que el de la generatriz respecto del eje de revolución."
            ],
            [
                "Esfera",
                "../formulas/matematica/geometria_del_espacio/images_geometria_espacio/esfera.png",
                "Es un s�lido, limitado por una superficie curva, en lacual todos los puntos equidistan de un punto interior llamado centro.La mitad de una esfera se llama hemisferio o semi-esfera."
            ],
            [
                "Piramide Regular",
                "../formulas/matematica/geometria_del_espacio/images_geometria_espacio/piramide_regular.png",
                "Es aquella cuya base es un pol�gono regular y suscaras laterales son tri�ngulos is�sceles iguales.\nLa altura de una pir�mide regular pasa por el centrode la circunferencia inscrita o circunscrita a la basede la pir�mide."
            ]
        ],
        [//fisi
            [//cilindro_recto
                "Calculo Potencia",//name
                "../formulas/fisica/electricidad/images_electricidad/calculo_de_la_potencia.jpg", //img formula
                "Las tres formulas b�sicas, para calcular la potencia de una resistencia.Donde: P es la potencia en vatios (W) V es la tensi�n en voltios (V) I es la intensidad en amperios (A) R es la resistencia en ohmios (O)"
            ],
            [
                "Ley De Coulomb",
                "../formulas/fisica/electricidad/images_electricidad/ley_de_coulomb.jpg",
                "Expresa la fuerza desarrollada entre dos cargas el�ctricas: Q1 y Q2 separadas una distancia d. Donde e es la permitividad del m�dio. En el vac�o e0=8.85�10-12 C2 /N�m2 (er�e0);er=permitividad relativa(ver tabla) F se mide en newtons, con Q1 y Q2 en culombios y d en metros. Las cargas pueden ser positivas o negativas: cargas del mismo signo se repelen; cargas de signos contrarios se atraen"
            ],
            [
                "Ley De Ohm",
                "../formulas/fisica/electricidad/images_electricidad/ley_de_ohm.jpg",
                "Intensidad es igual a la tensi�n partida por la resistencia. Donde: I es la intensidad en amperios (A) V es la tensi�n en voltios (V) R es la resistencia en ohmios (O)"
            ],
            [//permeabilidad_magnetica
                "Permeabilidad Magnetica",
                "../formulas/fisica/electricidad/images_electricidad/permeabilidad_magnetica.jpg",
                "�no es constante para un determinado material, sino que var�a con la inducci�n (curvas de Pistoye). En el vac�o: � 0 = 4p � 107 henrios/m. La permeabilidad relativa de un material es �r = �/ �0"
            ],
            [//resistencia_conductor
                "Resistencia Conductor",
                "../formulas/fisica/electricidad/images_electricidad/resistencia_conductor.jpg",
                "La  resistencia de un conductor es igual a la longitud partida por la secci�n Por su resistividad. Donde: R es la resistencia en ohmios (O)  ? es la resistividad del material (O�mm2/m) L es la longitud del conductor en metros (m) S es la secci�n del conductor en mil�metros cuadrados (mm2)"
            ]
        ],
        [//quimi
            [//cilindro_recto
                "1ra Lussac",//name
                "../formulas/quimica/leyes_gases/images_leyes_gases/1ra_lussac.png", //img formula
                "Para cualquier masa de gas, a presi�n constante, el volumen es directamente proporcional a su temperatura absoluta. "
            ],
            [
                "2da Lussac",
                "../formulas/quimica/leyes_gases/images_leyes_gases/2da_lussac.png",
                "Para cualquier masa de gas, a volumen constante, la presi�n es directamente proporcional a su temperatura absoluta. "
            ],
            [//boyle
                "Boyle",
                "../formulas/quimica/leyes_gases/images_leyes_gases/boyle.png",
                "Para cualquier masa de un gas, a temperatura constante, el producto de la presi�n por el volumen es constante. "
            ],
            [//dalton
                "Dalton",
                "../formulas/quimica/leyes_gases/images_leyes_gases/dalton.png",
                "En una mezcla de gases, cada gas ejerce una presi�n parcial igual a la que tendr�a si ocupase �l solo todo el volumen a la misma temperatura, y la presi�n total de la mezcla es igual a la auma de las presiones parciales de todos los gases que la componen."
            ],
            [//resistencia_conductor
                "Ley Gases Ideales",
                "../formulas/quimica/leyes_gases/images_leyes_gases/general_gases_ideales.png",
                "Es la ecuación de estado del gas ideal, un gas hipotético formado por partículas puntuales sin atracción ni repulsión entre ellas y cuyos choques son perfectamente elásticos (conservación de momento y energía cinética). La energía cinética es directamente proporcional a la temperatura en un gas ideal. Los gases reales que más se aproximan al comportamiento del gas ideal son los gases monoatómicos en condiciones de baja presión y alta temperatura."
            ]
        ]
    ];


   
    
    $scope.groups = [];//declaracion de la lista general
    
   
    for (var i = 0; i < materias.length; i++) {
      $scope.groups[i] = {//llena la lista con el nombre y contenido
        name: materias[i],
        formula:[]
      };
      for (var j = 0; j < 5; j++) {

        $scope.groups[i].formula.push({title:formulas[i][j][0],//llenar el item formula con sus respectivos contenidos
          text:formulas[i][j][2],
          src:formulas[i][j][1]});
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
 