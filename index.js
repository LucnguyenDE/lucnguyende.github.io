var product_list = [];
var cartListPurchase = [];
const back = document.querySelector("#back");
const cartGrocery = document.querySelector("#cart");
const alert_quantity = document.querySelector("#item_alert");
var item_json = localStorage.getItem("ITEM_PURCHASE");
if (JSON.parse(item_json) !== null) {
  cartListPurchase = JSON.parse(item_json);
  renderCartPurchase(cartListPurchase);
} else {
  document.querySelector(
    "#table_cart"
  ).innerHTML = `<p> Mời bạn chọn sản phẩm. </p>`;
}
axios({
  url: "https://62f8b7483eab3503d1da151c.mockapi.io/products",
  method: "GET",
})
  .then(function (response) {
    product_list = response.data;
    renderProduct(product_list);
  })
  .catch(function (error) {
    console.log("error: ", error);
  });
function showApple() {
  var cartItem = [];
  product_list.forEach(function (item) {
    if (item.type.toLowerCase() == "iphone") {
      cartItem.push(item);
    }
  });
  back.classList.remove("d-none");
  renderProduct(cartItem);
}
function showSamSung() {
  var cartItem = [];
  product_list.forEach(function (item) {
    if (item.type.toLowerCase() == "samsung") {
      cartItem.push(item);
    }
  });
  back.classList.remove("d-none");
  renderProduct(cartItem);
}
function backToList() {
  renderProduct(product_list);
  back.classList.add("d-none");
}
function addItem(id) {
  var item = product_list.find(function (item) {
    return item.name === id;
  });
  var new_product = new Product(
    item.name,
    item.price,
    item.screen,
    item.backCamera,
    item.frontCamera,
    item.img,
    item.desc,
    item.type
  );
  var cartItem = {
    product: new_product,
    quantity: 1,
  };
  console.log("cartItem: ", cartItem);
  var index_check_duplicate = cartListPurchase.findIndex(function (item) {
    return item.product.name === id;
  });
  console.log("index_check_duplicate: ", index_check_duplicate);
  if (index_check_duplicate === -1) {
    cartListPurchase.push(cartItem);
  } else {
    cartListPurchase[index_check_duplicate].quantity++;
  }
  saveLocalStorage();
  renderCartPurchase(cartListPurchase);
}
function showCart() {
  cartGrocery.classList.remove("d-none");
}
function hideCart() {
  cartGrocery.classList.add("d-none");
}
