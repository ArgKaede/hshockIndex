/// <reference path="./ractive.d.ts" />
declare var Ractive;

// 大人用の輸液ライン　全体の輸液量 / かかる時間　* 20
// 子供用の輸液ライン 全体の輸液量 / かかる時間　* 60

// 以下やりたいこと
// 結果を表示する際、小数点以下を切り捨て
// 分と時間をプル選択できるようにする
// r.set内を改行できる？？


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
    
    idAdult(){
        return Math.floor(this.adult) ;
    }

    idAdultS(){
        var a = this.adult / 60 ;
        return Math.floor(a * 3) ;
    }

    idChild(){
        return Math.floor(this.child) ;
    }

    idChildS(){
        var b = this.child / 60 ;
        return Math.floor(b * 3) ;
    }
}



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
    var resultChild = ask.idChild();
    var resultChildS = ask.idChildS();
    r.set('reAdult','１分あたり' + resultAdult + '滴です。');
    r.set('reAdultS','３秒あたり' + resultAdultS + '滴です。');
    r.set('reChild','１分あたり' + resultChild + '滴です。');
    r.set('reChildS','３秒あたり' + resultChildS + '滴です。');
}

r.on({
    enter : function(e:any){
        if(e.event.keyCode == 13){
        exec();
        }
        
    },
    health : function(){
        exec();
    }
})