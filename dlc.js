var url = $request.url;
var body = $request.body;

// 修改 URL 中的 fsid 参数
url = url.replace("9MW9469V91LM_0010", "BNBLPQM9MZ19_0X3J");

// 检查是否需要修改查询字符串中的 JSON
if (url.includes("buyboxlitev2") && body.includes("fsid\":\"9MW9469V91LM_0010")) {
    // 假设查询字符串是以 JSON 格式发送的
    var data = JSON.parse(decodeURIComponent(body));
    if (data && data.fsid) {
        data.fsid = data.fsid.replace("9MW9469V91LM_0010", "BNBLPQM9MZ19_0X3J");
        // 重新编码为查询字符串
        body = encodeURIComponent(JSON.stringify(data));
    }
}

// 输出修改后的请求
console.log("Modified URL: " + url);
console.log("Modified Body: " + body);

// 返回修改后的请求
$done({url: url, body: body});
