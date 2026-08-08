
const items = document.getElementById("items");
const progress = document.getElementById("progress");
const message = document.getElementById("message");
const newItem = document.getElementById("newItem");
const addBtn = document.getElementById("addBtn");
const collegeBtn = document.getElementById("collegeBtn");
const labBtn = document.getElementById("labBtn");
const outingBtn = document.getElementById("outingBtn");


collegeBtn.addEventListener("click", function () {

    showItems([
        "🪪 ID Card",
        "📓 Notebook",
        "💻 Laptop",
        "💧 Water Bottle"
    ]);

});


labBtn.addEventListener("click", function () {

    showItems([
        "🪪 ID Card",
        "📓 Lab File",
        "✏️ Pen",
        "🧮 Calculator"
    ]);

});


outingBtn.addEventListener("click", function () {

    showItems([
        "📱 Phone",
        "💰 Wallet",
        "🔑 Keys",
        "💧 Water Bottle",
        "🍿 Snacks"
    ]);

});
addBtn.addEventListener("click", function () {

    const text = newItem.value.trim();

    if (text === "") {
        return;
    }

    const item = document.createElement("div");

    item.innerHTML = `
        <input type="checkbox">
        <span>${text}</span>
    `;

    const checkbox = item.querySelector("input");

    checkbox.addEventListener("change", updateProgress);

    items.appendChild(item);

    newItem.value = "";

    updateProgress();
});

function showItems(list) {

    items.innerHTML = "";/*clear the old content*/ 

    for (let i = 0; i < list.length; i++) {

        const item = document.createElement("div");

        item.innerHTML = `
    <input type="checkbox">
    <span>${list[i]}</span>
    <button class="delete-btn">✕</button>
    `;
        const checkbox = item.querySelector("input");
        checkbox.addEventListener("change", updateProgress);

        items.appendChild(item);
        const deleteBtn = item.querySelector(".delete-btn");

deleteBtn.addEventListener("click", function () {
    item.remove();
    updateProgress();
});
    }

}
function updateProgress() {

    const checkboxes = document.querySelectorAll("#items input");

    let checked = 0;

    for (let i = 0; i < checkboxes.length; i++) {

        if (checkboxes[i].checked) {
            checked++;
        }

    }

    progress.innerText = checked + " / " + checkboxes.length + " items packed";
    
    if (checked === checkboxes.length) {
    message.innerText = "🎉 All packed! You're ready to go! 🚀";
} else {
    message.innerText = "⚠️ " + (checkboxes.length - checked) + " item(s) remaining";
}
}

window.addEventListener("beforeunload", function () {
    localStorage.setItem("bagItems", items.innerHTML);
});
window.addEventListener("load", function () {
    const savedItems = localStorage.getItem("bagItems");

    if (savedItems) {
        items.innerHTML = savedItems;

        const checkboxes = document.querySelectorAll("#items input");

        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].addEventListener("change", updateProgress);
        }

        updateProgress();
    }
});