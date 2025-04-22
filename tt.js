if (typeof window.bcModSdk !== "undefined") 
    {
    console.log("Mod SDK 版本:", window.bcModSdk.version);
    myMod = window.bcModSdk.registerMod({
        name: "测试",
        fullName: "loupo的代码测试",
        version: "0.0.4",
    });
    console.log("已注册 Mod:", myMod)
} else {
    console.error("Mod SDK 未加载");
}
const ChatMessage = (text) => {
    ServerSend("ChatRoomChat", {
        Content: `${text}`,
        Type: "Chat",
    })
}
myMod.hookFunction("ChatRoomMessage", 11, (args, next) => {
    let data = args[0]; 
    // args[0] 就是 data 对象，包含 Sender、Type、Content 等属性
     if(data.Sender!=160609)
        // 如果 Sender 不等于 160609（注意：这里最好确保数据类型一致，比如都用数字）
    {
        if (data  && data.Type === 'Action' && data.Content === 'ServerEnter') 
        {
         const  dsa= ChatRoomCharacter.find(character => character.MemberNumber === data.Sender); 
        // 调用 CharacterNickname 得到格式化后的昵称
         const dasnickname = CharacterNickname(dsa);
        //  ChatMessage(dasnickname+ "(https://raw.githubusercontent.com/loupo233/loupo233.github.io/refs/heads/main/112b1a83-728e-47a3-a6d7-814602314c83.png)");
        ChatMessage("(https://img.tukuppt.com/png_preview/00/27/90/9RFccq3mgb.jpg!/fw/780)");
        }
    
    } next(args);

});