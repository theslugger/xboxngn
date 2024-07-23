// bulk_update_items.js
let storedCartId = $persistentStore.read("cartId");
let storedLineItemId = $persistentStore.read("lineItemId");
let body = JSON.parse($request.body);

if (storedCartId && storedLineItemId) {
    // 替换 cartId 和 lineItem id
    let url = $request.url.replace(/cartId=[^&]*/, `cartId=${storedCartId}`);
    body.items[0].id = storedLineItemId;

    $notification.post("bulkUpdateLineItems 请求已修改", `新 Cart ID: ${storedCartId}, 新 LineItem ID: ${storedLineItemId}`, "");

    $done({
        url: url,
        body: JSON.stringify(body)
    });
} else {
    $notification.post("数据读取失败", "未能读取存储的 Cart ID 或 LineItem ID", "");
    $done({});
}
