/**
 * Created by Deb on 8/21/2014.
 */
(function () {
    "use strict";

    var app = angular.module("alphaResourceMock", [
        "ngMockE2E"
    ]);

    app.run(function ($httpBackend) {
        var alphas = [
            {
                "alphaId": 1,
                "romaji": "a",
                "hiragana": "imgs/hiragana/a.jpg",
                "katakana": "imgs/katakana/a.jpg"
            },
            {
                "alphaId": 2,
                "romaji": "i",
                "hiragana": "imgs/hiragana/i.jpg",
                "katakana": "imgs/katakana/i.jpg"
            },
            {
                "alphaId": 3,
                "romaji": "u",
                "hiragana": "imgs/hiragana/u.jpg",
                "katakana": "imgs/katakana/u.jpg"
            },
            {
                "alphaId": 4,
                "romaji": "e",
                "hiragana": "imgs/hiragana/e.jpg",
                "katakana": "imgs/katakana/e.jpg"
            },
            {
                "alphaId": 5,
                "romaji": "o",
                "hiragana": "imgs/hiragana/o.jpg",
                "katakana": "imgs/katakana/o.jpg"
            },
            {
                "alphaId": 6,
                "romaji": "ka",
                "hiragana": "imgs/hiragana/ka.jpg",
                "katakana": "imgs/katakana/ka.jpg"
            },
            {
                "alphaId": 7,
                "romaji": "ki",
                "hiragana": "imgs/hiragana/ki.jpg",
                "katakana": "imgs/katakana/ki.jpg"
            },
            {
                "alphaId": 8,
                "romaji": "ku",
                "hiragana": "imgs/hiragana/ku.jpg",
                "katakana": "imgs/katakana/ku.jpg"
            },
            {
                "alphaId": 9,
                "romaji": "ke",
                "hiragana": "imgs/hiragana/ke.jpg",
                "katakana": "imgs/katakana/ke.jpg"
            },
            {
                "alphaId": 10,
                "romaji": "ko",
                "hiragana": "imgs/hiragana/ko.jpg",
                "katakana": "imgs/katakana/ko.jpg"
            },
            {
                "alphaId": 11,
                "romaji": "sa",
                "hiragana": "imgs/hiragana/sa.jpg",
                "katakana": "imgs/katakana/sa.jpg"
            },
            {
                "alphaId": 12,
                "romaji": "shi",
                "hiragana": "imgs/hiragana/shi.jpg",
                "katakana": "imgs/katakana/shi.jpg"
            },
            {
                "alphaId": 13,
                "romaji": "su",
                "hiragana": "imgs/hiragana/su.jpg",
                "katakana": "imgs/katakana/su.jpg"
            },
            {
                "alphaId": 14,
                "romaji": "se",
                "hiragana": "imgs/hiragana/se.jpg",
                "katakana": "imgs/katakana/se.jpg"
            },
            {
                "alphaId": 15,
                "romaji": "so",
                "hiragana": "imgs/hiragana/so.jpg",
                "katakana": "imgs/katakana/so.jpg"
            },
            {
                "alphaId": 16,
                "romaji": "ta",
                "hiragana": "imgs/hiragana/ta.jpg",
                "katakana": "imgs/katakana/ta.jpg"
            },
            {
                "alphaId": 17,
                "romaji": "chi",
                "hiragana": "imgs/hiragana/chi.jpg",
                "katakana": "imgs/katakana/chi.jpg"
            },
            {
                "alphaId": 18,
                "romaji": "tsu",
                "hiragana": "imgs/hiragana/tsu.jpg",
                "katakana": "imgs/katakana/tsu.jpg"
            },
            {
                "alphaId": 19,
                "romaji": "te",
                "hiragana": "imgs/hiragana/te.jpg",
                "katakana": "imgs/katakana/te.jpg"
            },
            {
                "alphaId": 20,
                "romaji": "to",
                "hiragana": "imgs/hiragana/to.jpg",
                "katakana": "imgs/katakana/to.jpg"
            },
            {
                "alphaId": 21,
                "romaji": "na",
                "hiragana": "imgs/hiragana/na.jpg",
                "katakana": "imgs/katakana/na.jpg"
            },
            {
                "alphaId": 22,
                "romaji": "ni",
                "hiragana": "imgs/hiragana/ni.jpg",
                "katakana": "imgs/katakana/ni.jpg"
            },
            {
                "alphaId": 23,
                "romaji": "nu",
                "hiragana": "imgs/hiragana/nu.jpg",
                "katakana": "imgs/katakana/nu.jpg"
            },
            {
                "alphaId": 24,
                "romaji": "ne",
                "hiragana": "imgs/hiragana/ne.jpg",
                "katakana": "imgs/katakana/ne.jpg"
            },
            {
                "alphaId": 25,
                "romaji": "no",
                "hiragana": "imgs/hiragana/no.jpg",
                "katakana": "imgs/katakana/no.jpg"
            },
            {
                "alphaId": 26,
                "romaji": "ha",
                "hiragana": "imgs/hiragana/ha.jpg",
                "katakana": "imgs/katakana/ha.jpg"
            },
            {
                "alphaId": 27,
                "romaji": "hi",
                "hiragana": "imgs/hiragana/hi.jpg",
                "katakana": "imgs/katakana/hi.jpg"
            },
            {
                "alphaId": 28,
                "romaji": "fu",
                "hiragana": "imgs/hiragana/fu.jpg",
                "katakana": "imgs/katakana/fu.jpg"
            },
            {
                "alphaId": 29,
                "romaji": "he",
                "hiragana": "imgs/hiragana/he.jpg",
                "katakana": "imgs/katakana/he.jpg"
            },
            {
                "alphaId": 30,
                "romaji": "ho",
                "hiragana": "imgs/hiragana/ho.jpg",
                "katakana": "imgs/katakana/ho.jpg"
            },
            {
                "alphaId": 31,
                "romaji": "ma",
                "hiragana": "imgs/hiragana/ma.jpg",
                "katakana": "imgs/katakana/ma.jpg"
            },
            {
                "alphaId": 32,
                "romaji": "mi",
                "hiragana": "imgs/hiragana/mi.jpg",
                "katakana": "imgs/katakana/mi.jpg"
            },
            {
                "alphaId": 33,
                "romaji": "mu",
                "hiragana": "imgs/hiragana/mu.jpg",
                "katakana": "imgs/katakana/mu.jpg"
            },
            {
                "alphaId": 34,
                "romaji": "me",
                "hiragana": "imgs/hiragana/me.jpg",
                "katakana": "imgs/katakana/me.jpg"
            },
            {
                "alphaId": 35,
                "romaji": "mo",
                "hiragana": "imgs/hiragana/mo.jpg",
                "katakana": "imgs/katakana/mo.jpg"
            },
            {
                "alphaId": 36,
                "romaji": "ya",
                "hiragana": "imgs/hiragana/ya.jpg",
                "katakana": "imgs/katakana/ya.jpg"
            },
            {
                "alphaId": 37,
                "romaji": "yu",
                "hiragana": "imgs/hiragana/yu.jpg",
                "katakana": "imgs/katakana/yu.jpg"
            },
            {
                "alphaId": 38,
                "romaji": "yo",
                "hiragana": "imgs/hiragana/yo.jpg",
                "katakana": "imgs/katakana/yo.jpg"
            },
            {
                "alphaId": 39,
                "romaji": "ra",
                "hiragana": "imgs/hiragana/ra.jpg",
                "katakana": "imgs/katakana/ra.jpg"
            },
            {
                "alphaId": 40,
                "romaji": "ri",
                "hiragana": "imgs/hiragana/ri.jpg",
                "katakana": "imgs/katakana/ri.jpg"
            },
            {
                "alphaId": 41,
                "romaji": "ru",
                "hiragana": "imgs/hiragana/ru.jpg",
                "katakana": "imgs/katakana/ru.jpg"
            },
            {
                "alphaId": 42,
                "romaji": "re",
                "hiragana": "imgs/hiragana/re.jpg",
                "katakana": "imgs/katakana/re.jpg"
            },
            {
                "alphaId": 43,
                "romaji": "ro",
                "hiragana": "imgs/hiragana/ro.jpg",
                "katakana": "imgs/katakana/ro.jpg"
            },
            {
                "alphaId": 44,
                "romaji": "wa",
                "hiragana": "imgs/hiragana/wa.jpg",
                "katakana": "imgs/katakana/wa.jpg"
            },
            {
                "alphaId": 45,
                "romaji": "wo",
                "hiragana": "imgs/hiragana/wo.jpg",
                "katakana": "imgs/katakana/wo.jpg"
            },
            {
                "alphaId": 46,
                "romaji": "n",
                "hiragana": "imgs/hiragana/n.jpg",
                "katakana": "imgs/katakana/n.jpg"
            },
            {
                "alphaId": 47,
                "romaji": "ga",
                "hiragana": "imgs/hiragana/ga.jpg",
                "katakana": "imgs/katakana/ga.jpg"
            },
            {
                "alphaId": 48,
                "romaji": "gi",
                "hiragana": "imgs/hiragana/gi.jpg",
                "katakana": "imgs/katakana/gi.jpg"
            },
            {
                "alphaId": 49,
                "romaji": "gu",
                "hiragana": "imgs/hiragana/gu.jpg",
                "katakana": "imgs/katakana/gu.jpg"
            },
            {
                "alphaId": 50,
                "romaji": "ge",
                "hiragana": "imgs/hiragana/ge.jpg",
                "katakana": "imgs/katakana/ge.jpg"
            },
            {
                "alphaId": 51,
                "romaji": "go",
                "hiragana": "imgs/hiragana/go.jpg",
                "katakana": "imgs/katakana/go.jpg"
            },
            {
                "alphaId": 52,
                "romaji": "za",
                "hiragana": "imgs/hiragana/za.jpg",
                "katakana": "imgs/katakana/za.jpg"
            },
            {
                "alphaId": 53,
                "romaji": "ji",
                "hiragana": "imgs/hiragana/ji.jpg",
                "katakana": "imgs/katakana/ji.jpg"
            },
            {
                "alphaId": 54,
                "romaji": "zu",
                "hiragana": "imgs/hiragana/zu.jpg",
                "katakana": "imgs/katakana/zu.jpg"
            },
            {
                "alphaId": 55,
                "romaji": "ze",
                "hiragana": "imgs/hiragana/ze.jpg",
                "katakana": "imgs/katakana/ze.jpg"
            },
            {
                "alphaId": 56,
                "romaji": "zo",
                "hiragana": "imgs/hiragana/zo.jpg",
                "katakana": "imgs/katakana/zo.jpg"
            },
            {
                "alphaId": 57,
                "romaji": "da",
                "hiragana": "imgs/hiragana/da.jpg",
                "katakana": "imgs/katakana/da.jpg"
            },
            {
                "alphaId": 58,
                "romaji": "ji-s",
                "hiragana": "imgs/hiragana/ji-s.jpg",
                "katakana": "imgs/katakana/ji-s.jpg"
            },
            {
                "alphaId": 59,
                "romaji": "zu-s",
                "hiragana": "imgs/hiragana/zu-s.jpg",
                "katakana": "imgs/katakana/zu-s.jpg"
            },
            {
                "alphaId": 60,
                "romaji": "de",
                "hiragana": "imgs/hiragana/de.jpg",
                "katakana": "imgs/katakana/de.jpg"
            },
            {
                "alphaId": 61,
                "romaji": "do",
                "hiragana": "imgs/hiragana/do.jpg",
                "katakana": "imgs/katakana/do.jpg"
            },
            {
                "alphaId": 62,
                "romaji": "ba",
                "hiragana": "imgs/hiragana/ba.jpg",
                "katakana": "imgs/katakana/ba.jpg"
            },
            {
                "alphaId": 63,
                "romaji": "bi",
                "hiragana": "imgs/hiragana/bi.jpg",
                "katakana": "imgs/katakana/bi.jpg"
            },
            {
                "alphaId": 64,
                "romaji": "bu",
                "hiragana": "imgs/hiragana/bu.jpg",
                "katakana": "imgs/katakana/bu.jpg"
            },
            {
                "alphaId": 65,
                "romaji": "be",
                "hiragana": "imgs/hiragana/be.jpg",
                "katakana": "imgs/katakana/be.jpg"
            },
            {
                "alphaId": 66,
                "romaji": "bo",
                "hiragana": "imgs/hiragana/bo.jpg",
                "katakana": "imgs/katakana/bo.jpg"
            },
            {
                "alphaId": 67,
                "romaji": "pa",
                "hiragana": "imgs/hiragana/pa.jpg",
                "katakana": "imgs/katakana/pa.jpg"
            },
            {
                "alphaId": 68,
                "romaji": "pi",
                "hiragana": "imgs/hiragana/pi.jpg",
                "katakana": "imgs/katakana/pi.jpg"
            },
            {
                "alphaId": 69,
                "romaji": "pu",
                "hiragana": "imgs/hiragana/pu.jpg",
                "katakana": "imgs/katakana/pu.jpg"
            },
            {
                "alphaId": 70,
                "romaji": "pe",
                "hiragana": "imgs/hiragana/pe.jpg",
                "katakana": "imgs/katakana/pe.jpg"
            },
            {
                "alphaId": 71,
                "romaji": "po",
                "hiragana": "imgs/hiragana/po.jpg",
                "katakana": "imgs/katakana/po.jpg"
            },
            {
                "alphaId": 72,
                "romaji": "kya",
                "hiragana": "imgs/hiragana/kya.jpg",
                "katakana": "imgs/katakana/kya.jpg"
            },
            {
                "alphaId": 73,
                "romaji": "kyu",
                "hiragana": "imgs/hiragana/kyu.jpg",
                "katakana": "imgs/katakana/kyu.jpg"
            },
            {
                "alphaId": 74,
                "romaji": "kyo",
                "hiragana": "imgs/hiragana/kyo.jpg",
                "katakana": "imgs/katakana/kyo.jpg"
            },
            {
                "alphaId": 75,
                "romaji": "sha",
                "hiragana": "imgs/hiragana/sha.jpg",
                "katakana": "imgs/katakana/sha.jpg"
            },
            {
                "alphaId": 76,
                "romaji": "shu",
                "hiragana": "imgs/hiragana/shu.jpg",
                "katakana": "imgs/katakana/shu.jpg"
            },
            {
                "alphaId": 77,
                "romaji": "sho",
                "hiragana": "imgs/hiragana/sho.jpg",
                "katakana": "imgs/katakana/sho.jpg"
            },
            {
                "alphaId": 78,
                "romaji": "cha",
                "hiragana": "imgs/hiragana/cha.jpg",
                "katakana": "imgs/katakana/cha.jpg"
            },
            {
                "alphaId": 79,
                "romaji": "chu",
                "hiragana": "imgs/hiragana/chu.jpg",
                "katakana": "imgs/katakana/chu.jpg"
            },
            {
                "alphaId": 80,
                "romaji": "cho",
                "hiragana": "imgs/hiragana/cho.jpg",
                "katakana": "imgs/katakana/cho.jpg"
            },
            {
                "alphaId": 81,
                "romaji": "nya",
                "hiragana": "imgs/hiragana/nya.jpg",
                "katakana": "imgs/katakana/nya.jpg"
            },
            {
                "alphaId": 82,
                "romaji": "nyu",
                "hiragana": "imgs/hiragana/nyu.jpg",
                "katakana": "imgs/katakana/nyu.jpg"
            },
            {
                "alphaId": 83,
                "romaji": "nyo",
                "hiragana": "imgs/hiragana/nyo.jpg",
                "katakana": "imgs/katakana/nyo.jpg"
            },
            {
                "alphaId": 84,
                "romaji": "hya",
                "hiragana": "imgs/hiragana/hya.jpg",
                "katakana": "imgs/katakana/hya.jpg"
            },
            {
                "alphaId": 85,
                "romaji": "hyu",
                "hiragana": "imgs/hiragana/hyu.jpg",
                "katakana": "imgs/katakana/hyu.jpg"
            },
            {
                "alphaId": 86,
                "romaji": "hyo",
                "hiragana": "imgs/hiragana/hyo.jpg",
                "katakana": "imgs/katakana/hyo.jpg"
            },
            {
                "alphaId": 87,
                "romaji": "mya",
                "hiragana": "imgs/hiragana/mya.jpg",
                "katakana": "imgs/katakana/mya.jpg"
            },
            {
                "alphaId": 88,
                "romaji": "myu",
                "hiragana": "imgs/hiragana/myu.jpg",
                "katakana": "imgs/katakana/myu.jpg"
            },
            {
                "alphaId": 89,
                "romaji": "myo",
                "hiragana": "imgs/hiragana/myo.jpg",
                "katakana": "imgs/katakana/myo.jpg"
            },
            {
                "alphaId": 90,
                "romaji": "rya",
                "hiragana": "imgs/hiragana/rya.jpg",
                "katakana": "imgs/katakana/rya.jpg"
            },
            {
                "alphaId": 91,
                "romaji": "ryu",
                "hiragana": "imgs/hiragana/ryu.jpg",
                "katakana": "imgs/katakana/ryu.jpg"
            },
            {
                "alphaId": 92,
                "romaji": "ryo",
                "hiragana": "imgs/hiragana/ryo.jpg",
                "katakana": "imgs/katakana/ryo.jpg"
            },
            {
                "alphaId": 93,
                "romaji": "gya",
                "hiragana": "imgs/hiragana/gya.jpg",
                "katakana": "imgs/katakana/gya.jpg"
            },
            {
                "alphaId": 94,
                "romaji": "gyu",
                "hiragana": "imgs/hiragana/gyu.jpg",
                "katakana": "imgs/katakana/gyu.jpg"
            },
            {
                "alphaId": 95,
                "romaji": "gyo",
                "hiragana": "imgs/hiragana/gyo.jpg",
                "katakana": "imgs/katakana/gyo.jpg"
            },
            {
                "alphaId": 96,
                "romaji": "ja",
                "hiragana": "imgs/hiragana/ja.jpg",
                "katakana": "imgs/katakana/ja.jpg"
            },
            {
                "alphaId": 97,
                "romaji": "ju",
                "hiragana": "imgs/hiragana/ju.jpg",
                "katakana": "imgs/katakana/ju.jpg"
            },
            {
                "alphaId": 98,
                "romaji": "jo",
                "hiragana": "imgs/hiragana/jo.jpg",
                "katakana": "imgs/katakana/jo.jpg"
            },
            {
                "alphaId": 99,
                "romaji": "bya",
                "hiragana": "imgs/hiragana/bya.jpg",
                "katakana": "imgs/katakana/bya.jpg"
            },
            {
                "alphaId": 100,
                "romaji": "byu",
                "hiragana": "imgs/hiragana/byu.jpg",
                "katakana": "imgs/katakana/byu.jpg"
            },
            {
                "alphaId": 101,
                "romaji": "byo",
                "hiragana": "imgs/hiragana/byo.jpg",
                "katakana": "imgs/katakana/byo.jpg"
            },
            {
                "alphaId": 102,
                "romaji": "pya",
                "hiragana": "imgs/hiragana/pya.jpg",
                "katakana": "imgs/katakana/pya.jpg"
            },
            {
                "alphaId": 103,
                "romaji": "pyu",
                "hiragana": "imgs/hiragana/pyu.jpg",
                "katakana": "imgs/katakana/pyu.jpg"
            },
            {
                "alphaId": 104,
                "romaji": "pyo",
                "hiragana": "imgs/hiragana/pyo.jpg",
                "katakana": "imgs/katakana/pyo.jpg"
            }
        ];

        var alphaUrl = "/api/alpha"

        $httpBackend.whenGET(alphaUrl).respond(alphas);

        var editingRegex = new RegExp(alphaUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var alpha = { "alphaId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < alphas.length; i++) {
                    if (alphas[i].alphaId == id) {
                        alpha = alphas[i];
                        break;
                    }
                };
            }
            return [200, alpha, {}];
        });

        $httpBackend.whenPOST(alphaUrl).respond(function (method, url, data) {
            var alpha = angular.fromJson(data);

            if (!alpha.alphaId) {
                // new alpha Id
                alpha.alphaId = alphas[alphas.length - 1].alphaId + 1;
                alphas.push(alpha);
            }
            else {
                // Updated alpha
                for (var i = 0; i < alphas.length; i++) {
                    if (alphas[i].alphaId == alpha.alphaId) {
                        alphas[i] = alpha;
                        break;
                    }
                };
            }
            return [200, alpha, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();


    })
}());
