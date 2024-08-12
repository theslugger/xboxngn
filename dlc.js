var url = $request.url;
var body = $request.body;

// 替换 URL 中的特定字符串
url = url.replace(/9MW9469V91LM_0010/g, "BNBLPQM9MZ19_0X3J");

// 替换请求体中的相同字符串
body = body.replace(/9MW9469V91LM_0010/g, "BNBLPQM9MZ19_0X3J");

// 返回修改后的请求
$done({url: url, body: body});
