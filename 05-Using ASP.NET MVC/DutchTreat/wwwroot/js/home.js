$(document).ready(function () {
  console.log("Hello World");
  var theForm = $("#theForm");//document.getElementById("theForm");
  theForm.hide(); // hidden = true;

  var button = $("#button"); // document.getElementById("buyButton");
  //button.addEventListener("click", function () {
  //  alert("Buying...");
  //});
  button.on("click", function () {
    alert("Buying...");
  })

  var listItems = document.getElementsByClassName("product-info");
  listItems[0].addEventListener("click", function () {
    alert("prodList");
  });

  var popup = $("#login-block .popup-form");
  $("#login-block .toggle-item").on("click", function () {
    popup.slideToggle(250);
  });

});
