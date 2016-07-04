
(function () {
    "use strict";
    angular.module("b24jpApp").controller("MakeTestCtrl", MakeTestCtrl);
    MakeTestCtrl.$inject = ["test", "$state", "testResource", "questionResource", "alphaResource", "$timeout"];

    function MakeTestCtrl(test, $state, testResource, questionResource, alphaResource, $timeout) {
        var vm = this;

        // init timer
        var timer;
        vm.TimerCount = 0;

        //get type test
        vm.TestType = test.testType;

        //init resource
        vm.Alpha = null;

        // init status
        vm.percent = 0
        vm.ShowTest = false;
        vm.TestStart = true;
        vm.TestEnd = false;
        vm.test = test;
        vm.SelectedIndex = null;
        vm.CheckboxChecked = false;
        vm.Check = 0;

        // init config test
        vm.Config = {
            NumberQuestion: 20,
            TimeQuestion: 15
        }


        // init question testss
        vm.question = [];
        vm.answer = [];
        vm.WrongAnswer = [];
        vm.MarkTrueAnswer = 0;
        vm.MarkFalseAnswer = 0;
        vm.CurrentQuestion = 0;

        // init functions
        vm.Start = start;
        vm.Submit = submit;
        vm.ExitTest = exitTest;
        vm.ShowConfirm = showConfirm;
        vm.CloseConfirm = closeConfirm;
        vm.CheckAnswer = checkAnswer;
        vm.NextQuestion = nextQuestion;
        vm.PrevQuestion = prevQuestion;

        function initTest() {
            // set time count down
            vm.TimerCount = Number(vm.Config.TimeQuestion);
            // reset timer
            $timeout.cancel(timer);

            vm.test.length = vm.test.testQuestions.split(',').length;
            vm.idTestQuestions = vm.test.testQuestions.split(',')

            // get question for current test
            questionResource.query(function (data) {

                while (vm.question.length < vm.Config.NumberQuestion) {
                    var randomnumber = Math.ceil(Math.random() * 104)
                    var found = false;
                    for (var i = 0; i < vm.question.length; i++) {
                        if (vm.question[i] == data[randomnumber]) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        try {
                            vm.question[vm.question.length] = data[randomnumber];
                            vm.question[vm.question.length - 1].questionAnswer = vm.question[vm.question.length - 1].questionAnswer.split(',');
                        }
                        catch (err) {
                            //console.log(err);
                            vm.question.pop();
                        }

                    }
                }

                alphaResource.query(function (data) {
                    vm.Alpha = data;
                    for (var i = 0; i < vm.question.length; i++)
                        for (var j = 0; j < 4; j++)
                            for (var k = 0; k < data.length; k++) {
                                if (vm.question[i].questionAnswer[j] == data[k].romaji)
                                    vm.question[i].questionAnswer[j] = data[k];
                            }

                    for (var i = 0; i < vm.question.length; i++)
                        for (var j = 0; j < data.length; j++)
                            if (vm.question[i].questionContent == data[j].romaji) {
                                if (vm.TestType == 3)
                                    vm.question[i].imageContent = data[j].hiragana;
                                else if (vm.TestType == 4)
                                    vm.question[i].imageContent = data[j].katakana;
                            }

                });
            });
        }

        // reset status form
        function resetTest() {
            vm.TestStart = false;
            vm.ShowTest = true;
            vm.CurrentQuestion = 0;
            vm.MarkTrueAnswer = 0;
            vm.MarkFalseAnswer = 0;
            vm.WrongAnswer = [];
            vm.percent = ((vm.CurrentQuestion + 1) / vm.Config.NumberQuestion * 100).toString() + '%';
        }

        function timerCountDown() {
            vm.TimerCount -= 1;
            timer = $timeout(timerCountDown, 1000);
            if (vm.TimerCount < -1) {
                vm.MarkFalseAnswer += 1;
                vm.WrongAnswer.push(vm.question[vm.CurrentQuestion]);
                nextQuestion();
            }
        }


        function checkAnswer(answer, result, index) {
            vm.CheckboxChecked = true;
            vm.SelectedIndex = index;
            if (answer == result) {
                vm.MarkTrueAnswer += 1;
            }
            else {
                vm.MarkFalseAnswer += 1;
                vm.WrongAnswer.push(vm.question[vm.CurrentQuestion]);
            }
            $timeout(nextQuestion, 1000);
        }

        function start() {
            resetTest();
            initTest();
            timerCountDown();
        }

        function submit() {

        }

        function nextQuestion() {
            // reset status question
            $timeout.cancel(timer);
            vm.CheckboxChecked = false;
            vm.SelectedIndex = null;
            if (vm.CurrentQuestion + 1 < vm.Config.NumberQuestion) {
                vm.CurrentQuestion += 1;
                vm.percent = ((vm.CurrentQuestion + 1) / vm.Config.NumberQuestion * 100).toString() + '%';
                vm.TimerCount = vm.Config.TimeQuestion;
                timer = $timeout(timerCountDown, 1000);
            }
            else {
                vm.CurrentQuestion += 1;
                for (var i = 0; i < vm.WrongAnswer.length; i++) {
                    if (vm.TestType % 2 == 0)
                        vm.WrongAnswer[i].imageContent = "imgs/hiragana/" + vm.WrongAnswer[i].questionContent + ".jpg";
                    else
                        vm.WrongAnswer[i].imageContent = "imgs/katakana/" + vm.WrongAnswer[i].questionContent + ".jpg";

                }
            }
        }

        function prevQuestion() {
            vm.CurrentQuestion -= 1;
        }

        function exitTest() {
            closeConfirm();
            $state.go('page.test');
        }

        // show alpha
        function showConfirm() {
            $('#modal-confirm').openModal();
        }

        function closeConfirm() {
            $('#modal-confirm').closeModal();
        }
    }
} ());

