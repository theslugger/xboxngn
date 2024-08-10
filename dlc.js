/**
 * 此脚本用于通过正则表达式灵活匹配和替换响应体中的productId和availabilityId的值
 */

let body = $response.body;

// 定义正则表达式，考虑到可能的空格和换行
const productIdRegex = /("productId"\s*:\s*"9P8RZ65WCKW4")/;
body = body.replace(productIdRegex, '"productId":"9NZ4144B8SJP"');

const availabilityIdRegex = /("availabilityId"\s*:\s*"9QKDBKVM7BMF")/;
body = body.replace(availabilityIdRegex, '"availabilityId":"9SG7TNMGV3C7"');

// 保存修改后的响应体
$done({ body });
