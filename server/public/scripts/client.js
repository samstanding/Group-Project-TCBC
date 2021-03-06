var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ngMessages', 'ngFileUpload', 'dataGrid', 'pagination', 'wt.responsive']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/landing'
    })
    .when('/landing', {
      templateUrl: '/views/landing/landing.html',
      controller: 'HomeController as vm',
      activetab: 'landing',

    })
    .when('/home', {
      templateUrl: '/views/shared/home.html',
      controller: 'HomeController as vm',
      activetab: 'home',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/login', {
      templateUrl: '/views/shared/login.html',
      controller: 'LoginController as vm',
    })
    .when('/my-rides', {
      templateUrl: '/views/user/templates/member.myRides.html',
      controller: 'MemberMyRidesController as vm',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/check-in/:rideId', {
      templateUrl: '/views/ride-leader/templates/check-in-view.html',
      controller: 'CheckInController as vm',
      resolve: {
        getuser: function (UserService) {
          return UserService.getRideLeader();
        }
      }
    })
    .when('/ride-leader/my-rides', {
      templateUrl: '/views/ride-leader/templates/rideLeader.myRides.html',
      controller: 'RideLeaderController as vm',
      resolve: {
        getuser: function (UserService) {
          return UserService.getRideLeader();
        }
      }
    })
    .when('/my-profile', {
      templateUrl: '/views/shared/my-stats.html',
      controller: 'MyStatsController as vm',
      activetab: 'my-profile',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/stats', {
      templateUrl: '/views/shared/my-stats.html',
      controller: 'MyStatsController as vm',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/manage-members', {
      templateUrl: '/views/admin/templates/manage-members.html',
      controller: 'AdminController as vm',
      resolve: {
        getuser: function (UserService) {
          return UserService.getRideAdmin();
        }
      }
    })
    .when('/manage-rides', {
      templateUrl: '/views/admin/templates/manage-rides.html',
      controller: 'AdminController as vm',
      resolve: {
        getuser: function (UserService) {
          return UserService.getRideAdmin();
        }
      }
    })
    .otherwise({
      template: `<h1 style="text-align:center;">404 </h1><br><p style="text-align:center;">Page not found. Please try again later.</p><br>
                <p style="text-align:center;">Please go to the <a href="/#!/landing">Main</a> page for more information</p>`
    })

}]);