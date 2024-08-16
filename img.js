var body = $response.body;

// 确保响应体存在并且不为空
if (body) {
    var obj = JSON.parse(body);

    // 检查 pendingRequests 数组中的每个元素
    obj.pendingRequests.forEach(function(request) {
        // 检查并修改 appName
        if (request.appName && request.appName === "Forza Motorsport Premium Edition") {
            request.appName = "Liga Overwatch™ - 100 Fichas de Liga";
        }

        // 检查并修改 appIcon
        if (request.appIcon && request.appIcon === "https://store-images.s-microsoft.com/image/apps.32557.14083713035901346.16619c9c-f1cb-4fd8-93b8-e5754d238bfe.f01e409f-c2ee-49ca-bfdb-ef770223751e?w=200&h=200&q=60") {
            request.appIcon = "https://store-images.s-microsoft.com/image/apps.46981.67853844255942228.41453783-f2e6-44d2-9beb-e2557b254e8a.047c23cd-4c06-45f3-8da6-3e61e9f91104?w=200&h=200&q=60";
        }
    });

    // 重新封装修改后的响应内容并返回
    $done({body: JSON.stringify(obj)});
} else {
    // 如果没有有效的响应体，直接返回未修改的响应
    $done({});
}
