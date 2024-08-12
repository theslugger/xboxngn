var url = $request.url;
var body = $request.body;

// 打印原始URL和请求体进行调试
console.log("Original URL: " + url);
console.log("Original Body: " + body);

// 正则表达式替换 URL 中的 fsid
url = url.replace(/fsid=9MW9469V91LM_0010(?!\d)/, "fsid=BNBLPQM9MZ19_0X3J");

// 解析并替换URL查询字符串中的`ask`参数
var askMatch = url.match(/ask=([^&]*)/);
if (askMatch && askMatch[1]) {
    let askDecoded = decodeURIComponent(askMatch[1]);
    askDecoded = askDecoded.replace(/"fsid":"9MW9469V91LM_0010"(?!\d)/g, '"fsid":"BNBLPQM9MZ19_0X3J"');
    url = url.replace(askMatch[1], encodeURIComponent(askDecoded));
}

// 修改请求体中的ProductId和SkuId
if (body) {
    body = body.replace(/ProductId=9MW9469V91LM(?!\d)/g, "ProductId=BNBLPQM9MZ19");
    body = body.replace(/SkuId=0010(?!\d)/g, "SkuId=0X3J");
}

// 打印修改后的 URL 和 请求体供调试
console.log("Modified URL: " + url);
console.log("Modified Body: " + body);

// 返回修改后的请求
$done({url: url, body: body});
