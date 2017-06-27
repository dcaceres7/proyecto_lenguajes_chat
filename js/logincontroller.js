angular.module('loginApp', []).controller('loginCtrl', function($http) {
    var lg = this;
    lg.request = {
        email: '',
        password: ''
    }

    lg.submit = function(){
        $http.post("https://frozen-atoll-60502.herokuapp.com/api/auth/login",JSON.stringify(lg.request))
        .then(function(response) {
            console.log(response);
			console.log("Llegue hasta aqui");
        }).catch(function(error){
            console.log('error', error)
    });
    }
});