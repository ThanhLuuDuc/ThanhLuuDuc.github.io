
(function () {
    "use strict";
    angular.module("b24jpApp").controller("ClientTestCtrl", ClientTestCtrl);
    ClientTestCtrl.$inject = ["testResource"];

    function ClientTestCtrl(testResource) {

        var vm = this;

        vm.ShowAlpha = showAlpha;
        vm.CloseAlpha = closeAlpha;

        function showAlpha() {
            $('#alpha').openModal();
        }

        function closeAlpha() {
            $('#alpha').closeModal();
        }

        testResource.query(function (data) {
            vm.test = data;
        });

    }
}());