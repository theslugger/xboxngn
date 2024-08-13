// 检查是否存在请求体
if ($request.body) {
    // 使用简单的字符串替换
    var modifiedBody = $request.body
        .replace(/9MW9469V91LM/g, "9NZ4144B8SJP")
        .replace(/B17K7P5V96W3/g, "9SG7TNMGV3C7");

    // 完成修改并返回修改后的请求体
    $done({body: modifiedBody});
} else {
    // 如果请求体不存在，不做任何修改
    $done({});
}
