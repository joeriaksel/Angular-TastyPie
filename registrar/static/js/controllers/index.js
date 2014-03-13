/**
 * Created by jv on 12/03/2014.
 */
function IndexCtrl($scope, $http) {
    $http.get('/api/v1/student/?format=json').
        success(function(students) {
            $scope.students = students.objects;
        });

    $http.get('/api/v1/student_project/?format=json').
        success(function(projects) {
            $scope.projects = projects.objects;
        });
};