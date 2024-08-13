// 检查是否存在请求体
if ($request.body) {
    // 定义原始和目标字符串
    const originalProductId = '"productId":"9MW9469V91LM"';
    const newProductId = '"productId":"9NZ4144B8SJP"';
    const originalAvailabilityIdd = '"availabilityIdd":"B17K7P5V96W3"';
    const newAvailabilityIdd = '"availabilityIdd":"9SG7TNMGV3C7"';

    // 执行替换操作
    var modifyBody = $request.body
        .replace(originalProductId, newProductId)
        .replace(originalAvailabilityIdd, newAvailabilityIdd);

    // 完成修改并返回修改后的请求体
    $done({body: modifyBody});
} else {
    // 如果请求体不存在，不做任何修改
    $done({});
}
