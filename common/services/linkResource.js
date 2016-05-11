/**
 * Created by Deb on 8/21/2014.
 */
(function () {
    "use strict";

    angular.module("common.services")
        .factory("alphaResource", alphaResource)
        .factory("questionResource", questionResource)
        .factory("testResource", testResource)

    alphaResource.$inject = ["$resource"];
    questionResource.$inject = ["$resource"];
    testResource.$inject = ["$resource"];


    function alphaResource($resource) {
        return $resource("/api/alpha/:alphaId");
    }

    function questionResource($resource) {
        return $resource("/api/question/:questionId");
    }

    function testResource($resource) {
        return $resource("/api/test/:testId");
    }

}());
