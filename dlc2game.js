/**
 * Surge的响应体处理脚本
 * 替换响应体中指定的字符串
 * 
 * @param {Object} $response - Surge提供的响应对象
 * @returns {Object} - 修改后的响应对象
 */
function replaceResponse($response) {
    if ($response.body) {
        let modifiedBody = $response.body.replace(/"type":"addOn","kind":"Consumable"/g, '"type":"games","kind":"Game"');
        return { body: modifiedBody };
    }
    return $response;
}

// 使用Surge提供的全局变量 $response 调用函数
$done(replaceResponse($response));
