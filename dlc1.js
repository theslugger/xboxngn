/**
 * Surge的响应体处理脚本
 * 通过正则表达式严格替换响应体中的特定字符串，允许前面有数字
 * 
 * @param {Object} $response - Surge提供的响应对象
 * @returns {Object} - 修改后的响应对象
 */
function replaceResponse($response) {
    if ($response.body) {
        // 允许数字前缀的正则表达式替换
        let modifiedBody = $response.body
            .replace(/(?:\d*)9P8RZ65WCKW4/g, '9NZ4144B8SJP')  // 允许数字前缀，替换 "9P8RZ65WCKW4" 为 "9NZ4144B8SJP"
            .replace(/(?:\d*)9QKDBKVM7BMF/g, '9SG7TNMGV3C7'); // 允许数字前缀，替换 "9QKDBKVM7BMF" 为 "9SG7TNMGV3C7"

        return { body: modifiedBody };
    }
    return $response;
}

// 使用Surge提供的全局变量 $response 调用函数
$done(replaceResponse($response));
