(function () {
    var AllOrdersController = function ($scope, CustomerFactory) {
        $scope.orders = [];
        $scope.ordersTotal = 0.0;
        $scope.totalType;

        function init() {
            CustomerFactory.getOrders()
                .success(function (orders) {
                    $scope.orders = orders;
                    getOrdersTotal();
                })
                .error(function (data, status, headers, config) {
                    console.log(data)
                });
        };

        function getOrdersTotal() {
            var total = 0;
            for (var i = 0; i < $scope.orders.length; i++) {
                total += $scope.orders[i].total;
            }
            $scope.ordersTotal = total;
            $scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger'
        };

        init();
    };

    AllOrdersController.$inject = ['$scope', 'CustomerFactory'];

    angular.module('customersApp')
        .controller('AllOrdersController', AllOrdersController)
}())