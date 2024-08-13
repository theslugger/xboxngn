// 定义原始和目标字符串
const originalProductId = '"productId":"9MW9469V91LM"';
const newProductId = '"productId":"9NZ4144B8SJP"';
const originalAvailabilityIdd = '"availabilityIdd":"B17K7P5V96W3"';
const newAvailabilityIdd = '"availabilityIdd":"9SG7TNMGV3C7"';

// 检查请求体中是否包含需要替换的字符串
if ($request.body.includes(originalProductId) && $request.body.includes(originalAvailabilityIdd)) {
    // 执行替换操作
    var modifyBody = $request.body
        .replace(originalProductId, newProductId)
        .replace(originalAvailabilityIdd, newAvailabilityIdd);

    // 完成修改
    $done({body: modifyBody});
} else {
    // 如果不包含目标字符串，则不做修改
    $done({});
}
