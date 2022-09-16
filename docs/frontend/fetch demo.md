# fetch demo

```
fetch('https://seller.xiapi.shopee.cn/api/v3/product/page_product_list/?SPC_CDS=3557b6ce-3c6e-4a75-ada1-7c26d78b49e0&SPC_CDS_VER=2&page_number=6&page_size=48&list_type=&search_type=name&source=seller_center&version=3.2.0')
    .then(res => res.json()).then(res => {
        var list = res.data.list;
        var ids = { ids: [] };
        list.forEach(item => {
            ids.ids.push(item.id);
        });
        console.log(ids);

        fetch('https://seller.xiapi.shopee.cn/api/v3/product/dismiss_invalid_products?SPC_CDS=3557b6ce-3c6e-4a75-ada1-7c26d78b49e0&SPC_CDS_VER=2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ids)
        });


    });
```
