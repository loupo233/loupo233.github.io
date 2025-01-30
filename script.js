function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = `${url}?timestamp=${new Date().getTime()}`; // 防止缓存
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
    "https://loupo233.github.io/tt.js",
];

// 依次加载所有 JS 文件
(async () => {
    for (const script of scripts) {
        try {
            await loadScript(script);
        } catch (error) {
            console.warn(`⚠️ Skipping ${script} due to an error.`);
        }
    }
})();