// 检查是否存在请求体
if ($request.body) {
    console.log("Original Body: " + $request.body); // 打印原始请求体

    // 执行替换操作
    var modifiedBody = $request.body
        .replace(/9MW9469V91LM/g, "BNBLPQM9MZ19")   // 替换产品ID
        .replace(/B17K7P5V96W3/g, "9PFTWC8MM74Z")  // 替换可用性ID
        .replace(/0010/g, "0X3J");                // 替换 SKU ID

    console.log("Modified Body: " + modifiedBody); // 打印修改后的请求体

    // 完成修改并返回修改后的请求体
    $done({body: modifiedBody});
} else {
    // 如果请求体不存在，发送一个错误通知
    console.log("No request body found.");
    $notification.post('请求体未找到', '请检查请求类型或内容是否正确。', '');
    $done({});
}
