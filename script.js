(function () {
    'use strict';

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
    

    // 这里列出所有需要加载的 JS 文件
    const scripts = [
        "https://loupo233.github.io/t1.js",
       
    ];

    // 依次加载所有 JS 文件
    (async () => {
        for (const script of scripts) {
            try {
                await loadScript(script);
                console.log(`Loaded: ${script}`);
            } catch (error) {
                console.error(`Failed to load: ${script}`, error);
            }
        }
    })();
})();