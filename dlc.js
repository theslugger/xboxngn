var url = $request.url;
var body = $request.body;

// 使用边界检查来替换 URL 中的特定字符串
url = url.replace(/\b9MW9469V91LM_0010\b/g, "BNBLPQM9MZ19_0X3J");

// 使用边界检查来替换请求体中的相同字符串
body = body.replace(/\b9MW9469V91LM_0010\b/g, "BNBLPQM9MZ19_0X3J");

// 返回修改后的请求
$done({url: url, body: body});
