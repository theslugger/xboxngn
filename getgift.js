// bulk_update_items.js
let storedCartId = $persistentStore.read("cartId");
let storedLineItemId = $persistentStore.read("lineItemID");
let body = JSON.parse($request.body);

if (storedCartId && storedLineItemId) {
    let url = $request.url.replace(/cartId=[^&]+/, `cartId=${storedCartId}`);
    if (body.items && body.items.length > 0) {
        body.items[0].id = storedLineItemId;
        $notification.post("Bulk Update LineItems 请求已修改", `新 Cart ID: ${storedCartId}, 新 LineItem ID: ${storedLineItemId}`, "");
        console.log(`Bulk Update LineItems 请求已修改: Cart ID - ${storedCartId}, LineItem ID - ${storedLineItemId}`);
        $done({
            url: url,
            body: JSON.stringify(body)
        });
    } else {
        $notification.post("请求体错误", "请求体中 'items' 为空或不存在", "");
        console.log("请求体中 'items' 为空或不存在");
        $done({});  // 继续发送未修改的请求
    }
} else {
    $notification.post("数据读取失败", "未能读取存储的 Cart ID 或 LineItem ID", "");
    console.log("未能读取存储的 Cart ID 或 LineItem ID");
    $done({});
}
