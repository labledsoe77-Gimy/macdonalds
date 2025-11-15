// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Handle "Order Now" button
    const orderButton = document.getElementById("orderButton");
    orderButton.addEventListener("click", function() {
        alert("Thank you for ordering! 🍔🍟🍦");
    });

    // Make menu items clickable
    const menuItems = document.querySelectorAll(".menu-items .item");
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            const itemName = item.querySelector("h3").textContent;
            alert(`${itemName} added to your cart! 🛒`);
        });
    });

});
