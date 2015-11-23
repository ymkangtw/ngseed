angular
    .module('webapp')
    .controller('HeaderCtrl', ['$mdSidenav', '$location', function($mdSidenav, $location) {
        var self = this;
        console.log('HeaderCtrl active');
        self.OnLeftnavOpen = function() {
        	$mdSidenav('leftnav').open();
        };
        self.OnLeftnavClose = function() {
        	$mdSidenav('leftnav').close();
        };

    }]);
