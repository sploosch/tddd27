var cormanControllers = angular.module('cormanControllers', []);

cormanControllers.controller('BookingListCtrl', function ($scope, $http) {
	$http.get('/get_bookings').success(function(data) {
      $scope.bookings = data;
    });
});

cormanControllers.controller('BookingDetailCtrl', function ($scope, $routeParams, $http) {
    $scope.bookingId = $routeParams.bookingId;

    $http.post('/get_booking_details/', {"id" : $routeParams.bookingId}).success(function(data) {
      $scope.booking = data;
    });

 });


cormanControllers.controller('ReservationCtrl', function ($scope, $http) {
    $http.get('/get_resources').success(function(data) {
      $scope.resources = data;
    });
 });