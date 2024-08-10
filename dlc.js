/**
 * 此脚本用于全局替换响应体中的指定字符串
 */

let body = $response.body;

// 全局替换字符串 "9P8RZ65WCKW4" 为 "9NZ4144B8SJP"
body = body.replace(/9P8RZ65WCKW4/g, '9NZ4144B8SJP');

// 全局替换字符串 "9QKDBKVM7BMF" 为 "9SG7TNMGV3C7"
body = body.replace(/9QKDBKVM7BMF/g, '9SG7TNMGV3C7');

// 保存修改后的响应体
$done({ body });
