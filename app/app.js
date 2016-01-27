var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
         .when('/', {
             controller: 'CrudController',
             templateUrl: '/app/views/pessoa/listar.html'
         })
           .when('/pessoa/edit/:id', {
               controller: 'CrudController',
               templateUrl: '/app/views/pessoa/editar.html'
           })
         //.when('/pessoa/edit/:id', {
         //    controller: 'editarController',
         //    templateUrl: '/app/views/pessoa/editar.html'
         //})
         //.when('/pessoa/nova', {
         //    controller: 'novaController',
         //    templateUrl: '/app/views/pessoa/editar.html'
         //})
         //.when('/pessoa/deletar/:id', {
         //    controller: 'deletarController',
         //    templateUrl: '/app/views/pessoa/listar.html'
         //})
         .otherwise({ templateUrl: '404.html' });
});

app.run(function ($rootScope) {
    $rootScope.urlServico = 'http://localhost:14451/Services/api/Pessoa';
});



http://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/
http://www.devmedia.com.br/web-api-desenvolvendo-uma-aplicacao-mvc-com-angularjs/31736
http://draptik.github.io/blog/2013/07/28/restful-crud-with-angularjs/
http://willmendesneto.github.io/2014/10/28/creating-a-crud-in-a-single-angular-controller/