var url = $request.url;
var body = $request.body;

// 替换 URL 中的产品 ID 和 SKU ID
url = url.replace("9MW9469V91LM_0010", "BNBLPQM9MZ19_0X3J");

// 替换请求体中的相关字段
if (body) {
    // 处理请求体是 JSON 格式的情况
    if (body.indexOf('{') >= 0) {
        var data = JSON.parse(body);

        // 替换产品 ID 和 SKU ID
        if (data.auth && typeof data.auth === 'string') {
            data.auth = data.auth.replace("9MW9469V91LM", "BNBLPQM9MZ19");
            data.auth = data.auth.replace("0010", "0X3J");
        }

        if (data.ProductId) {
            data.ProductId = "BNBLPQM9MZ19";
        }

        if (data.SkuId) {
            data.SkuId = "0X3J";
        }

        body = JSON.stringify(data);
    } else {
        // 处理请求体是 URL-encoded 形式
        body = body.replace("ProductId=9MW9469V91LM", "ProductId=BNBLPQM9MZ19");
        body = body.replace("SkuId=0010", "SkuId=0X3J");
    }
}

// 打印修改后的 URL 和 请求体供调试
console.log("Modified URL: " + url);
console.log("Modified Body: " + body);

// 返回修改后的请求
$done({url: url, body: body});
