// 检查是否存在请求体
if ($request.body) {
    console.log("Original Body: " + $request.body); // 打印原始请求体

    // 执行替换操作
    var modifiedBody = $request.body
        .replace(/9MW9469V91LM/g, "BNBLPQM9MZ19")
        .replace(/B17K7P5V96W3/g, "9PFTWC8MM74Z");

    console.log("Modified Body: " + modifiedBody); // 打印修改后的请求体

    // 检查是否有变化
    if (modifiedBody === $request.body) {
        // 如果没有变化，发送一个通知
        $notification.post('修改失败', '未替换任何内容', '');
    } else {
        // 如果有变化，发送一个成功的通知
        $notification.post('修改成功', '内容已替换', '');
    }

    // 完成修改并返回修改后的请求体
    $done({body: modifiedBody});
} else {
    // 如果请求体不存在，发送一个错误通知
    console.log("No request body found.");
    $notification.post('错误', '没有找到请求体', '');
    $done({});
}
