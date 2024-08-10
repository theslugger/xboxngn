/**
 * 此脚本用于通过字符串匹配删除响应体中的"legalNotices":["DlcRequiresGame"]
 */

let body = $response.body;

// 通过字符串替换来完全移除"legalNotices":["DlcRequiresGame"]
const pattern = '"legalNotices":\\["DlcRequiresGame"\\],';
body = body.replace(new RegExp(pattern, 'g'), '');

// 保存修改后的响应体
$done({ body });
