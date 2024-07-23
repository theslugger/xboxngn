// getcartid.js
let body = $response.body;
let obj = JSON.parse(body);

if (obj.cart && obj.cart.id && obj.cart.lineItems && obj.cart.lineItems.length > 0) {
    let cartId = obj.cart.id;
    let lineItemId = obj.cart.lineItems[0].id;  // 假设我们总是需要第一个 lineItem 的 ID

    // 存储 cartId 和 lineItemId
    $persistentStore.write(cartId, "cartId");
    $persistentStore.write(lineItemId, "lineItemId");

    $notification.post("Cart ID 获取成功", `Cart ID: ${cartId}, LineItem ID: ${lineItemId}`, "");
    console.log(`Cart ID: ${cartId}, LineItem ID: ${lineItemId}`);
} else {
    $notification.post("Cart ID 获取失败", "响应体中未找到必需的数据", "");
    console.log("响应体中未找到必需的数据");
}

$done({});
