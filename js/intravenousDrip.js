/// <reference path="./ractive.d.ts" />
// 大人用の輸液ライン　全体の輸液量 / かかる時間　* 20
// 子供用の輸液ライン 全体の輸液量 / かかる時間　* 60
// 以下やりたいこと
// 結果を表示する際、小数点以下を切り捨て
// 分と時間をプル選択できるようにする
var intravenousDrip = /** @class */ (function () {
    function intravenousDrip(infusion, time) {
        this.infusion = infusion;
        this.time = time;
        this.adult = this.infusion / this.time * 20;
        this.child = this.infusion / this.time * 60;
    }
    intravenousDrip.prototype.idAdult = function () {
        return this.adult;
    };
    intravenousDrip.prototype.idAdultS = function () {
        var a = this.adult / 60;
        return a * 3;
    };
    intravenousDrip.prototype.idChild = function () {
        return this.child;
    };
    intravenousDrip.prototype.idChildS = function () {
        var b = this.child / 60;
        return b * 3;
    };
    return intravenousDrip;
}());
var r = new Ractive({
    el: '#containar',
    template: '#template',
    data: {
        ml: 500,
        m: 240
    }
});
function exec() {
    var ask = new intravenousDrip(r.get('ml'), r.get('m'));
    var resultAdult = ask.idAdult();
    var resultAdultS = ask.idAdultS();
    var resultChild = ask.idChild();
    var resultChildS = ask.idChildS();
    r.set('reAdult', '１分あたり' + resultAdult + '滴です。');
    r.set('reAdultS', '３秒あたり' + resultAdultS + '滴です。');
    r.set('reChild', '１分あたり' + resultChild + '滴です。');
    r.set('reChildS', '３秒あたり' + resultChildS + '滴です。');
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
