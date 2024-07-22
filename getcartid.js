/**
 * Surge Script
 * 获取响应体中的 cart id，并存储和发送通知
 */

let body = $response.body;
let obj = JSON.parse(body);

// 检查响应体中是否包含 cart id
if (obj.cart && obj.cart.id) {
    let cartId = obj.cart.id;
    
    // 存储 cart id
    $persistentStore.write(cartId, "cartId");

    // 发送通知
    $notification.post("Cart ID 获取成功", `cartId: ${cartId}`, "");
    
    // 打印日志以供调试
    console.log(`Cart ID: ${cartId}`);
} else {
    $notification.post("Cart ID 获取失败", "响应体中未找到 cart id", "");
    console.log("响应体中未找到 cart id");
}

// 保持原响应体不变
$done({});
