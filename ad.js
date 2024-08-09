/**
 * Surge脚本：拒绝含 "toutiao" 的请求
 */

function rejectRequest(request) {
    var url = request.url;
    var pattern = /toutiao/;
    if (pattern.test(url)) {
        return {
            response: {
                status: 403,
                headers: { "Content-Type": "text/plain" },
                body: "This request has been blocked."
            }
        };
    }
    // 允许其他请求正常通过
    return { response: request };
}

$httpClient.post(rejectRequest);
