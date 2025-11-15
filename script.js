// Handle "Order Now" button
document.getElementById("orderButton").addEventListener("click", function() {
    alert("Redirecting you to the order page... 🍔🍟🍦");
});

// Make menu items clickable
const menuItems = document.querySelectorAll(".menu-items .item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const itemName = item.querySelector("h3").textContent;
        alert(`${itemName} added to your cart! 🛒`);
    });
});
