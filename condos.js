angular.module('condosApp', [])
.controller('CondosController', function () {
  var condos = this;
  condos.condos = [
    {ps:'ALLOUETTE', nom:"CONDO A"},
    {ps:'ARPAJON', nom:"CONDO B"},
  ];
  condos.zones = [
      {nom:"Essonne"},
      {nom:"Pantin"},
  ];
});
