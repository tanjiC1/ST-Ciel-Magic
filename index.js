// 引入酒馆核心模块（这就叫 Import Dependencies）
import { eventSource, event_types } from '../../../../script.js';

// 这里定义点击按钮后发生什么
function myMagicFunction() {
    // 比如弹出一个绿色的成功提示
    toastr.success("老婆真棒！按钮添加成功！", "Ciel魔法");
    // 你以后可以在这里写更多逻辑，比如打开一个面板
}

// 这里的代码会在酒馆页面加载完毕后执行
jQuery(async () => {
    // 1. 定义按钮长什么样 (HTML)
    // fa-wand-magic-sparkles 是图标，你可以换别的
    const myButtonHtml = `
        <div id="ciel_magic_button" class="list-group-item flex-container flex-gap-10 interactable">
            <div class="extension_icon">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <div class="extension_name">Ciel的魔法开关</div>
        </div>
    `;

    // 2. 把按钮“插”进左下角的菜单里 (DOM Injection)
    // #extensions_menu 就是那个菜单的 ID
    $('#extensions_menu').append(myButtonHtml);

    // 3. 给按钮绑定点击事件 (Event Listener)
    $('#ciel_magic_button').on('click', () => {
        myMagicFunction();
    });

    // 4. 也是弹个窗告诉你加载好了
    console.log("Ciel插件 UI 注入完成");
});
