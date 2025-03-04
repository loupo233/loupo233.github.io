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

// const petbowl1=myMod.AssetGet("Female3DCG","ItemDevices","PetBowl");
// 	AssetAdd("ItemMisc", "petbowl1", "ExtendedConfig");