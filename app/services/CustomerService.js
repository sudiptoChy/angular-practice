(function () {
    var CustomerService = function () {
        var customers = [{
            id: 1,
            joined: '2000-12-02',
            name: 'John',
            city: 'Chandler',
            orderTotal: 9.998,
            orders: [
                {
                    id: 1,
                    product: 'Shoes',
                    total: 9.998
                }
            ]
        }, {
            id: 2,
            joined: '1999-12-02',
            name: 'Alex',
            city: 'Thimpu',
            orderTotal: 19.998,
            orders: [
                {
                    id: 2,
                    product: 'Mobile',
                    total: 10
                },
                {
                    id: 3,
                    product: 'Charger',
                    total: 9.99
                }
            ]
        }, {
            id: 3,
            joined: '2017-01-02',
            name: 'Maven',
            city: 'Dakutu',
            orderTotal: 39.008,
            orders: [
                {
                    id: 4,
                    product: 'Headphones',
                    total: 39.008
                }
            ]
        }, {
            id: 5,
            joined: '2016-12-02',
            name: 'Silvia',
            city: 'Dublin',
            orderTotal: 13.998,
            orders: [
                {
                    id: 5,
                    product: 'kindle',
                    total: 13.998
                }
            ]
        }];

        this.getCustomers = function () {
            return customers;
        };

        this.getCustomer = function (customerId) {
            for (var i = 0; i < customers.length; i++) {
                if (customers[i].id === parseInt(customerId)) {
                    return customers[i];
                }
            }

            return {};
        };

    };

    angular.module('customersApp').service('CustomerService', CustomerService);
}());