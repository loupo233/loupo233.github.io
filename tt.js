
if (typeof bcModSdk === "undefined") {
    console.log("Mod SDK 版本:", bcModSdk.version);
    // 注册 Mod
    const myMod = bcModSdk.registerMod({
        name: "测试",
        fullName: "loupo的代码测试",
        version: "0.0.1",
    });
    console.log("已注册 Mod:", myMod);
} else {
    console.error("Mod SDK 未加载");
}

    // Hook 一个函数（拦截）
    myMod.hookFunction("chatroommessage", 10, (args, next) => {
        const message = args[0];  // 获取聊天消息内容
        const joinRegex = /^(.+?) \[(.+?)\] 进来了\.$/;  // 匹配 "nickname [name] 进来了."
    
        const match = message.match(joinRegex);
        if (match) {
            const nickname = match[1];
            const name = match[2];
    
            console.log(`检测到新用户: ${nickname} (${name})`);
    
            // 使用 ServerSend 发送全局欢迎消息
            括号消息(`欢迎 ${nickname} !`);
        }
    
        return next(args);  // 继续执行原始逻辑
    });
    
    // 发送消息的函数
    括号消息 = (text) => {
        ServerSend("ChatRoomChat", {
            Content: "Beep",
            Type: "Action",
            Dictionary: [
                { Tag: "发送私聊", Text: "修改" }, // 这条必须有，不然不会显示
                { Tag: "修改", Text: text },      // 显示真正的文本
            ],
        });
    };