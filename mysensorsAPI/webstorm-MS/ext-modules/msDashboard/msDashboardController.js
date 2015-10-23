/**
 * Created by Pubudu on 2015-09-19.
 */

angular.module('msDashboard').controller("dashController",

    ['$scope','$rootScope','senz','$http', function($scope,$rootScope,senz,$http){

   
        $scope.dataItems = [];
        senz.getDevices().success(function(response){
           $scope.dataItems=response;
        });
        
         //we could use the webservice here to get json data
//        $http.get('http://localhost:3000/senz/').success(function(response){$scope.dataItems = response;});
            

        $scope.$on('ms-add-device', function (evt, data) {
            
            senz.addDevice(data.msg).success(function(response){
           $scope.dataItems.push(response);
            });
            
        });
        
        $scope.statusChange=function(id,status){

           senz.updateDevice(id,{
              'status':status
           });
                      
        };
        
        $scope.Devicedelete=function(id,device){
          senz.deleteDevice(id).success(function(){
          var index = $scope.dataItems.indexOf(device);
          $scope.dataItems.splice(index,1);
          });

          
        };






}]);
