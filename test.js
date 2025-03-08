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
myMod.hookFunction("ChatRoomMessage", 0, (args, next) => {
    let data1 = args[0];
    // Sender // 玩家名字 是数字类型
    // Type // 数据类型 
    // Content // 内容 聊天的话就是文字 动作的话就是动作名字
    // Dictionary // 也是内容 通常用于替换
    console.log(data1);
    next(args);
});