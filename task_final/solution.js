function sendRequest(name, phone, address, sum,goods) {
  let data  = {client: {name, phone},order:{address, sum}, goods:[count,title]};
    let countOfGoods = goods.length;
    for (let i = 0; i <= countOfGoods; i ++) {
        data.goods.push(goods[i].title);
        data.goods.push(goods[i].count);
    }
    data.order.address = address;
    data.order.sum = name + phone + address + goods + sum;
    data.client = 'Иван';
    let jsonData = JSON.stringify(data);
    return jsonData;
}
 