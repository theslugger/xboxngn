// 检查是否存在请求体
if ($request.body) {
    // 使用正则表达式替换，考虑前后可能有空白字符、引号、冒号等符号
    var modifiedBody = $request.body
        .replace(/(["',:\s]){1}9MW9469V91LM(["',:\s]){1}/g, '$19NZ4144B8SJP$2')
        .replace(/(["',:\s]){1}B17K7P5V96W3(["',:\s]){1}/g, '$19SG7TNMGV3C7$2');

    // 完成修改并返回修改后的请求体
    $done({body: modifiedBody});
} else {
    // 如果请求体不存在，不做任何修改
    $done({});
}
