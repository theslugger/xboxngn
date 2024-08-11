/**
 * 替换响应体中的指定字符串
 * @param {string} body - 原始响应体文本
 * @return {string} - 修改后的响应体文本
 */
function replaceText(body) {
    let modified = body.replace(/"type":"addOn","kind":"Consumable"/g, '"type":"games","kind":"Game"');
    return modified;
}

/**
 * Surge的响应体处理函数
 * @param {Object} param - 包含响应体和其它信息的对象
 * @return {Object} - 返回修改后的响应对象
 */
function httpResponseModify(param) {
    if (param.response.body) {
        let body = param.response.body;
        let modifiedBody = replaceText(body);
        let modifiedResponse = {
            response: {
                body: modifiedBody
            }
        };
        return modifiedResponse;
    } else {
        return param;
    }
}

httpResponseModify($response);
