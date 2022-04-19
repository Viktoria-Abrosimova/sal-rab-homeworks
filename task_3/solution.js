function renderCartItem(item) {
    const product = item;
   
    // Задание №3.1. Формирование строки корзины
    // product - объект вида {id: id, title: title, count: count, price: price}
      
    // 1. Создайте переменную itemCountText, равную пустой строке
    let itemCountText="";
    // 2. Присвойте переменной itemCountText результат склеивания itemCountText и количества
    // 3. Присвойте переменной itemCountText результат склеивания itemCountText и ` × `
    // 4. Присвойте переменной itemCountText результат склеивания itemCountText и цены
    // 5. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽ = `
    itemCountText+=product.count + " × " + product.price + " ₽ = ";
    // 6. Создайте переменную sum и присвойте ей значение произведения количества и цены
    let sum = product.count*product.price;
    // 7. Присвойте переменной itemCountText результат склеивания itemCountText и sum
    // 8. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽`
    itemCountText = itemCountText + sum + " ₽";
    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
