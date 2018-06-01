/// <reference path="./ractive.d.ts" />
// 患者さんに必要な１日の水分量の予測
// 体重(kg) * 30 ~ 35 mL = 必要水分量(mL)
var waterIntake = /** @class */ (function () {
    function waterIntake(weight) {
        this.weight = weight;
    }
    waterIntake.prototype.waterTop = function () {
        return this.weight * 35;
    };
    waterIntake.prototype.waterUnder = function () {
        return this.weight * 30;
    };
    return waterIntake;
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
    var ask = new waterIntake(r.get('kg'));
    var wt = ask.waterTop();
    var wu = ask.waterUnder();
    r.set('re', '患者さんに必要な１日の水分量は ' + wu + 'mL 〜 ' + wt + ' mLです。');
}
r.on({
    enter: function (e) {
        if (e.event.keyCode == 13) {
            exec();
        }
    },
    health: function () {
        exec();
    }
});
