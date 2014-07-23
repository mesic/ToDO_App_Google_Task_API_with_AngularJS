todoApp.controller("IgCtrl", function ($scope, IgService, GOOGLE_AUTH_URL) {
    //Get tasks
    $scope.tasks = function () {
        IgService.getTasks().then(function (result) {
            $scope.models = result.items;
        });
    };

    //Auth URL
    $scope.GoogleAuth = GOOGLE_AUTH_URL;
});