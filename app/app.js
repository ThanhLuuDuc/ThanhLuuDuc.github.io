
(function () {
    "use strict";
    var app = angular.module("b24jpApp", [
        "common.services",
        "ui.router",
        "alphaResourceMock",
        "questionResourceMock",
        "testResourceMock",
    ]);

    // add filter for make test function
    app.filter('startFrom', function () {
        return function (input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    });

    //app.config(function ($provide) {
    //    $provide.decorator("$exceptionhandler",
    //        ["$delegate",
    //            function ($delegate) {
    //                return function (exception, cause) {
    //                    exception.message = "vui lòng liên hệ: luuducthanh1992@gmail.com ! \n lỗi: " + exception.message;
    //                    $delegate(exception, cause);
    //                    alert(exception.message);
    //                };
    //            }]);
    //});

    app.config(["$stateProvider",
            "$urlRouterProvider",
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/");

                $stateProvider
                    .state("b24jp", {
                        url: "/",
                        templateUrl: "app/main/sections/new/view.html",
                    })
                    .state("page", {
                        abstract: true,
                        url: "/page",
                        templateUrl: "app/main/page.html",
                    })
                    .state("page.test", {
                        url: "/test",
                        templateUrl: "app/main/sections/test/view.html",
                        controller: "ClientTestCtrl as vm",
                    })
                    .state("page.make-test", {
                        url: "/test/:testId",
                        templateUrl: "app/main/sections/test/maketest/view.html",
                        controller: "MakeTestCtrl as vm",
                        resolve: {
                            testResource: "testResource",

                            test: function (testResource, $stateParams) {
                                var testId = $stateParams.testId;
                                return testResource.get({ testId: testId }).$promise;
                            }
                        }

                    })
                    .state("dashboard", {
                        abstract: true,
                        url: "/dashboard",
                        templateUrl: "app/dashboard/dashboard.html",
                    })
                    .state("dashboard.alpha", {
                        url: "/alpha",
                        templateUrl: "app/dashboard/sections/alpha/view.html",
                        controller: "AlphaCtrl as vm",
                    })
                    .state("dashboard.alpha-update", {
                        url: "/alpha/:alphaId",
                        templateUrl: "app/dashboard/sections/alpha/update/view.html",
                        controller: "AlphaUpdateCtrl as vm",
                        resolve: {
                            alphaResource: "alphaResource",

                            alpha: function (alphaResource, $stateParams) {
                                var alphaId = $stateParams.alphaId;
                                return alphaResource.get({ alphaId: alphaId }).$promise;
                            }
                        }
                    })
                    .state("dashboard.test", {
                        url: "/test",
                        templateUrl: "app/dashboard/sections/test/view.html",
                        controller: "TestCtrl as vm",
                    })
                    .state("dashboard.test-update", {
                        url: "/test/:testId",
                        templateUrl: "app/dashboard/sections/test/update/view.html",
                        controller: "TestUpdateCtrl as vm",
                        resolve: {
                            testResource: "testResource",

                            test: function (testResource, $stateParams) {
                                var testId = $stateParams.testId;
                                return testResource.get({ testId: testId }).$promise;
                            }
                        }
                    })
                    .state("dashboard.question", {
                        url: "/question",
                        templateUrl: "app/dashboard/sections/question/view.html",
                        controller: "QuestionCtrl as vm",
                    })
                    .state("dashboard.question-update", {
                        url: "/question/:questionId",
                        templateUrl: "app/dashboard/sections/question/update/view.html",
                        controller: "QuestionUpdateCtrl as vm",
                        resolve: {
                            questionResource: "questionResource",

                            question: function (questionResource, $stateParams) {
                                var questionId = $stateParams.questionId;
                                return questionResource.get({ questionId: questionId }).$promise;
                            }
                        }
                    })
            }]
    );
}());