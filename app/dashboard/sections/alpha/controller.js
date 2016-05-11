
(function () {
    "use strict";
    angular.module("b24jpApp").controller("AlphaCtrl", AlphaCtrl);
    AlphaCtrl.$inject = ["alphaResource"];

    function AlphaCtrl(alphaResource) {

        var vm = this;

        alphaResource.query(function (data) {
            vm.alpha = data;
        });

    }
}());