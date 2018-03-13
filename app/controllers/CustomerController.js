var CustomerController = function ($scope, $log, CustomerFactory, appSettings) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    function init() {
        $scope.customers = CustomerFactory.getCustomers()
            .success(function (customers) {
                $scope.customers = customers;
            })
            .error(function (data, status, header, config) {
                $log.log(data.error + ' '+status);
            })
    }

    init();

    $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse != $scope.reverse;
    };

    $scope.deleteCustomer = function(customerId) {
        CustomerFactory.deleteCustomer(customerId)
            .success(function (status) {
                if (status) {
                    for (var i = 0; i < $scope.customers.length; i++) {
                        if ($scope.customers[i].id == customerId) {
                            $scope.customers.splice(i, 1);
                            break;
                        }
                    }
                } else {
                    $window.alert('Unable to delete customer');
                }
            })
            .error(function (data, status, headers, config) {
                console.log(data)
            })
    }
}

CustomerController.$inject = ['$scope', '$log', 'CustomerFactory', 'appSettings'];

angular.module('customersApp')
    .controller('CustomerController', CustomerController)