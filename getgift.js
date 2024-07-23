// bulk_update_items.js
let storedCartId = $persistentStore.read("cartId");
let storedLineItemId = $persistentStore.read("lineItemId");

// 总是替换 URL 中的 cartId
let url = $request.url.replace(/cartId=[^&]+/, `cartId=${storedCartId}`);

if (storedCartId && storedLineItemId) {
    try {
        // 检查请求体是否为空
        if ($request.body) {
            let body = JSON.parse($request.body);

            // 确保 body.items 数组存在且至少有一个元素
            if (body.items && body.items.length > 0) {
                // 替换第一个 item 的 id
                body.items[0].id = storedLineItemId;

                $notification.post("Bulk Update LineItems 请求已修改", `新 Cart ID: ${storedCartId}, 新 LineItem ID: ${storedLineItemId}`, "");
                console.log(`Bulk Update LineItems 请求已修改: Cart ID - ${storedCartId}, LineItem ID - ${storedLineItemId}`);

                $done({
                    url: url,
                    body: JSON.stringify(body)
                });
            } else {
                // 如果 items 数组不存在或为空，不修改 body
                $done({ url: url });
            }
        } else {
            // 请求体为空，不尝试修改 body，只修改 URL
            $done({ url: url });
        }
    } catch (error) {
        $notification.post("请求修改失败", "解析请求体时发生错误", error.message);
        console.log(`解析请求体时发生错误: ${error.message}`);
        $done({ url: url });  // 即使解析失败，也继续发送修改过 URL 的请求
    }
} else {
    $notification.post("数据读取失败", "未能读取存储的 Cart ID 或 LineItem ID", "");
    console.log("未能读取存储的 Cart ID 或 LineItem ID");
    $done({ url: url });  // ID 未找到，只修改 URL
}
