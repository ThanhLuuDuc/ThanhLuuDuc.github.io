
(function () {
    "use strict";
    angular.module("b24jpApp").controller("TestUpdateCtrl", TestUpdateCtrl);
    TestUpdateCtrl.$inject = ["test", "$state", "testResource"];


    function TestUpdateCtrl(test, $state, testResource) {
        var vm = this;
        vm.test = test;
        vm.json = "";


        // init functions
        vm.Submit = submit;
        vm.Cancel = cancel;


        if (vm.test && vm.test.testId) {
            vm.title = "Cập nhật bài test: " + vm.test.testId;
        }
        else {
            vm.title = "Thêm mới";
        }

        function clearData() {
            if (vm.title == "Thêm mới")
                vm.test.testId = 0;
            vm.test.testName = "";
            vm.test.testDescription = "";
            vm.test.testQuestions = "";
            vm.test.testType = "";
        }

        function submit() {
            vm.test.$save(function (data) {
                Materialize.toast("Cập nhật thành công", 4000);
                clearData();
                testResource.query(function (data) {
                    vm.json = JSON.stringify(data);
                });
            })
        }

        function cancel() {
            $state.go('dashboard.test');
        }
    }
}());

