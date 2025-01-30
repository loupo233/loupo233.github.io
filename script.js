(function () {
    'use strict';

    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = `${url}?timestamp=${new Date().getTime()}`; // 防止缓存
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // 这里列出所有需要加载的 JS 文件
    const scripts = [
        "https://loupo233.github.io/apis.js",
        "https://loupo233.github.io/tt.js",
       
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
   
