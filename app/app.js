/**
 * Created by Tamir on 09/01/2017.
 */
var app = angular.module('app', ['ui.router', 'oitozero.ngSweetAlert', 'ngMessages'])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        
        $urlRouterProvider.otherwise('/');
        
        var routeResolvers = {
            allBooks: function (booksService) {
                return booksService.getBooks().then(function (data) {
                    return data
                })
                    .catch(function (err) {
                        console.error(err);
                    })
            }
        }

        $stateProvider
            .state('home', {
                url: '/',
                template: '<books books="$resolve.books"></books>',
                resolve: {
                    books: routeResolvers.allBooks
                }
            })
    });