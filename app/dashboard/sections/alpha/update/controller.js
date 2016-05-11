
(function () {
    "use strict";
    angular.module("b24jpApp").controller("AlphaUpdateCtrl", AlphaUpdateCtrl);
    AlphaUpdateCtrl.$inject = ["alpha", "$state", "alphaResource"];


    function AlphaUpdateCtrl(alpha, $state, alphaResource) {
        var vm = this;
        vm.alpha = alpha;
        vm.json = "";


        // init functions
        vm.Submit = submit;
        vm.Cancel = cancel;


        if (vm.alpha && vm.alpha.alphaId) {
            vm.title = "Cập nhật ký tự: " + vm.alpha.romaji;
        }
        else {
            vm.title = "Thêm mới";
        }


        function submit() {
            vm.alpha.hiragana = "imgs/hiragana/" + vm.alpha.romaji + ".jpg";
            vm.alpha.katakana = "imgs/katakana/" + vm.alpha.romaji + ".jpg";
            vm.alpha.$save(function (data) {
                Materialize.toast("Cập nhật thành công", 4000);
                if (vm.title == "Thêm mới")
                    vm.alpha.alphaId = 0;
                vm.alpha.romaji = "";
                alphaResource.query(function (data) {
                    vm.json = JSON.stringify(data);
                });
            })
        }

        function cancel() {
            $state.go('dashboard.alpha');
        }
    }
}());

