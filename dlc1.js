/**
 * 此脚本用于通过字符匹配全局替换响应体中的特定字符串
 */

// 直接在响应体上进行全局字符替换
let modifiedResponse = $response.body;

while (modifiedResponse.includes("9P8RZ65WCKW4")) {
    modifiedResponse = modifiedResponse.replace("9P8RZ65WCKW4", "9NZ4144B8SJP");
}

while (modifiedResponse.includes("9QKDBKVM7BMF")) {
    modifiedResponse = modifiedResponse.replace("9QKDBKVM7BMF", "9SG7TNMGV3C7");
}

$done({ body: modifiedResponse });
