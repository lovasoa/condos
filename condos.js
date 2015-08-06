var APIURL = "http://api.appheb.erdf-grdf.fr:8520/api.php/";

angular.module('condosApp', [])
.controller('CondosController', function ($http) {
  var condos = this;
  condos.condos = [];
  $http.get(APIURL + "liste_condensateurs").then(function listecondos(response) {
    condos.condos = response.data.results;
  });
  $http.get(APIURL + "liste_postes_sources").then(function listeps(response) {
    condos.ps = response.data.results;
  });
  condos.zones = [
      {nom:"Essonne"},
      {nom:"Pantin"},
  ];
});
