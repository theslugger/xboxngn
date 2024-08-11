/**
 * 此脚本用于通过字符匹配全局替换响应体中的特定字符串
 */

// 获取响应体并直接进行修改
let body = $response.body;

// 字符串全局替换 "9P8RZ65WCKW4" 为 "9NZ4144B8SJP"
while (body.includes("9P8RZ65WCKW4")) {
    body = body.replace("9P8RZ65WCKW4", "9NZ4144B8SJP");
}

// 字符串全局替换 "9QKDBKVM7BMF" 为 "9SG7TNMGV3C7"
while (body.includes("9QKDBKVM7BMF")) {
    body = body.replace("9QKDBKVM7BMF", "9SG7TNMGV3C7");
}

$done({ body });
