const ChatMessage = (text) => {
    ServerSend("ChatRoomChat", {
        Content: `${text}`,
        Type: "Chat",
    })
};
if (typeof window.bcModSdk !== "undefined") {
    console.log("Mod SDK 版本:", window.bcModSdk.version);
    
    myMod = window.bcModSdk.registerMod({
        name: "测试",
        fullName: "loupo的代码测试",
        version: "0.0.3",
    });
    
    console.log("已注册 Mod:", myMod);
    ChatMessage("loupo的mod已启用");
} else {
    console.error("Mod SDK 未加载");
}

myMod.hookFunction("ChatRoomMessage", 11, (args, next) => {
    let data = args[0];
     if(data.Sender!='160609'){
        // console.log(Player.MemberNumber);
        if (data.Sender  && data.Type === 'Action' && data.Content === 'ServerEnter') {
         const  lgd= ChatRoomCharacter.find(character => character.MemberNumber === data.Sender); // 这个是调出特定玩家的信息
         ChatMessage(lgd.AccountName+ ",欢迎光临此小窝");
    }
    
    }
// else {
//     console.log("本人测试成功");
// }
    next(args);
});