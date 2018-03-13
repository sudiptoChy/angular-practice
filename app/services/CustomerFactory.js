(function () {
    var CustomerFactory = function ($http) {
        var factory = {};
        
        factory.getCustomers = function () {
           return $http.get('/customers');
        };

        factory.getCustomer = function (customerId) {
            return $http.get('/customers/'+customerId);
        };

        return factory;
    };

    CustomerFactory.$inject = ['$http'];

    angular.module('customersApp').factory('CustomerFactory', CustomerFactory);
}());