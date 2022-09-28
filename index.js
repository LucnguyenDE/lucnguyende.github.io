function showContent(tagID) {
  var obj = document.querySelector(tagID);
  var currentLI = obj.parentNode;
  var hidden_dot = currentLI.querySelector("#hidden_dot");
  var visible_dot = document.querySelector("#visible_dot");
  obj.className = "animation_1";
  if (
    document.querySelector("#global-nav").className ===
    "navbar-expand-lg navbar-light header-fixed1"
  ) {
    if (tagID === "#about_content") {
      visible_dot.classList.add("remain_visible_dot_size");
    } else if (
      tagID === "#home_content" ||
      tagID === "#courses_content" ||
      tagID === "#blog_content" ||
      tagID === "#shop_content" ||
      tagID === "#element_content"
    ) {
      hidden_dot.className = "nav-link hidden_dot_2";
    }
  } else if (
    document.querySelector("#global-nav").className ===
    "navbar-expand-lg navbar-light header-fixed2"
  ) {
    if (tagID === "#about_content") {
      visible_dot.classList.add("remain_visible_dot_size");
    } else if (
      tagID === "#home_content" ||
      tagID === "#courses_content" ||
      tagID === "#blog_content" ||
      tagID === "#shop_content" ||
      tagID === "#element_content"
    ) {
      hidden_dot.className = "nav-link hidden_dot_3";
    }
  }
}
function hiddenContent(tagID) {
  var obj = document.querySelector(tagID);
  var currentLI = obj.parentNode;
  var hidden_dot = currentLI.querySelector("#hidden_dot");
  var visible_dot = document.querySelector("#visible_dot");
  obj.className = "animation_2";
  if (tagID === "#about_content") {
    visible_dot.classList.remove("remain_visible_dot_size");
  } else if (
    tagID === "#home_content" ||
    tagID === "#courses_content" ||
    tagID === "#blog_content" ||
    tagID === "#shop_content" ||
    tagID === "#element_content"
  ) {
    hidden_dot.className = "nav-link hidden_dot_1";
  }
}

// sticky nav
$(window).scroll(function () {
  if ($(window).scrollTop() == 0) {
    document.querySelector("#global-nav").className =
      "navbar-expand-lg navbar-light header-fixed1";
    document.querySelector("#header").className = "header_animation_1";
  }

  if ($(window).scrollTop() >= 300) {
    document.querySelector("#global-nav").className =
      "navbar-expand-lg navbar-light header-fixed2";
    document.querySelector("#header").className =
      "header_animation_2 position-fixed";
  }
});

function showSpecialContent(tagID) {
  document.querySelector(tagID).classList.remove("d-none");
}
function hiddenSpecialContent(tagID) {
  document.querySelector(tagID).classList.add("d-none");
}
