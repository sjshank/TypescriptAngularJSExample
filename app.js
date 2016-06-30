
var fullnameApp;
(function (fullnameApp) {
    "use strict";
    var AppRoutes = (function () {
        function AppRoutes() {
        }
        AppRoutes.configRoutes = function ($routeProvider) {
            $routeProvider
                .when("/home", {
                templateUrl: './views/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
                .otherwise({
                redirectTo: '/home'
            });
        };
        AppRoutes.$inject = ["$routeProvider"];
        return AppRoutes;
    }());
    angular
        .module('app.routes', ['ngRoute'])
        .config(AppRoutes.configRoutes);
})(fullnameApp || (fullnameApp = {}));
/// <reference path="./typings/angularjs/angular.d.ts" />
/// <reference path="./appConfig/app.route.ts" />
var fullNameApp;
(function (fullNameApp) {
    'use strict';
    var webApp = angular.module('nameApp', ['app.routes']);
})(fullNameApp || (fullNameApp = {}));
/// <reference path='./typings/jquery/jquery.d.ts' />
/// <reference path='./typings/angularjs/angular.d.ts' />
/// <reference path='./app.ts' /> 
//# sourceMappingURL=app.js.map