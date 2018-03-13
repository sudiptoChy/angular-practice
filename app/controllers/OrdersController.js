var OrdersController = function ($scope, $routeParams, CustomerFactory) {
    var customerId = $routeParams.customerId;
    $scope.customer = null;

    function init() {
        $scope.customer = CustomerFactory.getCustomer(customerId);
    }

    init();

}

OrdersController.$inject = ['$scope', '$routeParams', 'CustomerFactory'];

angular.module('customersApp')
    .controller('OrdersController', OrdersController)