// getcartid.js
let body = $response.body;
let obj = JSON.parse(body);

if (obj.cart && obj.cart.id) {
    let cartId = obj.cart.id;
    let lineItemId = obj.cart.lineItems[0].id; // 假设我们需要第一个 lineItem 的 ID

    // 存储 cart id 和 lineItem id
    $persistentStore.write(cartId, "cartId");
    $persistentStore.write(lineItemId, "lineItemId");

    $notification.post("Cart ID 获取成功", `Cart ID: ${cartId}, LineItem ID: ${lineItemId}`, "");
    console.log(`Cart ID: ${cartId}, LineItem ID: ${lineItemId}`);
} else {
    $notification.post("Cart ID 获取失败", "响应体中未找到 cart id 或 lineItems", "");
    console.log("响应体中未找到 cart id 或 lineItems");
}

$done({});
