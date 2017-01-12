/**
 * Created by Tamir on 09/01/2017.
 */
'use strict';

booksService.$inject = ['$q', '$http']

angular.module('app').service('booksService', booksService);

function booksService($q, $http) {
    
    var getBooks = function () {
        var dfd = $q.defer();
        $http.get('/books')
            .then(function (data, status) {
                data.data.books.forEach(function (item) {
                    item.date = new Date(item.date)
                })
                dfd.resolve(data.data.books);
            }, function (data,error) {
                dfd.reject(error)
            })

        return dfd.promise;
    }
    
    return {
        getBooks: getBooks        
    }
}