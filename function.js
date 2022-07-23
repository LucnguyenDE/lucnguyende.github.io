// DOM tới thẻ ID
function dom_id(id) {
  return document.getElementById(id);
}
// Thêm nội dung vào bên trong thẻ ID
function put_text_into_id(id, text_content) {
  return (dom_id(id).innerHTML = text_content);
}
// Lấy giá trị của ID
function dom_id_value(id) {
  var tag_id = document.getElementById(id);
  var valuez = tag_id.value;
  return valuez;
}
// Xóa các giá trị vừa nhập
function ecrease_input_value(id, value) {
  var tagID = document.getElementById(id);
  var value;
  return (tagID.value = `${value}`);
}
//Trả về giá trị cho biếns
function return_value(id, value) {
  value = dom_id_value(id);
}
//Trả về giá trị cho biến, xóa các giá trị đã nhập trong ô input trên màn hình
function return_and_ecrease(id, value) {
  var value;
  value = dom_id_value(id);
  ecrease_input_value(id);
}
// Thêm item vào cuối mảng
function add_item_to_end(array_A, item) {
  return (array_A = array_A.push(Number(item)));
}
//Lấy giá trị (number) của người dùng nhập cho vào mảng
function put_number_into_array(id, array__of__number) {
  var num__inp;
  num__inp = dom_id_value(id);
  add_item_to_end(array__of__number, num__inp);
  return array__of__number;
}
// Sắp xếp số nhập vào theo thứ tự tăng dần
function arrange_min_to_max(array, new_arange_array) {
  var a = 0;
  var number = 0;
  var min = 0;
  number = array.length;
  for (a = 0; a < number; a++) {
    min = array[0];
    for (i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    new_arange_array.push(Number(min));
    array.splice(array.indexOf(Number(min)), 1);
  }
  return new_arange_array;
}
//Enter lấy giá trị người dùng nhập cho vào mảng
function enter_put_value_into_array(id, array__number) {
  let input;
  // Get the input field: enter chỉ hoạt động khi truy cập vào input
  input = dom_id(id);
  // Execute a function when the user presses a key on the keyboard
  // If the user presses the "Enter" key on the keyboard
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      // event.preventDefault();
      put_number_into_array(id, array__number);
      ecrease_input_value(id);
    }
  });
}
// Trả về cách đọc số
function return_name_of_number(aa) {
  switch (aa) {
    case 1:
      return "một";
    case 2:
      return "hai";
    case 3:
      return "ba";
    case 4:
      return "bốn";
    case 5:
      return "năm";
    case 6:
      return "sáu";
    case 7:
      return "bảy";
    case 8:
      return "tám";
    case 9:
      return "chín";
    default:
      return "không";
  }
}
//Lấy màu ngẫu nhiên
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    //Math floor làm tròn về số nguyên nhỏ hơn
    //Math.random() ra kết quả bé hơn 1 (ví dụ: 0,123415125)
    // letter có 15 kí tự từ 0 - 15
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
