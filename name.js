var body = $response.body;

// 确保响应体存在并且不为空
if (body) {
    var obj = JSON.parse(body);

    // 修改 title 和 imageUri
    obj.title = "Liga Overwatch™ - 100 Fichas de Liga"; // 使用先前指定的 appName
    obj.imageUri = "\/\/store-images.s-microsoft.com\/image\/apps.53647.67853844255942228.41453783-f2e6-44d2-9beb-e2557b254e8a.d861ebc3-a645-4a02-86eb-1b720c3db023?w=200&h=200&q=60"; // 使用先前指定的 appIcon

    // 检查并修改价格
    body = JSON.stringify(obj);

    // 存储原来的价格
    var oldPrice = obj.price;

    // 直接赋予新的价格
    obj.price = "$ 85.00";

    // 将对象转回 JSON 字符串
    body = JSON.stringify(obj);

    // 重新封装修改后的响应内容并返回
    $done({body: body});

    // 使用 Surge 发送通知
    $notification.post("价格修改通知", "价格已修改", "原价格: " + oldPrice + "，新价格: " + obj.price);
} else {
    // 如果没有有效的响应体，直接返回未修改的响应
    $done({});
    // 发送错误通知
    $notification.post("修改失败", "响应体为空", "无法进行数据修改");
}
