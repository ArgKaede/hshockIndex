/// <reference path="./ractive.d.ts" />
// ↑別のファイル読み込み（refで召喚）
// ractive.jsとractive.d.tsはローカルで一緒に保存
// Na 135~148mEq/l
//水分欠乏量　体重　× 0.6
//ショックインデックス(内出血しているかどうか 正常0.5 軽度1.0 中1.5 重度2.0)　= 心拍数(60~99回/分)/収縮器血圧(100~130)
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.print = function () {
        console.log(this.x, this.y);
    };
    return Point;
}());
var p = new Point(3, 6);
p.print();
// ↓このまま覚える
var r = new Ractive({
    // el...どこに(cssにおける#id)
    el: '#containar',
    // template...何を(cssにおける#id)
    template: '#template',
    // 初期値を指定
    data: {
        n: 'sagaru',
        hr: 60,
        sbp: 100,
        shv: 0
    }
});
function exec() {
    var sagaru = new health(r.get('n'), r.get('hr'), r.get('sbp'));
    var result = sagaru.hshockIndex();
    // ractiveの変数reにresultを代入
    r.set('re', r.get('n') + 'さんのショックインデックス値は' + result);
    var value = sagaru.shValue();
    r.set('shv', value);
}
// イベント設定
// .on...基本的にbuttonを押された時に実行
// 変数rに対して対応表を渡す
// 命令：実行内容 
// get set 覚える
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
