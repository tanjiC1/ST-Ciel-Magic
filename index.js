// ============================================
// 📦 第一步：进货（从酒馆主程序借工具）
// ============================================
// eventSource: 酒馆的事件广播站，能监听各种事件
//   比如：有人发消息、AI回复了、切换了角色卡……
// event_types: 事件名称的清单，告诉你都有哪些事件可以监听
//   比如：event_types.MESSAGE_SENT（消息发送）
//         event_types.MESSAGE_RECEIVED（收到回复）
// 现在还没用到，但以后做高级功能（比如自动触发）就靠它们
import { eventSource, event_types } from '../../../../script.js';

// ============================================
// 🎯 第二步：定义功能（按下按钮后做什么）
// ============================================
// 这里是你以后塞功能的主要地方！
// 想加新功能？直接在这个函数里面写就行
function myMagicFunction() {
    // toastr 是酒馆自带的提示框工具
    // .success() = 绿色成功提示
    // .warning() = 黄色警告提示
    // .error()   = 红色错误提示
    // .info()    = 蓝色信息提示
    // 格式：toastr.success("提示内容", "标题")
    toastr.success("老婆真棒！按钮添加成功！", "Ciel魔法");

    // ---- 以后可以在下面加更多功能 ----
    // 例1：在控制台打印信息（按F12可以看到）
    // console.log("按钮被点击了！");
    //
    // 例2：弹出一个确认对话框
    // if (confirm("要执行魔法吗？")) { ... }
    //
    // 例3：读取当前聊天记录（需要用到酒馆的API）
    // const context = getContext();
    // const chat = context.chat;  // 所有聊天消息的数组
    // console.log("共有", chat.length, "条消息");
}

// ============================================
// 🚀 第三步：等酒馆加载完毕后开始干活
// ============================================
// jQuery(async () => { ... }) 的意思是：
// "等整个页面都加载好了，再执行大括号里的代码"
// 为什么要等？因为你要往页面里塞东西，页面没好你塞不进去
jQuery(async () => {

    // ========================================
    // 🎨 第四步：画面板（定义UI长什么样）
    // ========================================
    // 这段 HTML 描述了你的插件面板的外观
    // 用反引号 `` 包裹是为了能写多行文本
    const panelHtml = `
    <div class="inline-drawer">

        <!-- 📌 面板标题栏（点击可以折叠/展开） -->
        <!-- inline-drawer-toggle: 让这个区域可以点击切换 -->
        <!-- inline-drawer-header: 酒馆标题栏的统一样式 -->
        <div class="inline-drawer-toggle inline-drawer-header">
            <b>✨ Ciel在线魔法</b>
            <!-- 右边那个小箭头图标，点击会旋转 -->
            <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
        </div>

        <!-- 📌 面板内容区（折叠/展开的部分） -->
        <!-- 你以后要加的所有UI元素都放在这里面 -->
        <div class="inline-drawer-content">
            <div style="padding: 10px;">

                <!-- 一段说明文字，可以改成任何内容 -->
                <p>这是我的第一个插件面板！</p>

                <!-- 📌 魔法按钮 -->
                <!-- id="ciel_magic_button": 按钮的唯一标识，后面绑定点击事件要用 -->
                <!-- menu_button: 酒馆自带的按钮样式 -->
                <!-- menu_button_icon: 带图标的按钮样式 -->
                <div id="ciel_magic_button" class="menu_button menu_button_icon">
                    <!-- fa-wand-magic-sparkles: 魔法棒图标 -->
                    <!-- 想换图标？去 https://fontawesome.com/icons 找 -->
                    <!-- 把 fa-wand-magic-sparkles 换成别的名字就行 -->
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                    <span>施展魔法</span>
                </div>

                <!-- ================================== -->
                <!-- 🔽 以后想加新按钮？复制下面这段模板 🔽 -->
                <!-- ================================== -->
                <!--
                <div id="我的新按钮id" class="menu_button menu_button_icon">
                    <i class="fa-solid fa-star"></i>
                    <span>新功能名称</span>
                </div>
                -->

                <!-- ================================== -->
                <!-- 🔽 想加输入框？用这个模板 🔽          -->
                <!-- ================================== -->
                <!--
                <label for="my_input">输入点什么：</label>
                <input id="my_input" type="text" class="text_pole" placeholder="在这里输入...">
                -->

                <!-- ================================== -->
                <!-- 🔽 想加复选框？用这个模板 🔽          -->
                <!-- ================================== -->
                <!--
                <label class="checkbox_label">
                    <input id="my_checkbox" type="checkbox">
                    <span>开启某个功能</span>
                </label>
                -->

            </div>
        </div>
    </div>`;

    // ========================================
    // 📌 第五步：把面板塞进酒馆页面
    // ========================================
    // $('#extensions_settings') = 找到扩展设置侧边栏
    // .append() = 在末尾追加内容
    // 就像找到一面墙，把你的海报贴上去
    $('#extensions_settings').append(panelHtml);

    // ========================================
    // 🔗 第六步：给按钮绑定点击事件
    // ========================================
    // $('#ciel_magic_button') = 通过 id 找到那个按钮
    // .on('click', ...) = 当它被点击时，执行后面的函数
    $('#ciel_magic_button').on('click', () => {
        myMagicFunction();
    });

    // ---- 以后加了新按钮，也要在这里绑定事件 ----
    // 例：
    // $('#我的新按钮id').on('click', () => {
    //     toastr.info("新按钮被点击了！");
    // });

    // 在浏览器控制台打印一条日志，确认插件加载成功
    // 按 F12 打开开发者工具 → Console 标签页可以看到
    console.log("[Ciel插件] 加载完成 v1.0.0");
});
