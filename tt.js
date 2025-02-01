if (typeof window.bcModSdk !== "undefined") {
    console.log("Mod SDK 版本:", window.bcModSdk.version);
    
    myMod = window.bcModSdk.registerMod({
        name: "测试",
        fullName: "loupo的代码测试",
        version: "0.0.1",
    });
    const StarMessage = (text) => {
        myMod.ServerSend("ChatRoomChat", {
            Content: `${text}`,
            Type: "Emote",
        })
    };
    console.log("已注册 Mod:", myMod);
} else {
    console.error("Mod SDK 未加载");
}

myMod.hookFunction("ChatRoomMessage", 0, (args, next) => {
    let data = args[0];
    if(data.Sender!='160609'){
        if (data.Sender === Player.MemberNumber && data.Type === 'Action' && data.Content === '"ServerEnter"') {
        StarMessage(data.Sender+ ",欢迎光临此小窝");
    }
}
    next(args);
});