var url = $request.url;

// 替换 URL 中的 fsid 参数
url = url.replace("9MW9469V91LM_0010", "BNBLPQM9MZ19_0X3J");

// 解析 URL 查询字符串中的 `ask` 参数，并替换其中的 `fsid`
var urlObj = new URL(url);
var askParam = urlObj.searchParams.get("ask");
if (askParam) {
    var askData = JSON.parse(decodeURIComponent(askParam));
    askData.fsid = askData.fsid.replace("9MW9469V91LM_0010", "BNBLPQM9MZ19_0X3J");
    urlObj.searchParams.set("ask", encodeURIComponent(JSON.stringify(askData)));
}

// 重构 URL
url = urlObj.toString();

// 输出修改后的 URL 以供调试
console.log("Modified URL: " + url);

// 返回修改后的请求
$done({url: url});
