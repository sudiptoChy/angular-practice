var CustomerController = function ($scope, CustomerFactory) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [];

    function init() {
        $scope.customers = CustomerFactory.getCustomers();
    }

    init();

    $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse != $scope.reverse;
    };
}

CustomerController.$inject = ['$scope', 'CustomerFactory'];

angular.module('customersApp')
    .controller('CustomerController', CustomerController)