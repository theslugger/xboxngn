var url = $request.url;
var body = $request.body;

// 使用正则表达式替换 URL 中的 fsid
url = url.replace(/fsid=9MW9469V91LM_0010/g, "fsid=BNBLPQM9MZ19_0X3J");

// 修改 URL query 中的 `ask` 参数
var askMatches = url.match(/ask=([^&]+)/);
if (askMatches && askMatches[1]) {
    var decodedAsk = decodeURIComponent(askMatches[1]);
    decodedAsk = decodedAsk.replace("9MW9469V91LM_0010", "BNBLPQM9MZ19_0X3J");
    url = url.replace(askMatches[1], encodeURIComponent(decodedAsk));
}

// 修改请求体
if (body) {
    // 替换 ProductId
    body = body.replace(/ProductId=9MW9469V91LM/g, "ProductId=BNBLPQM9MZ19");
    // 替换 SkuId
    body = body.replace(/SkuId=0010/g, "SkuId=0X3J");
}

// 返回修改后的请求
$done({url: url, body: body});
