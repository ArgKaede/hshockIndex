var JavaProgramer = /** @class */ (function () {
    function JavaProgramer() {
    }
    JavaProgramer.prototype.writeProgram = function () {
        return "プログラムするよ";
    };
    ;
    return JavaProgramer;
}());
var TestProgrammer = /** @class */ (function () {
    function TestProgrammer() {
    }
    TestProgrammer.prototype.writeProgram = function () {
        return "動作確認用のプログラムだよ";
    };
    return TestProgrammer;
}());
var DummyUploader = /** @class */ (function () {
    function DummyUploader() {
    }
    DummyUploader.prototype.upload = function (text) {
        console.log('アップロードしたことにしよっと', text);
    };
    return DummyUploader;
}());
function writeBlog(p, u) {
    var program = p.writeProgram(); // 書いてくださいおねがいします
    u.upload(program); // 公開してくれー
}
writeBlog(new JavaProgramer(), new DummyUploader());
