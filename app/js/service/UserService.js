angular
    .module('projectapp')
    .factory('UserService', ['$http', '$cookies', function($http, $cookies) {
        var self = this;
        //console.log('last user: ' + $cookies.get('employeeno'));
        self.writeCookie = function(user) {
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 3);
            for (var key in user) {
                $cookies.put(key, user[key], {
                    expires: expireDate
                });
                //console.log(key + ': ' + $cookies.get(key));
            };
        };

        var service = {
            isLoggedIn: false,
            user: {
                employeeno: '',
                name: '',
                titleid: '',
                ofgroup: ''
            },
            session: function() {

            },
            lastlogin: function() {
                return $cookies.get('employeeno');
            },
            login: function(account) {
                return $http.get('/api/login', {
                        params: account
                    })
                    .then(function(response) {
                        //console.log('get $http response');
                        service.user = response.data;
                        if (Object.getOwnPropertyNames(service.user).length !== 0) {
                            service.isLoggedIn = true;
                            self.writeCookie(service.user);
                        } else {
                            service.isLoggedIn = false;
                        }
                        //console.log(service.user);
                        return response;
                    }, function(error) {
                        return error;
                    });
            },
            logout: function() {
                if (Object.getOwnPropertyNames(service.user).length !== 0) {
                    service.user = {};
                    service.isLoggedIn = false;
                    //for (key in service.user) {
                    //    service.user[key] = '';
                    //}
                    //console.log(service.user);
                }
            }
        };
        return service;


    }]);

/*
angular
    .module('projectapp')
    .service('MainService', ['$http', '$cookies', function($http, $cookies) {
        var self = this;
        self.isLoggedIn = false;
        self.user = {
            employeeno: '',
            password: '',
            name: '',
            titleid: '',
            ofgroup: ''
        };
        self.session = function() {

        };

        self.login = function(user) {
            return $http.get('/api/login', {
                    params: user
                })
                .then(function(response) {
                    return response;
                }, function(error) {
                    return error;
                });
        };
        self.logout = function() {

        };
        console.log('current user: ' + $cookies.get('employeeno'));

    }]);
*/
