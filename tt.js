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
myMod.hookFunction("ChatRoomMessage", 10, (args, next) => {
    const messageData = args[0];  
    
    // 确保 messageData 存在并且是字符串
    if (!messageData || typeof messageData !== "string") {
        console.error("无效的消息数据:", messageData);
        return next(args);
    }

    const joinRegex = /^(.+?) \[(.+?)\] 进来了\.$/;  
    const match = messageData.match(joinRegex);

    if (match) {
        const nickname = match[1];
        const name = match[2];

        console.log(`检测到新用户: ${nickname} (${name})`);

        // 发送欢迎消息
        ServerSend("ChatRoomChat", {
            Content: `欢迎 ${nickname} !`,
            Type: "Emote",
        });
    }

    return next(args);
});