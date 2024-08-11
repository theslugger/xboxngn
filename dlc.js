/**
 * 此脚本用于通过正则表达式全局替换响应体中的特定字符串
 */

// 检查响应体是否存在
if ($response.body) {
    let body = $response.body;

    // 使用正则表达式全局替换字符串 "9P8RZ65WCKW4" 为 "9NZ4144B8SJP"
    body = body.replace(/9P8RZ65WCKW4/g, '9NZ4144B8SJP');

    // 使用正则表达式全局替换字符串 "9QKDBKVM7BMF" 为 "9SG7TNMGV3C7"
    body = body.replace(/9QKDBKVM7BMF/g, '9SG7TNMGV3C7');

    // 应用修改后的响应体
    $done({ body });
} else {
    // 如果响应体不存在，直接返回原响应
    $done({});
}
