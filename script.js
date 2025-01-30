function loadScript(url, isModule = false) {
    return new Promise((resolve, reject) => {
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

// 需要加载的 JS 文件列表

const scripts = [
        { url:"https://loupo233.github.io/apis.js", isModule: false },  // 确保 URL 正确
        { url: "https://loupo233.github.io/tt.js", isModule: true }  // 确保 URL 正确
];
 
// 依次加载所有 JS 文件

(async () => {
    for (const { url, isModule } of scripts) {
        try {
            await loadScript(url, isModule);
        } catch (error) {
            console.warn(`⚠️ Skipping ${url} due to an error.`);
        }
    }
})();