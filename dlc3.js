// 打印原始请求体，检查其内容
console.log("Original Body: " + $request.body);

// 确保替换操作考虑到可能的空格和编码
var pattern = /"productId":"9MW9469V91LM",\s*"skuId":"0010",\s*"availabilityId":"B17K7P5V96W3"/;
var replacement = '"productId":"9NZ4144B8SJP","skuId":"0010","availabilityId":"9SG7TNMGV3C7"';

var modifyBody = $request.body.replace(pattern, replacement);

// 再次打印修改后的请求体，确认修改是否成功
console.log("Modified Body: " + modifyBody);

$done({body: modifyBody});
