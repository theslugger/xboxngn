/**
 * 此脚本用于通过正则表达式全局替换请求体中的特定字符串
 */

let body = $request.body;

// 使用正则表达式全局替换字符串 "9P8RZ65WCKW4" 为 "9NZ4144B8SJP"
body = body.replace(/9P8RZ65WCKW4/g, '9NZ4144B8SJP');

// 使用正则表达式全局替换字符串 "9QKDBKVM7BMF" 为 "9SG7TNMGV3C7"
body = body.replace(/9QKDBKVM7BMF/g, '9SG7TNMGV3C7');

// 应用修改后的请求体
$done({ body });
