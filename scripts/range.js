const initialValue = document.getElementById("range");
initialValue.value = 300;

document.getElementById("range").addEventListener("input", function () {
   let rangeValue = this.value;

   let minRange = 300;
   let midRange = 10900;
   let maxRange = 20000;

   let minPrice = 1568;
   let midPrice = 56963;
   let maxPrice = 104520;

   let price;

   if (rangeValue <= midRange) {
      price =
         minPrice +
         ((midPrice - minPrice) * (rangeValue - minRange)) /
            (midRange - minRange);
   } else {
      price =
         midPrice +
         ((maxPrice - midPrice) * (rangeValue - midRange)) /
            (maxRange - midRange);
   }

   price = Math.round(price).toLocaleString("en-US");
   let formattedAmount = Number(rangeValue).toLocaleString("en-US");

   // Actualizar la cantidad y el precio en el DOM
   document.getElementById("amount").innerText = `$${formattedAmount}`;
   document.getElementById("price").innerText = `$${price}`;
});
