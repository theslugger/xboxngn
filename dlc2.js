var body = $response.body;
var obj = JSON.parse(body);

obj.pendingRequests.forEach(request => {
    // 确定fsid和cid，供后续使用
    var fsid = request.id;
    var cid = request.extendedMessage.cid || request.puid;

    // 动态构建popupStoreUrl，确保它总是先存在
    request.extendedMessage.popupStoreUrl = `https://www.microsoft.com/store/buyboxlitev2?clientType=storewebsdk&market=AR&deviceFamily=mobile&locale=es-AR&noCanonical=true&layout=modal&currentTheme=light&brand=GamingApp&clientVersion=0.5.4&ask={"fsid":"${fsid}","cid":"${cid}","src":"site"}`;

    // 获取金额并更新message，仅当amount存在时更新
    var amount = request.extendedMessage.amount;
    if (amount) {
        request.message = `si 是否可以购买此 game (支付 <b>$ ${amount},00<\/b>)?`;
    }

    // 动态构建并更新approvalUrl
    var appID = fsid.slice(0, fsid.indexOf("_")); // 从fsid获取appID部分
    var updatedApprovalUrl = `https://www.microsoft.com/es-AR/store/apps/${appID}?ask={"fsid":"${fsid}","cid":"${cid}","src":"site"}&origin=familyapp`;

    // 暂时移除现有的approvalUrl
    delete request.extendedMessage.approvalUrl;

    // 在popupStoreUrl之后重新添加已更新的approvalUrl
    request.extendedMessage.approvalUrl = updatedApprovalUrl;

    // 在approvalUrl之后添加skuId，仅当它不存在时
    if (!request.extendedMessage.skuId) {
        request.extendedMessage.skuId = "0010";
    }
});

// 将修改后的对象转换回JSON字符串
$body = JSON.stringify(obj);

// 将修改后的响应体返回给客户端
$done({body: $body});
