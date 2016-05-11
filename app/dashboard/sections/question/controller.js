
(function () {
    "use strict";
    angular.module("b24jpApp").controller("QuestionCtrl", QuestionCtrl);
    QuestionCtrl.$inject = ["questionResource"];

    function QuestionCtrl(questionResource) {

        var vm = this;

        questionResource.query(function (data) {
            vm.question = data;
        });

    }
}());