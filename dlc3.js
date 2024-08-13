// 解码请求体
var decodedBody = decodeURIComponent($request.body);

// 输出解码后的请求体，以便检查
console.log("Decoded Body: " + decodedBody);

// 进行替换
var modifiedBody = decodedBody.replace(/"productId":"9MW9469V91LM","skuId":"0010","availabilityId":"B17K7P5V96W3"/g, '"productId":"9NZ4144B8SJP","skuId":"0010","availabilityId":"9SG7TNMGV3C7"');

// 检查修改后的内容
console.log("Modified Body: " + modifiedBody);

// 重新编码修改后的请求体
var reencodedBody = encodeURIComponent(modifiedBody);

// 完成修改
$done({body: reencodedBody});
