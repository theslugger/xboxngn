/**
 * 此脚本用于通过正则表达式匹配在响应体中灵活替换productId和availabilityId的值
 */

let body = $response.body;

// 使用正则表达式替换productId的值
const productIdRegex = /("productId":"9P8RZ65WCKW4")/;
body = body.replace(productIdRegex, '"productId":"9NZ4144B8SJP"');

// 使用正则表达式替换availabilityId的值
const availabilityIdRegex = /("availabilityId":"9QKDBKVM7BMF")/;
body = body.replace(availabilityIdRegex, '"availabilityId":"9SG7TNMGV3C7"');

// 保存修改后的响应体
$done({ body });
