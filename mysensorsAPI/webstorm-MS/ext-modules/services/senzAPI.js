/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var senszes=angular.module('senzApi',[]);

senszes.factory('senz',['$http',function($http){
   var fac = {};
           var config = {
            headers: { 
                
                'Content-Type': 'application/json'
                
            }
        };
      fac.getDevices = function(){
         return $http.get('http://localhost:3000/senz/');
      };
      fac.addDevice= function(deviceData){
         return $http.post('http://localhost:3000/senz/',deviceData,config);
      };
      fac.updateDevice= function(id,field){
        return $http.put('http://localhost:3000/senz/'+ id,field,config); 
      };
      fac.deleteDevice=function(id){
        return  $http.delete('http://localhost:3000/senz/'+ id,config);
      };
      
      return fac;
      
  
}]);


