let myMod;
if (typeof window.bcModSdk !== "undefined") {
    console.log("Mod SDK 版本:", window.bcModSdk.version);
    
    myMod = window.bcModSdk.registerMod({
        name: "测试",
        fullName: "loupo的代码测试",
        version: "0.0.1",
    });

    console.log("已注册 Mod:", myMod);
} else {
    console.error("Mod SDK 未加载");
}

if (myMod) {
    myMod.hookFunction("ChatRoomMessage", 10, (args, next) => {
        const message = args[0];  
        const joinRegex = /^(.+?) \[(.+?)\] 进来了\.$/;  
    
        const match = message.match(joinRegex);
        if (match) {
            const nickname = match[1];
            const name = match[2];

            console.log(`检测到新用户: ${nickname} (${name})`);

            // 发送欢迎消息
            StarMessage(`欢迎 ${nickname} !`);
        }

        return next(args);  
    });
}