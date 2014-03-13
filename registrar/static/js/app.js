/**
 * Created by jv on 12/03/2014.
 */
var registrar = angular.module('registrar', ['ngRoute']);

registrar.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/',{templateUrl: '/static/views/index.html', controller: IndexCtrl}).
        when('/add/student/',{templateUrl: '/static/views/add_student.html', controller: AddStudentCtrl}).
        when('/add/project/',{templateUrl: '/static/views/add_project.html', controller: AddProjectCtrl}).
        when('/student/:id',{templateUrl: '/static/views/view_student.html', controller: ViewStudentCtrl}).
        otherwise({redirectTo: '/'});

}]);