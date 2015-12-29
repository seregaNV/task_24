(function() {
    "use strict";
    var app = angular.module('app');
    app.factory('exampleFactory', function() {
        console.log('example factory');
        return {
            arr: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'NodeJS', 'ExpressJS']
        };
    });
})();