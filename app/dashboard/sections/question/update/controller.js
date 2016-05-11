
(function () {
    "use strict";
    angular.module("b24jpApp").controller("QuestionUpdateCtrl", QuestionUpdateCtrl);
    QuestionUpdateCtrl.$inject = ["question", "$state", "questionResource"];


    function QuestionUpdateCtrl(question, $state, questionResource) {
        var vm = this;
        vm.question = question;
        vm.json = "";

       

        // init functions
        vm.Submit = submit;
        vm.Cancel = cancel;


        if (vm.question && vm.question.questionId) {
            vm.title = "Cập nhật câu hỏi: " + vm.question.questionId;
        }
        else {
            vm.title = "Thêm mới";
        }

        function clearData() {
            if (vm.title == "Thêm mới")
                vm.question.questionId = 0;
            vm.question.questionContent = "";
            vm.question.questionAnswer = "";
        }

        function submit() {
            

            vm.question.$save(function (data) {
                Materialize.toast("Cập nhật thành công", 4000);
                clearData();
                questionResource.query(function (data) {
                    vm.json = JSON.stringify(data);
                });
            })
            $state.go('dashboard.question');

        }

        function cancel() {
            $state.go('dashboard.question');
        }
    }
}());

