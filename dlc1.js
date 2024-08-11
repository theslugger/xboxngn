/**
 * 此脚本用于通过严格的正则表达式全局替换响应体中的特定字符串
 */

// 获取响应体并直接进行修改
let modifiedResponse = $response.body;

// 严格使用正则表达式全局替换完整字符串 "9P8RZ65WCKW4" 为 "9NZ4144B8SJP"
modifiedResponse = modifiedResponse.replace(/\b9P8RZ65WCKW4\b/g, '9NZ4144B8SJP');

// 严格使用正则表达式全局替换完整字符串 "9QKDBKVM7BMF" 为 "9SG7TNMGV3C7"
modifiedResponse = modifiedResponse.replace(/\b9QKDBKVM7BMF\b/g, '9SG7TNMGV3C7');

// 应用修改后的响应体
$done({ body: modifiedResponse });
