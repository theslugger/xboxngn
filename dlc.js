var body = $response.body;
var obj = JSON.parse(body);

// 查找特定id并修改相关字段
obj.pendingRequests.forEach(request => {
    if (request.id === "9NZ4144B8SJP_0010") {
        request.extendedMessage.popupStoreUrl = "https://www.microsoft.com/store/buyboxlitev2?clientType=storewebsdk&amp;market=AR&amp;deviceFamily=mobile&amp;locale=es-AR&amp;noCanonical=true&amp;layout=modal&amp;currentTheme=light&amp;brand=GamingApp&amp;clientVersion=0.5.4&amp;ask={\"fsid\":\"9NZ4144B8SJP_0010\",\"cid\":\"8290099219422594499\",\"src\":\"site\"}";
        request.message = si 是否可以购买此 game (支付 <b>$ 2.659,00<\/b>)?";
        request.extendedMessage.approvalUrl = "https://www.microsoft.com/es-AR/store/apps/9NZ4144B8SJP?ask={\"fsid\":\"9NZ4144B8SJP_0010\",\"cid\":\"8290099219422594499\",\"src\":\"site\"}&origin=familyapp";
    }
});

// 将修改后的对象转换回JSON字符串
$body = JSON.stringify(obj);

// 将修改后的响应体返回给客户端
$done({body: $body});
