var url = $request.url;
var body = $request.body;

// 初始状态输出，用于调试，不需要通知
console.log("Original URL: " + url);
console.log("Original Body: " + body);

// 检查并尝试替换 URL 中的 fsid
var originalUrl = url;
url = url.replace(/(fsid=)[^&]*_0010\b/, "$1BNBLPQM9MZ19_0X3J");
if (url === originalUrl) {
    $notification.post("FSID Replacement", "Failure", "URL fsid replacement failed.");
} else {
    $notification.post("FSID Replacement", "Success", "URL fsid replaced successfully.");
}

// 如果 URL 查询参数中包含 JSON，修改其中的 fsid
var urlObj = new URL(url);
var askParam = urlObj.searchParams.get("ask");
if (askParam) {
    var askData = JSON.parse(decodeURIComponent(askParam));
    var originalFsid = askData.fsid;
    askData.fsid = askData.fsid.replace("9MW9469V91LM_0010", "BNBLPQM9MZ19_0X3J");
    if (askData.fsid === originalFsid) {
        $notification.post("JSON FSID Replacement", "Failure", "JSON fsid replacement failed.");
    } else {
        $notification.post("JSON FSID Replacement", "Success", "JSON fsid replaced successfully.");
    }
    // 更新 URL 参数
    urlObj.searchParams.set("ask", encodeURIComponent(JSON.stringify(askData)));
    url = urlObj.toString();
}

// 检查并尝试替换请求体中的 ProductId 和 SkuId
var originalBody = body;
body = body.replace(/(ProductId=)[^&]*\b/, "$1BNBLPQM9MZ19");
body = body.replace(/(SkuId=)[^&]*\b/, "$10X3J");
if (body === originalBody) {
    $notification.post("Body Replacement", "Failure", "Body replacement failed.");
} else {
    $notification.post("Body Replacement", "Success", "Body replaced successfully.");
}

// 返回修改后的请求
$done({url: url, body: body});
