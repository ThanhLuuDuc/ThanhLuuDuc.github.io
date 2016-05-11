/**
 * Created by Deb on 8/21/2014.
 */
(function () {
    "use strict";

    var app = angular.module("testResourceMock", [
        "ngMockE2E"
    ]);

    app.run(function ($httpBackend) {
        var tests = [
            {
                "testId": 1,
                "testName": "Hiragana - Test",
                "testDescription": "Chuyển Romaji sang Hiragana",
                "testQuestions": "",
                "testType": "2"
            },
            {
                "testId": 2,
                "testName": "Katakana - Test",
                "testDescription": "Chuyển Romaji sang Katakana",
                "testQuestions": "",
                "testType": "5"
            },
            {
                "testId": 3,
                "testName": "Hiragana - Katakana",
                "testDescription": "Chuyển Hiragana sang Katakana",
                "testQuestions": "",
                "testType": "3"
            },
            {
                "testId": 4,
                "testName": "Katakana - Hiragana",
                "testDescription": "Chuyển Katakana sang Hiragana",
                "testQuestions": "",
                "testType": "4"
            }
        ];

        var testUrl = "/api/test"

        $httpBackend.whenGET(testUrl).respond(tests);

        var editingRegex = new RegExp(testUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var test = { "testId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < tests.length; i++) {
                    if (tests[i].testId == id) {
                        test = tests[i];
                        break;
                    }
                };
            }
            return [200, test, {}];
        });

        $httpBackend.whenPOST(testUrl).respond(function (method, url, data) {
            var test = angular.fromJson(data);

            if (!test.testId) {
                // new test Id
                test.testId = tests[tests.length - 1].testId + 1;
                tests.push(test);
            }
            else {
                // Updated test
                for (var i = 0; i < tests.length; i++) {
                    if (tests[i].testId == test.testId) {
                        tests[i] = test;
                        break;
                    }
                };
            }
            return [200, test, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();


    })
}());
