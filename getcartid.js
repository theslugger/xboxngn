/**
 * Surge Script
 * 功能描述：从响应体中获取购物车 ID，并进行存储和通知
 */

try {
    let body = $response.body;
    let obj = JSON.parse(body);

    // 检查响应体中是否包含 cart id
    if (obj.cart && obj.cart.id) {
        let cartId = obj.cart.id;

        // 存储 cart id
        $persistentStore.write(cartId, "cartId");

        // 发送通知
        $notification.post("Cart ID 获取成功", `Cart ID: ${cartId}`, "");

        // 打印日志以供调试
        console.log(`Cart ID 存储成功: ${cartId}`);
    } else {
        // 当 cart id 不存在时发送通知和日志
        $notification.post("Cart ID 获取失败", "响应体中未找到 cart id", "");
        console.log("响应体中未找到 cart id");
    }
} catch (error) {
    // 处理 JSON 解析错误或其他错误
    $notification.post("处理错误", "处理响应时发生错误", error.toString());
    console.log("处理响应时发生错误: " + error.toString());
}

// 保持原响应体不变并结束脚本
$done({});
