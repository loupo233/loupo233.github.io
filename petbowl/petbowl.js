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
const StarMessage = (text) => {
    ServerSend("ChatRoomChat", {
        Content: `${text}`,
        Type: "Emote",
    })
};
PetBowl1: {
    Archetype: ExtendedArchetype.TEXT,  // 物品类型是 TEXT，可存储文本
    ScriptHooks: {
        AfterDraw: AssetsItemDevicesPetBowlAfterDrawHook,  
        // 在绘制后调用 AfterDraw 钩子
    },
    MaxLength: { Text: 12 },  // 文本最大长度为 12 个字符
    Font: "'Saira Stencil One', 'Arial', sans-serif",  // 物品的字体样式
},

function AssetsItemDevicesPetBowlAfterDrawHook(data, originalFunction,
	{ C, A, CA, X, Y, L, drawCanvas, drawCanvasBlink, AlphaMasks, Color },
) {
	if (L === "Text") {
		// Fetch the text property and assert that it matches the character
		// and length requirements
		TextItem.Init(data, C, CA, false, false);
		const text = CA.Property.Text;

		// Prepare a temporary canvas to draw the text to
		const height = 60;
		const width = 130;
		const tempCanvas = AnimationGenerateTempCanvas(C, A, width, height);
		const ctx = tempCanvas.getContext("2d");

		// Reposition and orient the text when hanging upside-down
		if (C.IsInverted()) {
			ctx.rotate(Math.PI);
			ctx.translate(-tempCanvas.width, -tempCanvas.height);
			Y -= 60;
			X -= 300;
		}

		DynamicDrawTextArc(text, ctx, width / 2, 42, {
			fontSize: 36,
			fontFamily: data.font,
			width,
			color: Color,
			angle: Math.PI,
			direction: DynamicDrawTextDirection.ANTICLOCKWISE,
			textCurve: DynamicDrawTextCurve.SMILEY,
			radius: 350,
		});

		// Draw the temporary canvas onto the main canvas
		drawCanvas(tempCanvas, X, Y, AlphaMasks);
		drawCanvasBlink(tempCanvas, X, Y, AlphaMasks);
	}
}
