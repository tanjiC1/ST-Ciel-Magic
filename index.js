// 当插件加载成功时，酒馆会在控制台和弹窗里告诉你
jQuery(async () => {
    console.log("Ciel的GitHub插件加载成功！");
    toastr.info("老公你看！我是从GitHub下载下来的！", "远程部署成功");
});