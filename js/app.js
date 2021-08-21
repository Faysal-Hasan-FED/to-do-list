document.getElementById("add-button").addEventListener('click', function () {
    const inputField = document.getElementById("input-field");
    const inputFieldText = inputField.value;
    const listContainer = document.getElementById("item-container");
    let li = document.createElement('li');
    li.classList.add("item");
    li.innerText = inputFieldText;
    listContainer.appendChild(li);
    inputField.value = '';
})