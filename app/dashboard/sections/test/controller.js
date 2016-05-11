
(function () {
    "use strict";
    angular.module("b24jpApp").controller("TestCtrl", TestCtrl);
    TestCtrl.$inject = ["testResource"];

    function TestCtrl(testResource) {

        var vm = this;

        testResource.query(function (data) {
            vm.test = data;
        });

    }
}());