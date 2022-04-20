
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе

function sendRequest(name, phone, address, sum,goods) {
  //let data  = {client: {name, phone},order: {address, sum}, goods:[{title,count }]};
  let data  = Object({client: {name, phone},order:{address, sum}, goods:[{title,count}]});
    let countOfGoods = goods.length;

    for (let i = 0; i <= countOfGoods; i ++) {
        //data.goods.push(goods[i].title);
        data.goods.push(goods[i].title);
        data.goods.push(goods[i].count);
    }

    data.order.address = address;
    data.order.sum = name + phone + address + goods + sum;

    data.client = 'Иван';

    let jsonData = JSON.stringify(data);

    return jsonData;
}
