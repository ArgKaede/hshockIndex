/// <reference path="./ractive.d.ts" />
// 成人　： 体重(kg)* 0.6 = 体液量(mL)
// 高齢者： 体重(kg)* 0.5 = 体液量(mL)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./sw.js');
    });
}
var bodyFluidVolume = /** @class */ (function () {
    function bodyFluidVolume(weight) {
        this.weight = weight;
    }
    bodyFluidVolume.prototype.bfvAdult = function () {
        return this.weight * 0.6;
    };
    bodyFluidVolume.prototype.bfvOld = function () {
        return this.weight * 0.5;
    };
    return bodyFluidVolume;
}());
// ractive
var r = new Ractive({
    // el...どこに(cssにおける#id)
    el: '#containar',
    // template...何を(cssにおける#id)
    template: '#template',
    // 初期値を指定
    data: {
        kg: null
    }
});
function exec() {
    var ask = new bodyFluidVolume(r.get('kg'));
    var a = ask.bfvAdult();
    var o = ask.bfvOld();
    // html内の{{reAdult}}に代入
    r.set('reAdult', a + ' mLです。');
    r.set('reOld', o + ' mLです。');
}
r.on({
    enter: function (e) {
        if (e.event.keyCode == 13) {
            exec();
        }
    },
    button: function () {
        exec();
    }
});
