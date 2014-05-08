var cormanApp = angular.module('cormanApp', [
  'ngRoute',
  'cormanControllers'
]);

cormanApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/bookings', {
        templateUrl: 'partials/booking_list.html',
        controller: 'BookingListCtrl'
      }).
      when('/bookings/:bookingId', {
        templateUrl: 'partials/booking_details.html',
        controller: 'BookingDetailCtrl'
      }).
      when('/new_reservation', {
      	templateUrl: 'partials/reservation.html',
        controller: 'ReservationCtrl'
      }).
      when('/resources', {
        templateUrl: 'partials/resource_list.html',
        controller: 'ResourceListCtrl'
      }).
      when('/resources/:resourceName', {
        templateUrl: 'partials/resource_details.html',
        controller: 'ResourceDetailCtrl'        
      }).
      when('/resources/:resourceName/reservation', {
        templateUrl: 'partials/reservation.html',
        controller: 'ReservationCtrl'
      }).
      when('/resources/:resourceName/:bookingId', {
        templateUrl: 'partials/booking_details.html',
        controller: 'BookingDetailCtrl'        
      }).
      otherwise({
        redirectTo: '/resources'
      });
  }]);