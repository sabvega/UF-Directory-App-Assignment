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
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
      $scope.show=false;
    };
    $scope.showDetails = function(index) {
       $scope.detailedInfo = 
        $scope.listings[index];
      $scope.show = true;
    };
  }s
]);
