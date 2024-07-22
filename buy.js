let storedCartId = $persistentStore.read("cartId");

// 根据是否成功读取购物车 ID 发送不同的通知
if (storedCartId) {
    $notification.post("Cart ID 提取成功", `Cart ID: ${storedCartId}`, "");
    console.log(`读取到的 Cart ID: ${storedCartId}`);
} else {
    $notification.post("Cart ID 提取失败", "未能读取到 Cart ID", "");
    console.log("未能读取到 Cart ID");
}

let headers = $request.headers;
let body = JSON.parse($request.body);

// 修改请求体中的 cartId
if (body.cartId) {
    console.log(`原始 Cart ID: ${body.cartId}`);
    body.cartId = storedCartId;
    console.log(`修改后的 Cart ID: ${body.cartId}`);
}

// 修改请求头中的市场代码
if (headers['X-MS-Market']) {
    console.log(`原始 X-MS-Market: ${headers['X-MS-Market']}`);
    headers['X-MS-Market'] = 'NG';
    console.log(`修改后的 X-MS-Market: ${headers['X-MS-Market']}`);
}
if (headers['x-ms-market']) {
    console.log(`原始 x-ms-market: ${headers['x-ms-market']}`);
    headers['x-ms-market'] = 'NG';
    console.log(`修改后的 x-ms-market: ${headers['x-ms-market']}`);
}

// 发送修改后的请求
$done({
    headers: headers,
    body: JSON.stringify(body)
});
