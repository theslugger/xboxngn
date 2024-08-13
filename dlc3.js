// 解析请求体为 JSON 对象
var body = JSON.parse($request.body);

// 修改 productId 和 availabilityIdd
body.items.forEach(item => {
    if (item.productId === "9MW9469V91LM") {
        item.productId = "9NZ4144B8SJP";
    }
    if (item.availabilityIdd === "B17K7P5V96W3") {
        item.availabilityIdd = "9SG7TNMGV3C7";
    }
});

// 将修改后的 JSON 对象转换回字符串形式的请求体
var modifiedBody = JSON.stringify(body);

// 完成修改
$done({body: modifiedBody});
