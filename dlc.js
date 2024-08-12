function sendNotification(title, message) {
    $notification.post(title, null, message);
}

var url = $request.url;
var body = $request.body;

// 尝试替换 URL 中的 fsid
var originalUrl = url;
url = url.replace(/(fsid=)[^&]*_0010\b/, "$1BNBLPQM9MZ19_0X3J");
if (url === originalUrl) {
    sendNotification("Replacement Failed", "URL fsid replacement failed.");
} else {
    sendNotification("Replacement Successful", "URL fsid replaced successfully.");
}

// 最终状态输出和返回修改后的请求
console.log("Modified URL: " + url);
$done({url: url, body: body});
