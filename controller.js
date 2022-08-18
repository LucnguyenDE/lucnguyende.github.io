function findProduct(id) {
  return product_list.find(function (product) {
    return product.name === id;
  });
}
function addItem(id) {
  var current_product = findProduct(id);
  var product = new Product(
    current_product.name,
    current_product.price,
    current_product.creen,
    current_product.backCamera,
    current_product.frontCamera,
    current_product.img,
    current_product.desc,
    current_product.type
  );
  var cartItem = {
    item: product,
    quantity: 1,
  };
  cart.push(cartItem);
  console.log("cart: ", cart);
}
var renderProduct = function (list) {
  var contentHTML = "";
  list.forEach(function (item) {
    var rowContent = `
      <div class="col-3 p-3">
      <div class="column_container p-2">
        <img
          src="${item.img}"
          alt="${item.name}"
        />
        <p>${item.name}</p>
        <p>${item.desc}</p>
        <p>${item.screen}</p>
        <p>${item.backCamera}</p>
        <p>${item.frontCamera}</p>
        <p>${item.price}</p>
        <button class="btn" id="add_button" onclick="addItem('${item.name}')">+</button>
      </div>
    </div>`;
    contentHTML += rowContent;
  });
  document.querySelector("#row_render").innerHTML = contentHTML;
};
var renderCartPurchase = function (list) {
  var contentHTML = "";
  var totalPrice = 0;
  var totalQuantity = 0;
  list.forEach(function (item) {
    var cartContent = `
  <tr>
  <td class="p-2" style="width: 20%">
    <img
      width="80px"
      src="${item.product.img}"
      alt=""
    />
  </td>
  <td style="width: 35%">${item.product.name}</td>
  <td>
    <div class="d-flex justify-content-center align-items-center">
      <button onclick="decreaseItem('${item.product.name}')">-</button>
      <p class="mx-3 mb-0">${item.quantity}</p>
      <button onclick="increaseItem('${item.product.name}')">+</button>
    </div>
  </td>
  <td class="text-center">${item.product.price * item.quantity}</td>
  <td class="text-right">
    <button onclick = "deleteItem('${
      item.product.name
    }')"><i class="fa fa-trash"></i></button>
  </td>
</tr>  
  `;
    var item_price = item.product.price * item.quantity;
    var item_quantity = item.quantity;
    totalPrice += item_price;
    contentHTML += cartContent;
    totalQuantity += item.quantity;
  });
  var table_content_1 = ` <tr>
  <td>Tổng tiền:</td>
  <td></td>
  <td></td>
  <td class="text-center">${totalPrice.toLocaleString()} VNĐ</td>
</tr>`;
  var table_content_2 = `  <tr id="td_no_border">
<td></td>
<td></td>
<td><button class="p-2 btn-success" onclick="purchaseItem()">Thanh toán</button></td>
<td><button class="p-2 btn-danger" onclick="cancelPurchase()">Hủy đơn</button></td>
</tr>`;
  contentHTML += table_content_1;
  contentHTML += table_content_2;
  document.querySelector("#table_cart").innerHTML = contentHTML;
  alert_quantity.innerHTML = `${totalQuantity}`;
};
function deleteItem(id) {
  var delete_index = cartListPurchase.findIndex(function (item) {
    return item.product.name === id;
  });
  if (delete_index !== -1) {
    cartListPurchase.splice(delete_index, 1);
    saveLocalStorage();
  }
  if (cartListPurchase.length > 0) {
    renderCartPurchase(cartListPurchase);
  } else {
    document.querySelector(
      "#table_cart"
    ).innerHTML = `<p> Mời bạn chọn sản phẩm. </p>`;
    alert_quantity.innerHTML = `0`;
  }
}
function decreaseItem(id) {
  var index_item_change = cartListPurchase.findIndex(function (item) {
    return item.product.name === id;
  });
  cartListPurchase[index_item_change].quantity--;
  var current_item_quantity = cartListPurchase[index_item_change].quantity;
  console.log("current_item_quantity: ", current_item_quantity);
  if (current_item_quantity === 0) {
    deleteItem(id);
  }
  saveLocalStorage();
  renderCartPurchase(cartListPurchase);
}

function increaseItem(id) {
  var index_item_change = cartListPurchase.findIndex(function (item) {
    return item.product.name === id;
  });
  cartListPurchase[index_item_change].quantity++;
  saveLocalStorage();
  renderCartPurchase(cartListPurchase);
}
function purchaseItem() {
  cartListPurchase = [];
  saveLocalStorage();
  document.querySelector(
    "#table_cart"
  ).innerHTML = `<p> Cảm ơn bạn đã mua hàng! </p>`;
  alert_quantity.innerHTML = `0`;
}
function cancelPurchase() {
  cartListPurchase = [];
  saveLocalStorage();
  document.querySelector(
    "#table_cart"
  ).innerHTML = `<p> Mời bạn chọn sản phẩm. </p>`;
  alert_quantity.innerHTML = `0`;
}
function saveLocalStorage() {
  var item_json = JSON.stringify(cartListPurchase);
  localStorage.setItem("ITEM_PURCHASE", item_json);
}
