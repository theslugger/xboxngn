// 获取响应体
let body = $response.body;

// 替换所有 "false" 为 "true"
body = body.replace(/false/g, 'true');

// 返回修改后的响应体
$done({ body });
