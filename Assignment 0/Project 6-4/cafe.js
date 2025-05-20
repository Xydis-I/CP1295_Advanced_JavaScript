"use strict";
const $ = selector => document.querySelector(selector);

const getSelectedProduct = src => {
    
};

document.addEventListener("DOMContentLoaded", () => {
   const images = $("#menu-list").children;
   let total = 0;

   const prices = {
      "espresso":1.95,
      "latte":3.15,
      "cappuccino":3.45,
      "coffee":2.15,
      "biscotti":2.90,
      "scone":2.95
   }

   for (let image of images) {
      image = image.getElementsByTagName("img")[0];

      let info = image.id;
      let original = image.src;

      image.addEventListener("mouseover", () =>{
         image.src = info;
      });

      image.addEventListener("mouseout", () =>{
         image.src = original;
      });

      image.addEventListener("click", () => {
         let option = document.createElement("option");
         option.innerHTML = `$${prices[`${image.alt}`].toFixed(2)} - ${image.alt.charAt(0).toUpperCase() + image.alt.slice(1)}`;
         document.getElementById("order").appendChild(option);
         total += prices[`${image.alt}`];
         document.getElementById("total").innerHTML = `Total: $${total.toFixed(2)}`;
      });
   }

   $("#place_order").addEventListener("click", () => {
      window.location.href = "checkout.html";
   });

   $("#clear_order").addEventListener("click", () => {
      $("#order").innerHTML = "";
      total = 0;
      document.getElementById("total").innerHTML = "";
   });
}); 