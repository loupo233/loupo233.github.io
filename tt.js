if (typeof window.bcModSdk !== "undefined") {
    console.log("Mod SDK 版本:", window.bcModSdk.version);
    
    myMod = window.bcModSdk.registerMod({
        name: "测试",
        fullName: "loupo的代码测试",
        version: "0.0.2",
    });
    
    console.log("已注册 Mod:", myMod);
} else {
    console.error("Mod SDK 未加载");
}
const ChatMessage = (text) => {
    ServerSend("ChatRoomChat", {
        Content: `${text}`,
        Type: "Chat",
    })
};
myMod.hookFunction("ChatRoomCharacter",0, (args, next) => {

})
// myMod.hookFunction("ChatRoomMessage", 0, (args, next) => {
//     let data1 = args[0];
//     // Sender // 玩家名字 是数字类型
//     // Type // 数据类型 
//     // Content // 内容 聊天的话就是文字 动作的话就是动作名字
//     // Dictionary // 也是内容 通常用于替换
//     console.log(data1);
//     next(args);
// });
// ServerSend 这个会 发送给服务器 大家都可以看见
// 括号消息 = (text) => {
//     ServerSend("ChatRoomChat", {
//         Content: "Beep",
//         Type: "Action",
//         Dictionary: [
//             { Tag: "发送私聊", Text: "修改" }, // 这条必须有 不然会不显示 目的是为了修改 "发送私聊" 这个文本
//             { Tag: "修改", Text: text },      // 修改 "发送私聊" 这个文本
//         ],
//     })
// };
myMod.hookFunction("ChatRoomMessage", 10, (args, next) => {
    let data = args[0];
     if(data.Sender!='160609'){
        // console.log(Player.MemberNumber);
        if (data.Sender  && data.Type === 'Action' && data.Content === 'ServerEnter') {
         const  emdsa= ChatRoomCharacter.find(character => character.MemberNumber === data.Sender); // 这个是调出特定玩家的信息
         ChatMessage(emdsa.name+ ",欢迎光临此小窝");
    }
    
    }
// else {
//     console.log("本人测试成功");
// }
    next(args);
});