/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-route.d.ts" />

module fullnameApp {
    "use strict";

    class AppRoutes{
        static $inject = ["$routeProvider"];
        static configRoutes($routeProvider: ng.route.IRouteProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: './views/home.html',
                    controller: 'homeCtrl',
                    controllerAs: 'vm'   
                })
               .otherwise({
                    redirectTo: '/home'
                });
        }
    }
    
    angular
    .module('app.routes', ['ngRoute'])
    .config(AppRoutes.configRoutes);
}