let myMod; // 确保 myMod 作用域可用

(async function waitForModSDK() {
    while (typeof bcModSdk === "undefined") {
        console.log("等待 Mod SDK (apis.js) 加载...");
        await new Promise(resolve => setTimeout(resolve, 100)); // 每 100ms 检查一次
    }

    console.log("Mod SDK 版本:", bcModSdk.version);

    myMod = bcModSdk.registerMod({
        name: "测试",
        fullName: "loupo的代码测试",
        version: "0.0.1",
    });

    console.log("已注册 Mod:", myMod);

    // **确保 myMod 也成功注册**
    if (!myMod) {
        console.error("myMod 注册失败！");
        return;
    }
    // Hook 一个函数（拦截）
    myMod.hookFunction("ChatRoomMessage", 10, (args, next) => {
        const message = args[0];  
        const joinRegex = /^(.+?) \[(.+?)\] 进来了\.$/;  

        const match = message.match(joinRegex);
        if (match) {
            const nickname = match[1];
            const name = match[2];

            console.log(`检测到新用户: ${nickname} (${name})`);

            // 使用 StarMessage 发送全局欢迎消息
            StarMessage(`欢迎 ${nickname} !`);
        }

        return next(args);  
    });
})();
    
   // 发送消息的函数（使用 *Emote* 类型）
StarMessage = (text) => { 
    ServerSend("ChatRoomChat", {
        Content: `${text}`,
        Type: "Emote",
    });
};