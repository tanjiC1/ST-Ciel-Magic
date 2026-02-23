import { eventSource, event_types } from '../../../../script.js';

function myMagicFunction() {
    toastr.success("老婆真棒！按钮添加成功！", "Ciel魔法");
}

jQuery(async () => {
    // 扩展设置侧边栏面板
    const panelHtml = `
    <div class="inline-drawer">
        <div class="inline-drawer-toggle inline-drawer-header">
            <b>✨ Ciel在线魔法</b>
            <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
        </div>
        <div class="inline-drawer-content">
            <div style="padding: 10px;">
                <p>这是我的第一个插件面板！</p>
                <div id="ciel_magic_button" class="menu_button menu_button_icon">
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                    <span>施展魔法</span>
                </div>
            </div>
        </div>
    </div>`;

    // 注入到扩展设置侧边栏（堆叠盒子那个面板）
    $('#extensions_settings').append(panelHtml);

    // 绑定点击事件
    $('#ciel_magic_button').on('click', () => {
        myMagicFunction();
    });

    console.log("[Ciel插件] 加载完成 v1.0.0");
});
