var CustomerController = function ($scope, CustomerService, appSettings) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    function init() {
        $scope.customers = CustomerService.getCustomers();
    }

    init();

    $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse != $scope.reverse;
    };
}

CustomerController.$inject = ['$scope', 'CustomerService', 'appSettings'];

angular.module('customersApp')
    .controller('CustomerController', CustomerController)