document.getElementById("add-button").addEventListener('click', function () {
    const inputField = document.getElementById("input-field");
    const inputFieldText = inputField.value;
    const listContainer = document.getElementById("item-container");
    let li = document.createElement('li');
    li.classList.add("item");
    if (inputFieldText != '') {
        li.innerText = inputFieldText;
        listContainer.appendChild(li);
        const totalTask = document.getElementById("total-task");
        totalTaskText = totalTask.innerText;
        let totalTaskNumber = parseInt(totalTaskText);
        totalTaskNumber++;
        totalTask.innerText = totalTaskNumber;
    }
    else {
        alert("Please Enter Something");
    }

    inputField.value = '';
})