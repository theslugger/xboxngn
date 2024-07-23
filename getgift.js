// bulk_update_items.js
let storedCartId = $persistentStore.read("cartId");
let storedLineItemId = $persistentStore.read("lineItemId");

// 检查请求体是否为空
if ($request.body) {
    let url = $request.url;  // 初始化 URL 变量
    try {
        let body = JSON.parse($request.body);

        // 仅当存储的 Cart ID 和 LineItem ID 均可用时才进行修改
        if (storedCartId && storedLineItemId) {
            // 替换 URL 中的 cartId
            url = url.replace(/cartId=[^&]+/, `cartId=${storedCartId}`);

            // 确保 body.items 数组存在且至少有一个元素
            if (body.items && body.items.length > 0) {
                // 替换第一个 item 的 id
                body.items[0].id = storedLineItemId;
            }

            $notification.post("Bulk Update LineItems 请求已修改", `新 Cart ID: ${storedCartId}, 新 LineItem ID: ${storedLineItemId}`, "");
            console.log(`Bulk Update LineItems 请求已修改: Cart ID - ${storedCartId}, LineItem ID - ${storedLineItemId}`);

            $done({
                url: url,
                body: JSON.stringify(body)
            });
        } else {
            // 存储的 ID 不完整时发送通知
            $notification.post("数据读取失败", "未能完整读取存储的 Cart ID 或 LineItem ID", "");
            console.log("未能完整读取存储的 Cart ID 或 LineItem ID");
            $done({ url: url });  // 继续发送未修改的请求
        }
    } catch (error) {
        $notification.post("请求修改失败", "解析请求体时发生错误", error.message);
        console.log(`解析请求体时发生错误: ${error.message}`);
        $done({ url: url });  // 即使解析失败，也继续发送原始 URL 的请求
    }
} else {
    // 请求体为空，不进行任何修改
    console.log("请求体为空，不执行任何操作");
    $done({});
}
