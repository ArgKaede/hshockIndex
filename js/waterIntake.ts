/// <reference path="./ractive.d.ts" />
declare var Ractive;

// 患者さんに必要な１日の水分量の予測
// 体重(kg) * 30 ~ 35 mL = 必要水分量(mL)



class waterIntake{
    weight : number ;
    constructor(weight : number){
        this.weight = weight ;
    }
    
    waterTop(){
        return this.weight * 35 ;
    }

    waterUnder(){
        return this.weight * 30 ;
    }
}

// ractive

var r = new Ractive({
    // el...どこに(cssにおける#id)
    el : '#containar' ,
    // template...何を(cssにおける#id)
    template : '#template' ,
    // 初期値を指定
    data : {
        kg : null
    }   
});

function exec(){
    var ask = new waterIntake(r.get('kg'));
    var wt = ask.waterTop();
    var wu = ask.waterUnder();
    r.set('re','患者さんに必要な１日の水分量は ' + wu + 'mL 〜 ' + wt + ' mLです。');
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