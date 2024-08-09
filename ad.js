/**
 * Surge & Quantumult X脚本：拒绝含 "toutiao" 的请求
 * 部署路径：https://raw.githubusercontent.com/theslugger/xboxngn/main/reject_toutiao.js
 */

function rejectRequest(request) {
    return {
        response: {
            status: 403,
            headers: { "Content-Type": "text/plain" },
            body: "Access to this resource has been denied."
        }
    };
}

// Surge
$httpClient.post(rejectRequest);

// Quantumult X
$done(rejectRequest({}));
