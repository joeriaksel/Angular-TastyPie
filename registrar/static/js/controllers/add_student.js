/**
 * Created by jv on 12/03/2014.
 */
function AddStudentCtrl($scope, $http, $location){

    $http.get('/api/v1/class?format=json').
        success(function(classes) {
            $scope.classes = classes.objects
            console.log($scope.classes)
        });

    $scope.submitForm = function() {
        $http.post('/api/v1/student/?format=json', $scope.student).
            success(function(response) {
                $location.path("/");
            })
    }
}

