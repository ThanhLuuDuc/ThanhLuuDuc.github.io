/**
 * Created by Deb on 8/21/2014.
 */
(function () {
    "use strict";

    var app = angular.module("questionResourceMock", [
        "ngMockE2E"
    ]);

    app.run(function ($httpBackend) {
        var questions =
            [
                {
                    "questionId": 1,
                    "questionContent": "a",
                    "questionAnswer": "wo,te,a,mo"
                },
                {
                    "questionId": 2,
                    "questionContent": "i",
                    "questionAnswer": "ka,to,ro,i"
                },
                {
                    "questionId": 3,
                    "questionContent": "u",
                    "questionAnswer": "u,yo,re,ku"
                },
                {
                    "questionId": 4,
                    "questionContent": "e",
                    "questionAnswer": "su,shi,no,e"
                },
                {
                    "questionId": 5,
                    "questionContent": "o",
                    "questionAnswer": "te,u,o,ra"
                },
                {
                    "questionId": 6,
                    "questionContent": "ka",
                    "questionAnswer": "ka,ho,tsu,mi"
                },
                {
                    "questionId": 7,
                    "questionContent": "ki",
                    "questionAnswer": "ki,ro,se,mi"
                },
                {
                    "questionId": 8,
                    "questionContent": "ku",
                    "questionAnswer": "ku,e,ne,ho"
                },
                {
                    "questionId": 9,
                    "questionContent": "ke",
                    "questionAnswer": "ke,so,n,ma"
                },
                {
                    "questionId": 10,
                    "questionContent": "ko",
                    "questionAnswer": "ha,me,ko,ho"
                },
                {
                    "questionId": 11,
                    "questionContent": "sa",
                    "questionAnswer": "he,ka,sa,i"
                },
                {
                    "questionId": 12,
                    "questionContent": "shi",
                    "questionAnswer": "su,shi,hi,ki"
                },
                {
                    "questionId": 13,
                    "questionContent": "su",
                    "questionAnswer": "re,tsu,su,he"
                },
                {
                    "questionId": 14,
                    "questionContent": "se",
                    "questionAnswer": "tsu,se,ma,ri"
                },
                {
                    "questionId": 15,
                    "questionContent": "so",
                    "questionAnswer": "ta,ha,u,so"
                },
                {
                    "questionId": 16,
                    "questionContent": "ta",
                    "questionAnswer": "ka,ta,ku,hi"
                },
                {
                    "questionId": 17,
                    "questionContent": "chi",
                    "questionAnswer": "hi,ta,ka,chi"
                },
                {
                    "questionId": 18,
                    "questionContent": "tsu",
                    "questionAnswer": "i,mo,so,tsu"
                },
                {
                    "questionId": 19,
                    "questionContent": "te",
                    "questionAnswer": "yu,no,mi,te"
                },
                {
                    "questionId": 20,
                    "questionContent": "to",
                    "questionAnswer": "mi,to,ru,wo"
                },
                {
                    "questionId": 21,
                    "questionContent": "na",
                    "questionAnswer": "no,mi,na,ke"
                },
                {
                    "questionId": 22,
                    "questionContent": "ni",
                    "questionAnswer": "i,ri,me,ni"
                },
                {
                    "questionId": 23,
                    "questionContent": "nu",
                    "questionAnswer": "ka,i,hi,nu"
                },
                {
                    "questionId": 24,
                    "questionContent": "ne",
                    "questionAnswer": "ku,wo,ne,ya"
                },
                {
                    "questionId": 25,
                    "questionContent": "no",
                    "questionAnswer": "n,mo,no,ro"
                },
                {
                    "questionId": 26,
                    "questionContent": "ha",
                    "questionAnswer": "u,ha,hi,sa"
                },
                {
                    "questionId": 27,
                    "questionContent": "hi",
                    "questionAnswer": "wo,na,mi,hi"
                },
                {
                    "questionId": 28,
                    "questionContent": "fu",
                    "questionAnswer": "ru,ki,me,fu"
                },
                {
                    "questionId": 29,
                    "questionContent": "he",
                    "questionAnswer": "yu,wo,ya,he"
                },
                {
                    "questionId": 30,
                    "questionContent": "ho",
                    "questionAnswer": "i,ru,e,ho"
                },
                {
                    "questionId": 31,
                    "questionContent": "ma",
                    "questionAnswer": "mo,ha,ki,ma"
                },
                {
                    "questionId": 32,
                    "questionContent": "mi",
                    "questionAnswer": "yo,hi,mi,ha"
                },
                {
                    "questionId": 33,
                    "questionContent": "mu",
                    "questionAnswer": "u,ma,ne,mu"
                },
                {
                    "questionId": 34,
                    "questionContent": "me",
                    "questionAnswer": "u,wa,nu,me"
                },
                {
                    "questionId": 35,
                    "questionContent": "mo",
                    "questionAnswer": "ya,mo,ke,sa"
                },
                {
                    "questionId": 36,
                    "questionContent": "ya",
                    "questionAnswer": "su,ru,ya,shi"
                },
                {
                    "questionId": 37,
                    "questionContent": "yu",
                    "questionAnswer": "re,ya,ro,yu"
                },
                {
                    "questionId": 38,
                    "questionContent": "yo",
                    "questionAnswer": "yo,he,ke,ne"
                },
                {
                    "questionId": 39,
                    "questionContent": "ra",
                    "questionAnswer": "e,me,ra,no"
                },
                {
                    "questionId": 40,
                    "questionContent": "ri",
                    "questionAnswer": "wa,ri,yu,yo"
                },
                {
                    "questionId": 41,
                    "questionContent": "ru",
                    "questionAnswer": "ru,wa,ka,ki"
                },
                {
                    "questionId": 42,
                    "questionContent": "re",
                    "questionAnswer": "mu,mi,o,re"
                },
                {
                    "questionId": 43,
                    "questionContent": "ro",
                    "questionAnswer": "ya,ne,wa,ro"
                },
                {
                    "questionId": 44,
                    "questionContent": "wa",
                    "questionAnswer": "o,te,mu,wa"
                },
                {
                    "questionId": 45,
                    "questionContent": "wo",
                    "questionAnswer": "yo,mo,wo,re"
                },
                {
                    "questionId": 46,
                    "questionContent": "n",
                    "questionAnswer": "te,ha,i,n"
                },
                {
                    "questionId": 47,
                    "questionContent": "ga",
                    "questionAnswer": "do,zo,pe,ga"
                },
                {
                    "questionId": 48,
                    "questionContent": "gi",
                    "questionAnswer": "po,gi,be,do"
                },
                {
                    "questionId": 49,
                    "questionContent": "gu",
                    "questionAnswer": "bu,bo,gu,ge"
                },
                {
                    "questionId": 50,
                    "questionContent": "ge",
                    "questionAnswer": "gi,zu,pi,ge"
                },
                {
                    "questionId": 51,
                    "questionContent": "go",
                    "questionAnswer": "pi,bi,ji,go"
                },
                {
                    "questionId": 52,
                    "questionContent": "za",
                    "questionAnswer": "do,za,de,pu"
                },
                {
                    "questionId": 53,
                    "questionContent": "ji",
                    "questionAnswer": "zu,ji,de,pi"
                },
                {
                    "questionId": 54,
                    "questionContent": "zu",
                    "questionAnswer": "bi,do,zu,po"
                },
                {
                    "questionId": 55,
                    "questionContent": "ze",
                    "questionAnswer": "be,pa,ze,da"
                },
                {
                    "questionId": 56,
                    "questionContent": "zo",
                    "questionAnswer": "bu,bi,de,zo"
                },
                {
                    "questionId": 57,
                    "questionContent": "da",
                    "questionAnswer": "gu,da,za,bi"
                },
                {
                    "questionId": 58,
                    "questionContent": "ji-s",
                    "questionAnswer": "de,ba,ji-s,do"
                },
                {
                    "questionId": 59,
                    "questionContent": "zu-s",
                    "questionAnswer": "ba,be,do,zu-s"
                },
                {
                    "questionId": 60,
                    "questionContent": "de",
                    "questionAnswer": "de,gi,bi,ji"
                },
                {
                    "questionId": 61,
                    "questionContent": "do",
                    "questionAnswer": "de,bi,ge,do"
                },
                {
                    "questionId": 62,
                    "questionContent": "ba",
                    "questionAnswer": "da,ze,pu,ba"
                },
                {
                    "questionId": 63,
                    "questionContent": "bi",
                    "questionAnswer": "zu,pa,pe,bi"
                },
                {
                    "questionId": 64,
                    "questionContent": "bu",
                    "questionAnswer": "zo,do,bu,pe"
                },
                {
                    "questionId": 65,
                    "questionContent": "be",
                    "questionAnswer": "pe,de,zu,be"
                },
                {
                    "questionId": 66,
                    "questionContent": "bo",
                    "questionAnswer": "gu,pi,bo,zu"
                },
                {
                    "questionId": 67,
                    "questionContent": "pa",
                    "questionAnswer": "go,ge,de,pa"
                },
                {
                    "questionId": 68,
                    "questionContent": "pi",
                    "questionAnswer": "gu,de,ji,pi"
                },
                {
                    "questionId": 69,
                    "questionContent": "pu",
                    "questionAnswer": "pe,pu,zu,bi"
                },
                {
                    "questionId": 70,
                    "questionContent": "pe",
                    "questionAnswer": "gu,da,pe,ze"
                },
                {
                    "questionId": 71,
                    "questionContent": "po",
                    "questionAnswer": "bi,pa,po,pe"
                },
                {
                    "questionId": 72,
                    "questionContent": "kya",
                    "questionAnswer": "sha,mya,hyu,kya"
                },
                {
                    "questionId": 73,
                    "questionContent": "kyu",
                    "questionAnswer": "jo,byu,kyu,shu"
                },
                {
                    "questionId": 74,
                    "questionContent": "kyo",
                    "questionAnswer": "byu,gyu,kyu,kyo"
                },
                {
                    "questionId": 75,
                    "questionContent": "sha",
                    "questionAnswer": "mya,shu,byu,sha"
                },
                {
                    "questionId": 76,
                    "questionContent": "shu",
                    "questionAnswer": "hyo,shu,ryo,nyo"
                },
                {
                    "questionId": 77,
                    "questionContent": "sho",
                    "questionAnswer": "pyu,myo,sho,gyu"
                },
                {
                    "questionId": 78,
                    "questionContent": "cha",
                    "questionAnswer": "pyu,ryo,ju,cha"
                },
                {
                    "questionId": 79,
                    "questionContent": "chu",
                    "questionAnswer": "byu,chu,hyu,ju"
                },
                {
                    "questionId": 80,
                    "questionContent": "cho",
                    "questionAnswer": "ryu,gyu,cha,cho"
                },
                {
                    "questionId": 81,
                    "questionContent": "nya",
                    "questionAnswer": "cha,kyu,sho,nya"
                },
                {
                    "questionId": 82,
                    "questionContent": "nyu",
                    "questionAnswer": "pya,sho,nyu,shu"
                },
                {
                    "questionId": 83,
                    "questionContent": "nyo",
                    "questionAnswer": "ryu,byo,nyo,nyu"
                },
                {
                    "questionId": 84,
                    "questionContent": "hya",
                    "questionAnswer": "hya,gya,cho,nya"
                },
                {
                    "questionId": 85,
                    "questionContent": "hyu",
                    "questionAnswer": "sha,gya,hyu,pyo"
                },
                {
                    "questionId": 86,
                    "questionContent": "hyo",
                    "questionAnswer": "hyu,nya,cha,hyo"
                },
                {
                    "questionId": 87,
                    "questionContent": "mya",
                    "questionAnswer": "pyu,kyu,mya,cha"
                },
                {
                    "questionId": 88,
                    "questionContent": "myu",
                    "questionAnswer": "ryu,rya,ju,myu"
                },
                {
                    "questionId": 89,
                    "questionContent": "myo",
                    "questionAnswer": "nya,cha,ryo,myo"
                },
                {
                    "questionId": 90,
                    "questionContent": "rya",
                    "questionAnswer": "hyo,jo,byu,rya"
                },
                {
                    "questionId": 91,
                    "questionContent": "ryu",
                    "questionAnswer": "jo,myo,cho,ryu"
                },
                {
                    "questionId": 92,
                    "questionContent": "ryo",
                    "questionAnswer": "jo,ryo,pya,nyo"
                },
                {
                    "questionId": 93,
                    "questionContent": "gya",
                    "questionAnswer": "mya,gya,myo,pya"
                },
                {
                    "questionId": 94,
                    "questionContent": "gyu",
                    "questionAnswer": "gyo,chu,hya,gyu"
                },
                {
                    "questionId": 95,
                    "questionContent": "gyo",
                    "questionAnswer": "chu,pyu,nyu,gyo"
                },
                {
                    "questionId": 96,
                    "questionContent": "ja",
                    "questionAnswer": "bya,kyu,nya,ja"
                },
                {
                    "questionId": 97,
                    "questionContent": "ju",
                    "questionAnswer": "bya,ju,kyu,cha"
                },
                {
                    "questionId": 98,
                    "questionContent": "jo",
                    "questionAnswer": "cho,gya,nyo,jo"
                },
                {
                    "questionId": 99,
                    "questionContent": "bya",
                    "questionAnswer": "byu,byo,bya,kyu"
                },
                {
                    "questionId": 100,
                    "questionContent": "byu",
                    "questionAnswer": "byu,rya,ryo,gyu"
                },
                {
                    "questionId": 101,
                    "questionContent": "byo",
                    "questionAnswer": "gyu,ju,byo,pya"
                },
                {
                    "questionId": 102,
                    "questionContent": "pya",
                    "questionAnswer": "sho,ryu,byu,pya"
                },
                {
                    "questionId": 103,
                    "questionContent": "pyu",
                    "questionAnswer": "pya,pyu,bya,ja"
                },
                {
                    "questionId": 104,
                    "questionContent": "pyo",
                    "questionAnswer": "gyu,ryo,ju,pyo"
                }
            ]

        var questionUrl = "/api/question"

        $httpBackend.whenGET(questionUrl).respond(questions);

        var editingRegex = new RegExp(questionUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var question = { "questionId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < questions.length; i++) {
                    if (questions[i].questionId == id) {
                        question = questions[i];
                        break;
                    }
                };
            }
            return [200, question, {}];
        });

        $httpBackend.whenPOST(questionUrl).respond(function (method, url, data) {
            var question = angular.fromJson(data);

            if (!question.questionId) {
                // new question Id
                question.questionId = questions[questions.length - 1].questionId + 1;
                questions.push(question);
            }
            else {
                // Updated question
                for (var i = 0; i < questions.length; i++) {
                    if (questions[i].questionId == question.questionId) {
                        questions[i] = question;
                        break;
                    }
                };
            }
            return [200, question, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();


    })
}());
