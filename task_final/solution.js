function sendRequest(name, phone, address, goods, sum) {
      
  let data = {goods: [], order: {}};

  data.client = name + " " + phone;   
  
  let addr = "ул. " + address.street +", дом " + address.house + ", " + address.entrance + " подъезд, " + address.floor + " этаж, кв " + address.flat;
  let order = {};
  order.address = addr; order.sum = sum;
  data.order = order;
   
   let countOfGoods = goods.length;
   for (let i = 0; i < countOfGoods; i += 1) {
       let title = goods[i].title;
       let count = goods[i].count;
       let    good = {title, count};
       data.goods.push(good);
   }

   let jsonData = JSON.stringify({data: data});

   return jsonData;
}
 