// 检查请求方法是否不是 "OPTIONS"
if ($request.method.toUpperCase() !== "OPTIONS") {
    let storedCartId = $persistentStore.read("cartId");

    // 检查是否成功读取到存储的 cartId
    if (storedCartId) {
        let headers = $request.headers;
        let body = JSON.parse($request.body);

        // 当请求体中有 cartId 字段时才进行替换
        if (body.cartId) {
            body.cartId = storedCartId;
            $notification.post("Cart ID 替换成功", `使用 Cart ID: ${storedCartId}`, "");
        } else {
            // 如果请求体中没有 cartId 字段，可能是不同的请求
            $notification.post("Cart ID 替换失败", "请求体中未找到 cartId", "");
            console.log("请求体中未找到 cartId，此请求可能不需要替换");
        }

        // 完成请求，发送修改后的请求体
        $done({
            body: JSON.stringify(body)
        });
    } else {
        // 如果没有读取到 cartId，则不执行任何替换
        $notification.post("Cart ID 提取失败", "没有存储的 cartId 可用于替换", "");
        console.log("没有存储的 cartId 可用");
        $done({});
    }
} else {
    // 对于 OPTIONS 请求，不做任何处理
    $done({});
}
