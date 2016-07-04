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
                "hiragana": "あ",
                "katakana": "ア"
            },
            {
                "alphaId": 2,
                "romaji": "i",
                "hiragana": "い",
                "katakana": "イ"
            },
            {
                "alphaId": 3,
                "romaji": "u",
                "hiragana": "う",
                "katakana": "ウ"
            },
            {
                "alphaId": 4,
                "romaji": "e",
                "hiragana": "え",
                "katakana": "エ"
            },
            {
                "alphaId": 5,
                "romaji": "o",
                "hiragana": "お",
                "katakana": "オ"
            },
            {
                "alphaId": 6,
                "romaji": "ka",
                "hiragana": "か",
                "katakana": "カ"
            },
            {
                "alphaId": 7,
                "romaji": "ki",
                "hiragana": "き",
                "katakana": "キ"
            },
            {
                "alphaId": 8,
                "romaji": "ku",
                "hiragana": "く",
                "katakana": "ク"
            },
            {
                "alphaId": 9,
                "romaji": "ke",
                "hiragana": "け",
                "katakana": "ケ"
            },
            {
                "alphaId": 10,
                "romaji": "ko",
                "hiragana": "こ",
                "katakana": "コ"
            },
            {
                "alphaId": 11,
                "romaji": "sa",
                "hiragana": "さ",
                "katakana": "サ"
            },
            {
                "alphaId": 12,
                "romaji": "shi",
                "hiragana": "し",
                "katakana": "シ"
            },
            {
                "alphaId": 13,
                "romaji": "su",
                "hiragana": "す",
                "katakana": "ス"
            },
            {
                "alphaId": 14,
                "romaji": "se",
                "hiragana": "せ",
                "katakana": "セ"
            },
            {
                "alphaId": 15,
                "romaji": "so",
                "hiragana": "そ",
                "katakana": "ソ"
            },
            {
                "alphaId": 16,
                "romaji": "ta",
                "hiragana": "た",
                "katakana": "タ"
            },
            {
                "alphaId": 17,
                "romaji": "chi",
                "hiragana": "ち",
                "katakana": "チ"
            },
            {
                "alphaId": 18,
                "romaji": "tsu",
                "hiragana": "つ",
                "katakana": "ツ"
            },
            {
                "alphaId": 19,
                "romaji": "te",
                "hiragana": "て",
                "katakana": "テ"
            },
            {
                "alphaId": 20,
                "romaji": "to",
                "hiragana": "と",
                "katakana": "ト"
            },
            {
                "alphaId": 21,
                "romaji": "na",
                "hiragana": "な",
                "katakana": "ナ"
            },
            {
                "alphaId": 22,
                "romaji": "ni",
                "hiragana": "に",
                "katakana": "ニ"
            },
            {
                "alphaId": 23,
                "romaji": "nu",
                "hiragana": "ぬ",
                "katakana": "ヌ"
            },
            {
                "alphaId": 24,
                "romaji": "ne",
                "hiragana": "ね",
                "katakana": "ネ"
            },
            {
                "alphaId": 25,
                "romaji": "no",
                "hiragana": "の",
                "katakana": "ノ"
            },
            {
                "alphaId": 26,
                "romaji": "ha",
                "hiragana": "は",
                "katakana": "ハ"
            },
            {
                "alphaId": 27,
                "romaji": "hi",
                "hiragana": "ひ",
                "katakana": "ヒ"
            },
            {
                "alphaId": 28,
                "romaji": "fu",
                "hiragana": "ふ",
                "katakana": "フ"
            },
            {
                "alphaId": 29,
                "romaji": "he",
                "hiragana": "へ",
                "katakana": "ヘ"
            },
            {
                "alphaId": 30,
                "romaji": "ho",
                "hiragana": "ほ",
                "katakana": "ホ"
            },
            {
                "alphaId": 31,
                "romaji": "ma",
                "hiragana": "ま",
                "katakana": "マ"
            },
            {
                "alphaId": 32,
                "romaji": "mi",
                "hiragana": "み",
                "katakana": "ミ"
            },
            {
                "alphaId": 33,
                "romaji": "mu",
                "hiragana": "む",
                "katakana": "ム"
            },
            {
                "alphaId": 34,
                "romaji": "me",
                "hiragana": "め",
                "katakana": "メ"
            },
            {
                "alphaId": 35,
                "romaji": "mo",
                "hiragana": "も",
                "katakana": "モ"
            },
            {
                "alphaId": 36,
                "romaji": "ya",
                "hiragana": "や",
                "katakana": "ヤ"
            },
            {
                "alphaId": 37,
                "romaji": "yu",
                "hiragana": "ゆ",
                "katakana": "ユ"
            },
            {
                "alphaId": 38,
                "romaji": "yo",
                "hiragana": "よ",
                "katakana": "ヨ"
            },
            {
                "alphaId": 39,
                "romaji": "ra",
                "hiragana": "ら",
                "katakana": "ラ"
            },
            {
                "alphaId": 40,
                "romaji": "ri",
                "hiragana": "り",
                "katakana": "リ"
            },
            {
                "alphaId": 41,
                "romaji": "ru",
                "hiragana": "る",
                "katakana": "ル"
            },
            {
                "alphaId": 42,
                "romaji": "re",
                "hiragana": "れ",
                "katakana": "レ"
            },
            {
                "alphaId": 43,
                "romaji": "ro",
                "hiragana": "ろ",
                "katakana": "ロ"
            },
            {
                "alphaId": 44,
                "romaji": "wa",
                "hiragana": "わ",
                "katakana": "ワ"
            },
            {
                "alphaId": 45,
                "romaji": "wo",
                "hiragana": "を",
                "katakana": "ヲ"
            },
            {
                "alphaId": 46,
                "romaji": "n",
                "hiragana": "ん",
                "katakana": "ン"
            },
            {
                "alphaId": 47,
                "romaji": "ga",
                "hiragana": "が",
                "katakana": "ガ"
            },
            {
                "alphaId": 48,
                "romaji": "gi",
                "hiragana": "ぎ",
                "katakana": "ギ"
            },
            {
                "alphaId": 49,
                "romaji": "gu",
                "hiragana": "ぐ",
                "katakana": "グ"
            },
            {
                "alphaId": 50,
                "romaji": "ge",
                "hiragana": "げ",
                "katakana": "ゲ"
            },
            {
                "alphaId": 51,
                "romaji": "go",
                "hiragana": "ご",
                "katakana": "ゴ"
            },
            {
                "alphaId": 52,
                "romaji": "za",
                "hiragana": "ざ",
                "katakana": "ザ"
            },
            {
                "alphaId": 53,
                "romaji": "ji",
                "hiragana": "じ",
                "katakana": "ジ"
            },
            {
                "alphaId": 54,
                "romaji": "zu",
                "hiragana": "ず",
                "katakana": "ズ"
            },
            {
                "alphaId": 55,
                "romaji": "ze",
                "hiragana": "ぜ",
                "katakana": "ゼ"
            },
            {
                "alphaId": 56,
                "romaji": "zo",
                "hiragana": "ぞ",
                "katakana": "ゾ"
            },
            {
                "alphaId": 57,
                "romaji": "da",
                "hiragana": "だ",
                "katakana": "ダ"
            },
            {
                "alphaId": 58,
                "romaji": "ji-s",
                "hiragana": "ぢ",
                "katakana": "ヂ"
            },
            {
                "alphaId": 59,
                "romaji": "zu-s",
                "hiragana": "づ",
                "katakana": "ヅ"
            },
            {
                "alphaId": 60,
                "romaji": "de",
                "hiragana": "で",
                "katakana": "デ"
            },
            {
                "alphaId": 61,
                "romaji": "do",
                "hiragana": "ど",
                "katakana": "ド"
            },
            {
                "alphaId": 62,
                "romaji": "ba",
                "hiragana": "ば",
                "katakana": "バ"
            },
            {
                "alphaId": 63,
                "romaji": "bi",
                "hiragana": "び",
                "katakana": "ビ"
            },
            {
                "alphaId": 64,
                "romaji": "bu",
                "hiragana": "ぶ",
                "katakana": "ブ"
            },
            {
                "alphaId": 65,
                "romaji": "be",
                "hiragana": "べ",
                "katakana": "ブ"
            },
            {
                "alphaId": 66,
                "romaji": "bo",
                "hiragana": "ぼ",
                "katakana": "ボ"
            },
            {
                "alphaId": 67,
                "romaji": "pa",
                "hiragana": "ぱ",
                "katakana": "パ"
            },
            {
                "alphaId": 68,
                "romaji": "pi",
                "hiragana": "ぴ",
                "katakana": "ピ"
            },
            {
                "alphaId": 69,
                "romaji": "pu",
                "hiragana": "ぷ",
                "katakana": "プ"
            },
            {
                "alphaId": 70,
                "romaji": "pe",
                "hiragana": "ぺ",
                "katakana": "ペ"
            },
            {
                "alphaId": 71,
                "romaji": "po",
                "hiragana": "ぽ",
                "katakana": "ポ"
            },
            {
                "alphaId": 72,
                "romaji": "kya",
                "hiragana": "きゃ",
                "katakana": "キャ"
            },
            {
                "alphaId": 73,
                "romaji": "kyu",
                "hiragana": "きゅ",
                "katakana": "キュ"
            },
            {
                "alphaId": 74,
                "romaji": "kyo",
                "hiragana": "きょ",
                "katakana": "キョ"
            },
            {
                "alphaId": 75,
                "romaji": "sha",
                "hiragana": "しゃ",
                "katakana": "シャ"
            },
            {
                "alphaId": 76,
                "romaji": "shu",
                "hiragana": "しゅ",
                "katakana": "シュ"
            },
            {
                "alphaId": 77,
                "romaji": "sho",
                "hiragana": "しょ",
                "katakana": "ショ"
            },
            {
                "alphaId": 78,
                "romaji": "cha",
                "hiragana": "ちゃ",
                "katakana": "チャ"
            },
            {
                "alphaId": 79,
                "romaji": "chu",
                "hiragana": "ちゅ",
                "katakana": "チュ"
            },
            {
                "alphaId": 80,
                "romaji": "cho",
                "hiragana": "ちょ",
                "katakana": "チョ"
            },
            {
                "alphaId": 81,
                "romaji": "nya",
                "hiragana": "にゃ",
                "katakana": "ニャ"
            },
            {
                "alphaId": 82,
                "romaji": "nyu",
                "hiragana": "にゅ",
                "katakana": "ニュ"
            },
            {
                "alphaId": 83,
                "romaji": "nyo",
                "hiragana": "にょ",
                "katakana": "ニョ"
            },
            {
                "alphaId": 84,
                "romaji": "hya",
                "hiragana": "ひゃ",
                "katakana": "ヒャ"
            },
            {
                "alphaId": 85,
                "romaji": "hyu",
                "hiragana": "ひゅ",
                "katakana": "ヒュ"
            },
            {
                "alphaId": 86,
                "romaji": "hyo",
                "hiragana": "ひょ",
                "katakana": "ヒョ"
            },
            {
                "alphaId": 87,
                "romaji": "mya",
                "hiragana": "みゃ",
                "katakana": "ミャ"
            },
            {
                "alphaId": 88,
                "romaji": "myu",
                "hiragana": "みゅ",
                "katakana": "ミュ"
            },
            {
                "alphaId": 89,
                "romaji": "myo",
                "hiragana": "みょ",
                "katakana": "ミョ"
            },
            {
                "alphaId": 90,
                "romaji": "rya",
                "hiragana": "りゃ",
                "katakana": "リャ"
            },
            {
                "alphaId": 91,
                "romaji": "ryu",
                "hiragana": "りゅ",
                "katakana": "リュ"
            },
            {
                "alphaId": 92,
                "romaji": "ryo",
                "hiragana": "りょ",
                "katakana": "リョ"
            },
            {
                "alphaId": 93,
                "romaji": "gya",
                "hiragana": "ぎゃ",
                "katakana": "ギャ"
            },
            {
                "alphaId": 94,
                "romaji": "gyu",
                "hiragana": "ぎゅ",
                "katakana": "ギュ"
            },
            {
                "alphaId": 95,
                "romaji": "gyo",
                "hiragana": "ぎょ",
                "katakana": "ギョ"
            },
            {
                "alphaId": 96,
                "romaji": "ja",
                "hiragana": "じゃ",
                "katakana": "ジャ"
            },
            {
                "alphaId": 97,
                "romaji": "ju",
                "hiragana": "じゅ",
                "katakana": "ジュ"
            },
            {
                "alphaId": 98,
                "romaji": "jo",
                "hiragana": "じょ",
                "katakana": "ジョ"
            },
            {
                "alphaId": 99,
                "romaji": "bya",
                "hiragana": "びゃ",
                "katakana": "ビャ"
            },
            {
                "alphaId": 100,
                "romaji": "byu",
                "hiragana": "びゅ",
                "katakana": "ビュ"
            },
            {
                "alphaId": 101,
                "romaji": "byo",
                "hiragana": "びょ",
                "katakana": "ビョ"
            },
            {
                "alphaId": 102,
                "romaji": "pya",
                "hiragana": "ぴゃ",
                "katakana": "ピャ"
            },
            {
                "alphaId": 103,
                "romaji": "pyu",
                "hiragana": "ぴゅ",
                "katakana": "ピュ"
            },
            {
                "alphaId": 104,
                "romaji": "pyo",
                "hiragana": "ぴょ",
                "katakana": "ピョ"
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
