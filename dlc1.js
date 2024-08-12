var body = $response.body;
var obj = JSON.parse(body);

obj.pendingRequests.forEach(request => {
    // 动态构建popupStoreUrl，确保它总是存在
    if (!request.extendedMessage.popupStoreUrl) {
        request.extendedMessage.popupStoreUrl = `https://www.microsoft.com/store/buyboxlitev2?clientType=storewebsdk&market=AR&deviceFamily=mobile&locale=es-AR&noCanonical=true&layout=modal&currentTheme=light&brand=GamingApp&clientVersion=0.5.4&ask={"fsid":"${request.id}","cid":"${request.extendedMessage.cid || request.puid}","src":"site"}`;
    }

    // 动态构建message
    var amount = request.extendedMessage.amount; // 获取金额，用于更新消息文本
    if (amount) { // 确保amount存在
        request.message = `si 是否可以购买此 game (支付 <b>$ ${amount},00<\/b>)?`; // 动态更新消息文本
    }

    // 动态构建approvalUrl
    var appID = request.id.slice(0, request.id.indexOf("_")); // 从ID获取appID部分
    if (appID) { // 确保appID提取正确
        request.extendedMessage.approvalUrl = `https://www.microsoft.com/es-AR/store/apps/${appID}?ask={"fsid":"${request.id}","cid":"${request.extendedMessage.cid || request.puid}","src":"site"}&origin=familyapp`;
    }
});

// 将修改后的对象转换回JSON字符串
$body = JSON.stringify(obj);

// 将修改后的响应体返回给客户端
$done({body: $body});
