async function loadScript(url, isModule = false) {
    return new Promise((resolve, reject) => {
        if (!url) {
            console.error("❌ URL 未定义！");
            reject("URL is undefined");
            return;
        }

        console.log(`正在加载脚本: ${url}`); // 输出正在加载的 URL

        const script = document.createElement("script");
        script.src = `${url}?timestamp=${new Date().getTime()}`; // 防止缓存
        if (isModule) script.type = "module"; // 设置为 ES 模块
        script.onload = () => {
            console.log(`✅ Loaded: ${url}`);
            resolve(url);
        };
        script.onerror = (error) => {
            console.error(`❌ Failed to load: ${url}`, error);
            reject(error);
        };
        document.head.appendChild(script);
    });
}

// 更新后的脚本列表，包括 apis.js（作为 mod-sdk.js）和 tt.js
const scripts = [
    { url: "https://loupo233.github.io/apis.js", isModule: false },  // mod-sdk.js
    { url: "https://loupo233.github.io/tt.js", isModule: true },    // 作为模块加载
    { url: "https://loupo233.github.io/apis.js", isModule: false }  // 如果需要再次引用 apis.js
];

// 输出检查脚本 URL
console.log("加载的脚本：", scripts);

(async () => {
    // 循环加载脚本
    for (const { url, isModule } of scripts) {
        try {
            await loadScript(url, isModule);
        } catch (error) {
            console.warn(`⚠️ Skipping ${url} due to an error.`);
        }
    }
})();
