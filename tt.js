if (typeof bcModSdk === "undefined") {
    console.error("bcModSdk 未加载，请检查 mod-sdk.js 是否正确引入！");
} else {
    console.log("bcModSdk 版本:", bcModSdk.version);

    // 注册 Mod
    const myMod = bcModSdk.registerMod({
        name: "测试",
        fullName: "loupo的代码测试",
        version: "0.0.1",
    });

    // Hook 一个函数（拦截）
    myMod.hookFunction("ChatMessage", 10, (args, next) => {
        console.log(player.name, args[0]); 
        return next(args);
    });

    console.log("MyMod 加载完成！");
}