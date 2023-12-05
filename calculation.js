// shob item gular selection function
let total = 0;

function cardClickCards(target){
    
    const selectedItemsContainer = document.getElementById("selected-items");
    const itemsName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemsName;
    selectedItemsContainer.appendChild(li);
// capturing price
    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
// making total
    total = parseInt(total) + parseInt(price);
    document.getElementById("total").innerText=total;

// discount & total cost
        const discount = document.getElementById("total-discount");
        const totalPrice = document.getElementById("total-cost");
if (total > 0) {
    const purchaseButton = document.getElementById("purchase-button");
    purchaseButton.disabled = false;
    purchaseButton.style.backgroundColor = "#E527B2";
    purchaseButton.style.color = "#fff";
    purchaseButton.style.cursor = "pointer";
    showModal();
  }

  if (total >= 200) {
    const buttonApply = document.getElementById("button-apply");
    buttonApply.disabled = false;
    buttonApply.style.backgroundColor = "#E527B2";
    buttonApply.style.color = "#fff";
    buttonApply.style.cursor = "pointer";

    buttonApply.addEventListener("click", function () {
      const couponCode = document.getElementById("coupon");
      if (couponCode.value === "SELL200") {
        const discountPrice = total * 0.2;
        discount.innerText = discountPrice;
        totalPrice.innerText = (total - discountPrice);
      } else {
        alert("Invalid Coupon Code");
      }
    });
  }

}

function showModal() {
  if (total > 0) {
    const modal = document.getElementById("purchase-button");
    modal.disabled = false;
  }
}