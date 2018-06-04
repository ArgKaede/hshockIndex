/// <reference path="./ractive.d.ts" />
declare var Ractive;

// 大人用の輸液ライン　全体の輸液量 / かかる時間　* 20
// 子供用の輸液ライン 全体の輸液量 / かかる時間　* 60

// 以下やりたいこと
// 結果を表示する際、小数点以下を切り捨て
// 分と時間をプル選択できるようにする
// r.set内を改行できる？？

// classの指定
class intravenousDrip{
    infusion : number ;
    time : number ;
    adult : number ;
    child : number ;
    constructor(infusion : number , time : number){
        this.infusion = infusion ;
        this.time = time ;
        this.adult = this.infusion / this.time * 20 ;
        this.child = this.infusion / this.time * 60 ; 
    }
    
    // 大人の滴下数(１分あたり)
    idAdult(){
        return Math.floor(this.adult) ;
    }
    // 大人の滴下数(3秒あたり)
    idAdultS(){
        var a = this.adult / 60 ;
        return Math.floor(a * 3) ;
    }
    // 大人の滴下数(素の計算結果)
    idAdultD(){
        return this.adult ;
    }
    // 子供の滴下数(１分あたり)
    idChild(){
        return Math.floor(this.child) ;
    }
    // 子供の滴下数(3秒あたり)
    idChildS(){
        var b = this.child / 60 ;
        return Math.floor(b * 3) ;
    }
    // 子供の滴下数(素の計算結果)
    idChildD(){
        return this.child ;
    }
}

// Ractive
var r = new Ractive({
    el : '#containar' ,
    template : '#template' ,
    data : {
        ml : 500,
        m : 240
    }   
});

function exec(){
    var ask = new intravenousDrip(r.get('ml'),r.get('m'));
    var resultAdult = ask.idAdult();
    var resultAdultS = ask.idAdultS();
    var resultAdultD = ask.idAdultD();
    r.set('reAdult','１分あたり' + resultAdult + '滴です。');
    r.set('reAdultS','３秒あたり' + resultAdultS + '滴です。');
    r.set('reAdultD',resultAdultD);
    var resultChild = ask.idChild();
    var resultChildS = ask.idChildS();
    var resultChildD = ask.idChildD();
    r.set('reChild','１分あたり' + resultChild + '滴です。');
    r.set('reChildS','３秒あたり' + resultChildS + '滴です。');
    r.set('reChildD',resultChildD);
}

r.on({
    enter : function(e:any){
        if(e.event.keyCode == 13){
        exec();
        }        
    },
    button : function(){
        exec();
    }
})