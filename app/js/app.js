angular
    .module('webapp', ['ui.router', 'ngCookies', 'ngMaterial', 'firebase', 'vAccordion'])
    .config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
        //angular-material theme
        $mdThemingProvider.definePalette("docs-blue", $mdThemingProvider.extendPalette('blue', {
            '50': '#DCEFFF',
            '100': '#AAD1F9',
            '200': '#7BB8F5',
            '300': '#4C9EF1',
            '400': '#1C85ED',
            '500': '#106CC8',
            '600': '#0159A2',
            '700': '#025EE9',
            '800': '#014AB6',
            '900': '#013583',
            contrastDefaultColor: 'light',
            contrastDarkColors: '50 100 200 A100',
            contrastStrongLightColors: '300 400 A200 A400'
        }));
        $mdThemingProvider.theme('default').primaryPalette('docs-blue');
        //ui-router
        $urlRouterProvider.otherwise('/');
        $stateProvider
            /*
            .state('login', {
                url: '/login',
                views: {
                    'wrapper': {
                        templateUrl: 'view/Login.html'
                    }
                },
                resolve: {
                    clear: ['UserService', function(UserService) {
                        UserService.logout();
                        console.log('login: ' + UserService.isLoggedIn + ', user: ' + UserService.user.employeeno);
                    }]
                }
            })
            */
            .state('main', {
                url: '/',
                views: {
                    'Header': {
                        templateUrl: 'view/Header.html',
                        controller: 'HeaderCtrl',
                        controllerAs: 'hdCtrl'
                    },
                    'Leftnav': {
                        templateUrl: 'view/Leftnav.html',
                        controller: 'LeftnavCtrl',
                        controllerAs: 'lnCtrl'
                    },
                    'Content': {
                        templateUrl: 'view/Content.html',
                        controller: 'ContentCtrl',
                        controllerAs: 'ctCtrl'
                    }
                }//,
                /*
                resolve: {
                    auth: ['$q', '$location', 'UserService', function($q, $location, UserService) {
                        if (UserService.isLoggedIn) {

                        } else {
                            $location.path('/login');
                        }
                        console.log('login: ' + UserService.isLoggedIn + ', user: ' + UserService.user.employeeno);
                    }]
                }*/
            })
            .state('main.option1', {
                url: 'option1',
                views: {
                    'Content@': {
                        templateUrl: 'view/Option1.html',
                        controller: 'Option1Ctrl'
                    }
                }
            })
            .state('main.option2', {
                url: 'option2',
                views: {
                    'Content@': {
                        templateUrl: 'view/Option2.html',
                        controller: 'Option2Ctrl'
                    }
                }
            })
            .state('main.option3', {
                url: 'option3',
                views: {
                    'Content@': {
                        templateUrl: 'view/Option3.html',
                        controller: 'Option3Ctrl'
                    }
                }
            });
    });
