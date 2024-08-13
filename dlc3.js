// 使用正则表达式直接替换请求体中的字符串
var modifyBody = $request.body
    .replace(/"productId":"9MW9469V91LM"/g, '"productId":"9NZ4144B8SJP"')
    .replace(/"availabilityIdd":"B17K7P5V96W3"/g, '"availabilityIdd":"9SG7TNMGV3C7"');

// 完成修改
$done({body: modifyBody});
