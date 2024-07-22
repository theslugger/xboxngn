
// buy.js 脚本内容
let storedCartId = $persistentStore.read("cartId");

if (storedCartId) {
    let headers = $request.headers;
    let body = JSON.parse($request.body);
    
    // 检查是否存在 cartId 字段并替换
    if (body.cartId) {
        console.log(`原始 Cart ID: ${body.cartId}`);
        body.cartId = storedCartId;
        console.log(`修改后的 Cart ID: ${body.cartId}`);
    }

    // 可以根据需要修改请求头
    headers['X-MS-Market'] = 'NG';

    // 使用修改后的数据完成请求
    $done({
        headers: headers,
        body: JSON.stringify(body)
    });
} else {
    $notification.post("购物车 ID 未存储", "无法修改请求体因为没有存储的 Cart ID", "");
    $done();  // 结束处理，不修改请求
}
