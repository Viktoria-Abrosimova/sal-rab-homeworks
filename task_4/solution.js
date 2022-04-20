// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
   let data= JSON.parce(json);
    return data.products;
}


function renderProductCards (json)
{
clearProducts();
products = parseProducts(json);
let length=products.length;
for (let i=0;i<length-1;i++)
{
   addProduct(products[i]); 
}
}
