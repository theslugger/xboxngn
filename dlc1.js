/**
 * Surge的响应体处理脚本
 * 通过正则表达式严格替换响应体中的特定字符串
 * 
 * @param {Object} $response - Surge提供的响应对象
 * @returns {Object} - 修改后的响应对象
 */
function replaceResponse($response) {
    if ($response.body) {
        // 使用正则表达式全局替换完整的字符串
        let modifiedBody = $response.body
            .replace(/\b9P8RZ65WCKW4\b/g, '9NZ4144B8SJP')  // 替换 "9P8RZ65WCKW4" 为 "9NZ4144B8SJP"
            .replace(/\b9QKDBKVM7BMF\b/g, '9SG7TNMGV3C7'); // 替换 "9QKDBKVM7BMF" 为 "9SG7TNMGV3C7"

        return { body: modifiedBody };
    }
    return $response;
}

// 使用Surge提供的全局变量 $response 调用函数
$done(replaceResponse($response));
