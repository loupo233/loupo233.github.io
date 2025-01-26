document.addEventListener('DOMContentLoaded', () => {
    // 获取按钮元素
    let button = document.getElementById('chat-room-send');

    // 检查按钮是否存在
    if (button) {
        // 设置按钮的背景图片
        button.style.backgroundImage = 'url("https://raw.githubusercontent.com/loupo233/loupo233.github.io/main/image/tt.png")';
        button.style.backgroundSize = 'cover'; // 背景图片覆盖按钮
        button.style.backgroundPosition = 'center'; // 居中显示图片
        button.style.backgroundRepeat = 'no-repeat'; // 防止图片重复

        // 设置按钮大小，以便正确显示图片
        button.style.width = '100px'; // 自定义宽度
        button.style.height = '100px'; // 自定义高度
        button.style.border = 'none'; // 移除按钮边框

        console.log('按钮已修改为图片背景');
    } else {
        console.error('未找到按钮元素: chat-room-send');
    }
});
