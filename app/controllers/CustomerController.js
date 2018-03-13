var CustomerController = function ($scope, CustomerFactory, appSettings) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    function init() {
        $scope.customers = CustomerFactory.getCustomers()
            .success(function (customers) {
                $scope.customers = customers;
            })
            .error(function (data) {
                console.log(data);
            })
    }

    init();

    $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse != $scope.reverse;
    };
}

CustomerController.$inject = ['$scope', 'CustomerFactory', 'appSettings'];

angular.module('customersApp')
    .controller('CustomerController', CustomerController)