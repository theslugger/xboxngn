var url = $request.url;
var body = $request.body;

// 正则表达式精确替换 URL 中的 fsid
url = url.replace(/fsid=9MW9469V91LM_0010(?!\d)/g, "fsid=BNBLPQM9MZ19_0X3J");

// 修改请求体中的 ProductId 和 SkuId
body = body.replace(/ProductId=9MW9469V91LM(?!\d)/g, "ProductId=BNBLPQM9MZ19");
body = body.replace(/SkuId=0010(?!\d)/g, "SkuId=0X3J");

// 返回修改后的请求
$done({url: url, body: body});
