var container_2 = dom_id("container_2");
var height, weight, bmi;
var tagP1 = dom_id("type1_p");
var tagP2 = dom_id("type2_p");
var tagP3 = dom_id("type3_p");
var tagP4 = dom_id("type4_p");
var tagP5 = dom_id("type5_p");
var tagP6 = dom_id("type6_p");
function calculate_bmi() {
  height = dom_id_value("height") / 100;
  weight = dom_id_value("weight");
  bmi = weight / (height * height);
  console.log("bmi: ", bmi);
  // Có thể xóa bớt #type 0 trong các style
  // type0.classList.add("type0");
  if (bmi < 18.5) {
    container_2.className = "style1";
    tagP1.innerHTML = `Under Normal: ${bmi.toFixed(2)}`;
  } else if (bmi >= 18.5 && bmi < 25) {
    container_2.className = "style2";
    tagP2.innerHTML = `Normal : ${bmi.toFixed(2)}`;
  } else if (bmi >= 25 && bmi < 30) {
    container_2.className = "style3";
    tagP3.innerHTML = `Under weight: ${bmi.toFixed(2)}`;
  } else if (bmi >= 30 && bmi < 35) {
    container_2.className = "style4";
    tagP4.innerHTML = `Severe obesity :${bmi.toFixed(2)}`;
  } else if (bmi >= 35 && bmi < 40) {
    container_2.className = "style5";
    tagP5.innerHTML = `Morbid obesity: ${bmi.toFixed(2)}`;
  } else if (bmi >= 40) {
    container_2.className = "style6";
    tagP6.innerHTML = `Super obesity: ${bmi.toFixed(2)}`;
  }
  ecrease_input_value("height", "");
  ecrease_input_value("weight", "");
  height = undefined;
  weight = undefined;
}
