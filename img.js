var body = $response.body;

// 确保响应体存在并且不为空
if (body) {
    var obj = JSON.parse(body);

    // 定位两个特定的对象
    var sourceItem = obj.pendingRequests.find(item => item.id === "BNBLPQM9MZ19_0X3J");
    var targetItem = obj.pendingRequests.find(item => item.id === "9P8PGC771MLP_0010");

    if (sourceItem && targetItem) {
        // 替换 appName 和 appIcon
        targetItem.appName = sourceItem.appName;
        targetItem.appIcon = sourceItem.appIcon;

        // 发送成功通知
        $notification.post("替换成功", "已成功替换 appName 和 appIcon", "原名称: " + targetItem.appName + " 新名称: " + sourceItem.appName);
    } else {
        // 发送失败通知
        $notification.post("替换失败", "未找到指定的对象", "请检查 ID 是否正确");
    }

    // 重新封装修改后的响应内容并返回
    $done({body: JSON.stringify(obj)});
} else {
    // 如果没有有效的响应体，直接返回未修改的响应
    $done({});
    // 发送失败通知
    $notification.post("操作失败", "响应体为空", "无数据可修改");
}
