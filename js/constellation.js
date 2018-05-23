/// <reference path="./ractive.d.ts" />
// みずがめ座   Aquarius    1/20 - 2/18
// うお座       Pisces  2/19 -3/20
// おひつじ座   Aries   3/21 - 4/19
// おうし座     Taurus  4/20 - 5/20
// ふたご座     Gemini  5/21 - 6/21
// かに座       Cancer  6/22 - 7/22
// しし座       Leo     7/23 - 8/22
// おとめ座     Virgo   8/23 - 9/22
// てんびん座   Libra   9/23 - 10/23
// さそり座     Scorpio 10/24 - 11/22
// いて座       Sagittarius 11/24 - 12/23
// やぎ座       Capricorn   12/24 - 1/19
var constellation = /** @class */ (function () {
    function constellation(month, day) {
        this.month = month;
        this.day = day;
    }
    constellation.prototype.askConstellation = function () {
        var m = this.month;
        var d = this.day;
        if (m < 2) {
            if (d < 20) {
                return 'やぎ座';
            }
            else if (d > 19) {
                return 'みずがめ座';
            }
        }
        else if (m < 3) {
            if (d < 19) {
                return 'みずがめ座';
            }
            else if (d > 18) {
                return 'うお座';
            }
        }
        else if (m < 4) {
            if (d < 21) {
                return 'うお座';
            }
            else if (d > 20) {
                return 'おひつじ座';
            }
        }
        else if (m < 5) {
            if (d < 20) {
                return 'おひつじ座';
            }
            else if (d > 19) {
                return 'おうし座';
            }
        }
        else if (m < 6) {
            if (d < 21) {
                return 'おうし座';
            }
            else if (d > 20) {
                return 'ふたご座';
            }
        }
        else if (m < 7) {
            if (d < 22) {
                return 'ふたご座';
            }
            else if (d > 21) {
                return 'かに座';
            }
        }
        else if (m < 8) {
            if (d < 23) {
                return 'かに座';
            }
            else if (d > 22) {
                return 'しし座';
            }
        }
        else if (m < 9) {
            if (d < 23) {
                return 'しし座';
            }
            else if (d > 22) {
                return 'おとめ座';
            }
        }
        else if (m < 10) {
            if (d < 23) {
                return 'おとめ座';
            }
            else if (d > 22) {
                return 'てんびん座';
            }
        }
        else if (m < 11) {
            if (d < 24) {
                return 'てんびん座';
            }
            else if (d > 23) {
                return 'さそり座';
            }
        }
        else if (m < 12) {
            if (d < 23) {
                return 'さそり座';
            }
            else if (d > 22) {
                return 'いて座';
            }
        }
        else if (m < 13) {
            if (d < 24) {
                return 'いて座';
            }
            else if (d > 23) {
                return 'やぎ座';
            }
        }
    };
    return constellation;
}());
var test = new constellation(11, 20);
console.log('あなたの星座は' + test.askConstellation() + 'です！');
// みずがめ座   Aquarius    1/20 - 2/18
// うお座       Pisces  2/19 -3/20
// おひつじ座   Aries   3/21 - 4/19
// おうし座     Taurus  4/20 - 5/20
// ふたご座     Gemini  5/21 - 6/21
// かに座       Cancer  6/22 - 7/22
// しし座       Leo     7/23 - 8/22
// おとめ座     Virgo   8/23 - 9/22
// てんびん座   Libra   9/23 - 10/23
// さそり座     Scorpio 10/24 - 11/22
// いて座       Sagittarius 11/24 - 12/23
// やぎ座       Capricorn   12/24 - 1/19
var r = new Ractive({
    // el...どこに(cssにおける#id)
    el: '#containar',
    // template...何を(cssにおける#id)
    template: '#template',
    // 初期値を指定
    data: {
        m: 1,
        d: 1
    }
});
function exec() {
    var ask = new constellation(r.get('m'), r.get('d'));
    var result = ask.askConstellation();
    // ractiveの変数reにresultを代入
    r.set('re', 'あなたの星座は' + result + 'です！');
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
