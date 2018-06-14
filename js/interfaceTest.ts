interface Programmer {
    writeProgram(); // メソッドの定義だけ書く
}

class JavaProgramer implements Programmer {
    writeProgram(){
        return "プログラムするよ" ;
    };
}

class TestProgrammer implements Programmer {
    writeProgram() {
        return "動作確認用のプログラムだよ";
    }
}

class DummyUploader implements Uploader {
    upload(text: string) {
        console.log('アップロードしたことにしよっと', text);
    }
}

interface Uploader {
    upload(text: string);
}

function writeBlog(p: Programmer, u: Uploader) {
    let program = p.writeProgram(); // 書いてくださいおねがいします
    u.upload(program); // 公開してくれー
}

writeBlog(new JavaProgramer(), new DummyUploader());