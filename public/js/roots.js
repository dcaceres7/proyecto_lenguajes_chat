angular.module('myApp', []).controller('appCtrl', function($http) {
    var vm = this;
    vm.request = {
        name : '',
        userName: '',
        email: '',
        password: '',
        role: 'Member'
    }

    vm.submit = function(){
        $http.post("https://frozen-atoll-60502.herokuapp.com/api/auth/register",JSON.stringify(vm.request))
        .then(function(response) {
            console.log(response);
        }).catch(function(error){
            console.log('error', error)
    });
    }


});