angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.show = false;
    $scope.newCode = "";
    $scope.newName = "";
    $scope.newLat = "";
    $scope.newLong = "";
    $scope.newAdd = "";

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push({
        "code": $scope.newCode,
        "name": $scope.newName,
        "coordinates": {
          "latitude": $scope.newLat,
          "longitude": $scope.newLong
        },
        "address": $scope.newAdd
      });
     
      //reset values 
      $scope.newCode = "";
      $scope.newName = "";
      $scope.newLat = "";
      $scope.newLong = "";
      $scope.newAdd = "";
    };
    $scope.deleteListing = function(code) {
      var object = $scope.listings.find(entry => {
        return entry.code == code;
      });
      $scope.listings.splice($scope.listings.indexOf(object), 1);
      $scope.show=false;
    };
    $scope.showDetails = function(code) {
       $scope.detailedInfo = 
        $scope.listings.find(entry => {
          return entry.code == code;
        });
      $scope.show = true;
    };
  }
]);
