/**
 * 此脚本用于通过字符串匹配在响应体中替换productId和availabilityId的值
 */

let body = $response.body;

// 替换productId的值
body = body.replace('"productId":"9P8RZ65WCKW4"', '"productId":"9NZ4144B8SJP"');

// 替换availabilityId的值
body = body.replace('"availabilityId":"9QKDBKVM7BMF"', '"availabilityId":"9SG7TNMGV3C7"');

// 保存修改后的响应体
$done({ body });
