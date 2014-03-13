/**
 * Created by jv on 12/03/2014.
 */
function ViewStudentCtrl($scope, $http, $routeParams) {

    var id = $routeParams.id;

    $http.get("/api/v1/student/"+ id + "?format=json").
        success(function(student) {
            $scope.student = student;
            console.log(student);
        });

//    $http.get('/api/v1/student_project/?format=json').
//        success(function(projects) {
//            $scope.projects = projects.objects;
//        });
};