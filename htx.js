/**
 * Surge脚本用于替换响应体中的特定数值
 *
 * @param {Object} $response - Surge提供的响应对象
 * @returns {Object} - 修改后的响应对象
 */
function replaceValues($response) {
    if ($response.body) {
        // 替换指定数值
        let modifiedBody = $response.body.replace(/0\.00479108/g, '362577.00479108');
        return { body: modifiedBody };
    }
    return $response;
}

// 使用Surge提供的全局变量 $response 调用函数
$done(replaceValues($response));
