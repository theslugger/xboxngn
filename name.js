var body = $response.body;

// 确保响应体存在并且不为空
if (body) {
    var obj = JSON.parse(body);

    // 修改 title 和 imageUri
    obj.title = "Liga Overwatch™ - 100 Fichas de Liga"; // 使用先前指定的 appName
    obj.imageUri = "\/\/store-images.s-microsoft.com\/image\/apps.53647.67853844255942228.41453783-f2e6-44d2-9beb-e2557b254e8a.d861ebc3-a645-4a02-86eb-1b720c3db023?w=200&h=200&q=60"; // 使用先前指定的 appIcon

    // 检查并修改价格
    body = JSON.stringify(obj);

    // 使用正则表达式进行价格的强字符替换
    // 这里的正则表达式考虑了可能的空格和格式差异
    var priceRegex = /"price":\s*"\$ 21\.999,50"/;
    body = body.replace(priceRegex, '"price": "$ 85.00"');

    // 重新封装修改后的响应内容并返回
    $done({body: body});
} else {
    // 如果没有有效的响应体，直接返回未修改的响应
    $done({});
}
