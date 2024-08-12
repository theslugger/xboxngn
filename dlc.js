var body = $response.body;
var url = $request.url;

// 明确替换URL中的fsid值
if (url.includes("9MW9469V91LM_0010")) {
    url = url.replace("9MW9469V91LM_0010", "BNBLPQM9MZ19_0X3J");
}

// 明确替换请求体中的ProductId参数
if (url.includes("&ProductId=9MW9469V91LM&")) {
    url = url.replace("&ProductId=9MW9469V91LM&", "&ProductId=BNBLPQM9MZ19&");
}

// 如果需要修改响应体中的内容，可以根据实际情况添加相应的代码
body = body.replace(/"fsid":"9MW9469V91LM_0010"/g, '"fsid":"BNBLPQM9MZ19_0X3J"');
body = body.replace(/"ProductId":"9MW9469V91LM"/g, '"ProductId":"BNBLPQM9MZ19"');

// 返回修改后的响应
$done({body: body, url: url});
