angular
    .module('webapp')
    .controller('LeftnavCtrl', ['$mdSidenav', '$location', function($mdSidenav, $location) {
        var self = this;
        console.log('Leftnav active');
        self.MenuList = [{
                name: 'Menu Item 1',
                url: 'main.option1',
            }, {
                name: 'Menu Item 2',
                url: 'main.option2',
            }, {
                name: 'Menu Item 3',
                url: 'main.option3',
            }
        ];
        self.MenuClick = function(item) {
        	$mdSidenav('leftnav').close();
        };
    }]);
