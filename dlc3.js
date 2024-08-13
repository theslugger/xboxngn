// 检查是否存在请求体并尝试解析为 JSON
if ($request.body) {
    try {
        // 将请求体解析为 JSON 对象
        var body = JSON.parse($request.body);

        // 遍历 items 数组，修改 productId 和 availabilityId
        body.items.forEach(item => {
            if (item.productId === "9MW9469V91LM") {
                item.productId = "9NZ4144B8SJP";
            }
            if (item.availabilityId === "B17K7P5V96W3") {
                item.availabilityId = "9SG7TNMGV3C7";
            }
        });

        // 将修改后的 JSON 对象转换回字符串形式的请求体
        var modifiedBody = JSON.stringify(body);

        // 完成修改并返回修改后的请求体
        $done({body: modifiedBody});
    } catch (error) {
        // 如果解析失败，打印错误信息并返回未修改的请求体
        console.error("Error parsing or modifying request body: " + error);
        $done({});
    }
} else {
    // 如果请求体不存在，不做任何修改
    $done({});
}
